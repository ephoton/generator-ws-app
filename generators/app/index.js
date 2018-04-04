/**
 * generator-ts-lib 
 */

var path = require('path'),
    chalk = require('chalk'),
    Generator = require('yeoman-generator'),
    // yosay = require('yosay'),
    fs = require('fs'),
    path = require('path'),
    templatesPath = path.join(__dirname, 'templates');

function copyFilesOfDir(dirPath) {
    var self = this;

    fs.readdir(dirPath, function(err, files) {
        if (err) {
            return;
        }

        files.map(function (file) {
            var newPath = path.join(dirPath, file);

            if (fs.lstatSync(newPath).isDirectory()) {
                self.fs.directory(newPath, file);
            } else {
                self.fs.copy(newPath, file);
            }
        });
    });
}

module.exports = class extends Generator {
    info() {
        this.log(chalk.green(
            'Generating generator now: '
        ));
    }

    generateBasic() {
        // copyFilesOfDir.call(this, templatesPath);
        let to = path.resolve('./');
        this.fs.copyTpl(templatesPath, to);
    }

    generateClient() {
        this.sourceRoot(templatesPath);
        this.destinationPath('./');
    }

    install() {
        var self = this;

        this.log(chalk.green(
            '\nBegin installing dependencies'
        ));
        this.installDependencies({
            npm: false,
            bower: false,
            yarn: true,
            skipMessage: true,
            callback: function () {
                self.log(chalk.green(
                    'Finish installing dependencies!'
                ));

                self.end();
            }
        });
    }

    end() {
        this.log(chalk.yellow(
            '\nYour generator has been created successfully!\n'
        ));
    }
};
