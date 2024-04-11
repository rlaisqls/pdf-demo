const mustache = require('mustache')
const fs = require('fs')
const path = require('path');

exports.processTemplate = async (template_path, data) => {
	const template = fs.readFileSync(path.join(__dirname, template_path), 'utf-8')
	return mustache.render(template, data);
}