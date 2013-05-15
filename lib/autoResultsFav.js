/*******************************************************************************
 * Copyright (c) 2013 IBM Corporation.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Eclipse Distribution License v. 1.0 which accompanies this distribution.
 *  
 *  The Eclipse Public License is available at http://www.eclipse.org/legal/epl-v10.html
 *  and the Eclipse Distribution License is available at
 *  http://www.eclipse.org/org/documents/edl-v10.php.
 *  
 *  Contributors:
 *  
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

function getCreatorURL() {

	return "http://10.105.11.94:8080/OSLC4JAutomation/services/autoResults/7";

	    
}
window.onload = function() {

	// create the plugin
	var headers = {
		name: "OSLC Auto Results for Orion Editor",
		version: "0.1",
		description: "Plugin that provides OSLC Automation Results"
	};
	
	var provider = new orion.PluginProvider(headers);
	
	var serviceImpl = {
		run : function(text, fullText, selection, fileName) {
		    var launchUrl = getCreatorURL();
		    if (launchUrl) {
				return {uriTemplate: launchUrl, width: "800px", height: "405px"};
			}
		}
	};
	
	// service props
	var serviceProps = {
		id: "oslcAutoResult",
		img: "http://open-services.net/favicon.ico",
		tooltip: "Latest Build Result",
		key: ["r", true, false, false],
		name: "Latest Build Result"
	};
	
	provider.registerServiceProvider("orion.edit.command", serviceImpl, serviceProps);

	provider.connect();
};