/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["com/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
