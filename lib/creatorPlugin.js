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

function getCreatorURL(query) {
	 return "http://9.27.153.147:8081/OSLC4JBugzilla/services/1/changeRequests/creator";
}
window.onload = function() {

	// create the plugin
	var headers = {
		name: "OSLC Creator for Orion Editor",
		version: "0.1",
		description: "Plugin that provides OSLC Creator"
	};
	
	var provider = new orion.PluginProvider(headers);
	
	var serviceImpl = {
		run : function(text, fullText, selection, fileName) {
			return {uriTemplate: getCreatorURL(text), width: "550px", height: "310px"};
		}
	};
	
	// service props
	var serviceProps = {
		id: "oslcCreator",
		img: "http://open-services.net/favicon.ico",
		tooltip: "Search for an OSLC Change Request in Bugzilla",
		name: "Create Bug"
	};
	
	provider.registerServiceProvider("orion.edit.command", serviceImpl, serviceProps);

	provider.connect();
};
