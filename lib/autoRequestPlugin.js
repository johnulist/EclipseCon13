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
function getRequestURL(query) {
	 return "http://mffiedler.raleigh.ibm.com:8080/OSLC4JAutomation/services/autoRequests/creator";
}
window.onload = function() {

	// create the plugin
	var headers = {
		name: "OSLC Automation Request Command",
		version: "0.1",
		description: "Plugin that provides OSLC Automation Requests"
	};
	
	var provider = new orion.PluginProvider(headers);
	
	var serviceImpl = {
		run : function(selection) {
			return {uriTemplate: getRequestURL(selection), width: "500px", height: "350px"};
		}
	};
	
	// service props
	var serviceProps = {
		id: "oslcAutoRequest",
		name: "OSLC Automation Request",
		image: "http://open-services.net/favicon.ico",
		uriTemplate: "http://mffiedler.raleigh.ibm.com:8080/OSLC4JAutomation/services/autoRequests/creator",
		tooltip: "Submit an OSLC Automation Request"
	};
	
	provider.registerServiceProvider("orion.navigate.command", {} , serviceProps);

	provider.connect();
};
