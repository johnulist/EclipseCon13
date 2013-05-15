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

function getCreatorURL(text) {
     var launchUrl = null;
     var bugMatch = text.match("@see bug (.*)");
     if (bugMatch) {
        var bugId = bugMatch[1].trim();
	    launchUrl = "http://10.105.11.94:8081/OSLC4JBugzilla/services/219/changeRequests/" + bugId + "/smallPreview";
	 };
	 return launchUrl;
	    
}
window.onload = function() {

	// create the plugin
	var headers = {
		name: "OSLC Bug Display for Orion Editor",
		version: "0.1",
		description: "Plugin that provides a view of an OSLC Bugzilla ChangeRequest"
	};
	
	var provider = new orion.PluginProvider(headers);
	
	var serviceImpl = {
		run : function(text, fullText, selection, fileName) {
		    var launchUrl = getCreatorURL(text);
		    if (launchUrl) {
				return {uriTemplate: launchUrl, width: "650px", height: "405px"};
			}
		}
	};
	
	// service props
	var serviceProps = {
		id: "oslcBugDisplay",
		img: "http://open-services.net/favicon.ico",
		tooltip: "Open an OSLC Change Request in Bugzilla",
		key: ["b", true, false, false],
		name: "View Bug"
	};
	
	provider.registerServiceProvider("orion.edit.command", serviceImpl, serviceProps);

	provider.connect();
};