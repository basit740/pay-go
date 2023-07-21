const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
	addWebpackAlias({
		components: path.resolve(__dirname, 'src/components'),
		styles: path.resolve(__dirname, 'src/styles'),
		pages: path.resolve(__dirname, 'src/pages'),
		utils: path.resolve(__dirname, 'src/utils'),
		routes: path.resolve(__dirname, 'src/routes'),
		store: path.resolve(__dirname, 'src/store'),
		services: path.resolve(__dirname, 'src/services'),
	})
);
