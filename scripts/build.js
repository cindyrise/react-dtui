
//rollup with plugins
const rollup = require('rollup').rollup;
const babelRollup = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;
const replace = require('rollup-plugin-replace');
const resolveNode = require('rollup-plugin-node-resolve');
const postcss=require('rollup-plugin-postcss');
const cssnano =require('cssnano');
const autoprefixer = require('autoprefixer');
const progress = require('rollup-plugin-progress');

const rimraf = require('rimraf');
const join = require('path').join;
const fs = require('fs');
const exec = require('child_process').exec;
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const showWrite = argv.progress;
const showSection = argv.step || true;
const log = console.log;
const CLI = {
    section: msg => showSection ? log(chalk.white(chalk.underline.bgBlue(msg))) : false,
    write: (indicator, msg) => showWrite ? process.stdout.write(`(${chalk.red(indicator)})` + msg) : false
};

const Bundles = {
    UMD: 'UMD',
    UMD_MINI: 'UMD_MINI',
    IIFE: 'IIFE',
    IIFE_MINI: 'IIFE_MINI'

};
let tasks = [];

function makeBundleAttributes(bundleType) {
    let atrs = {
        path :'./release/dist/',
        format: 'umd',
        sourceMap: true,
        plugins: []
    };
    switch (bundleType) {
        case Bundles.UMD_MINI:
            atrs.plugins.push(uglify());
            atrs.format = 'umd';
            break;
        case Bundles.UMD:
            atrs.sourceMap = false;
            break;
    }
    return atrs;
}

function makeConfig(bundleType) {
    let atrs = makeBundleAttributes(bundleType);
    let config = {
        input: 'src/index.js',
        plugins: [
            postcss({
                plugins: [cssnano(),autoprefixer],
                extract:atrs.path+'roo-bat.min.css'
              }),
            cjs({
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react/react.js': ['PropTypes', 'Component']
                }
            }),
            babelRollup({
                babelrc: false,
                exclude: 'node_modules/**',
                presets: [['es2015', { modules: false }], 'stage-2', 'react'],
                plugins: ['external-helpers']
            }),
            resolveNode({
                jsnext: true,
                main: true
            }),
        ].concat(atrs.plugins),
        external: ['react', 'react-dom'],
    };
    if (showWrite) {
        config.plugins.push(progress({
            clearLine: false
        }));
    }
    return config;
}

function createTask(msg, fn) {
    return () => {
        CLI.section(msg);
        return new Promise((res, rej) => fn(res, rej));
    };
}
function runTasks($tasks) {
    let index = 0;
    return new Promise((res, rej) => {
        function next() {
            if (index < $tasks.length) {
                $tasks[index]().then(next, rej);
                index++;
            } else {
                res();
            }
        }
        next();
    });
}

function createNodeBuild() {
    return (res, rej) => {
        let count = 0;
        let bat = exec(' babel ./src --out-dir ./release/lib --copy-files', { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
            if (error) {
                rej(error);
                return;
            }
        });
        bat.stdout.on('data', (data) => {
            CLI.write(count++, data);
        });
        bat.on('exit', (code) => {
            res(code);
        });
    };
}

function createBundle(bundleType) {
    let atrs = makeBundleAttributes(bundleType);
    return (res, rej) => {
        rollup(makeConfig(bundleType))
            .then(bundle => {
                CLI.section('Writing Bundle to file');
                return bundle.write({
                    name: 'roo-bat',
                    file: atrs.path + (bundleType==Bundles.UMD_MINI ?'roo-bat.min.js': 'roo-bat.js'),
                    format: atrs.format,
                    sourcemap: atrs.sourceMap,
                    globals: {
                        react: 'React'
                    }
                });
            })
            .then(() => {
                res();
            })
            .catch(err => {
                rej(err);
            });
    };
}

rimraf('release', () => {
    fs.mkdirSync('release');
    fs.mkdirSync(join('release', 'lib'));
    fs.mkdirSync(join('release', 'dist'));
    tasks.push(
        createTask('Making Babel Modules', createNodeBuild()),
        createTask('Making UMD Modules', createBundle(Bundles.UMD)),
        createTask('Making UMD MINI Bundles', createBundle(Bundles.UMD_MINI)),
    );
    runTasks(tasks).then(() => {
        CLI.section('FINISH release');
    }, err => {
        log('Error', err);
    });

});

