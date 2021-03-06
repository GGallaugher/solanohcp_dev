
//Feature selection style
OpenLayers.Feature.Vector.style={
	"default":{
		fillColor:"#ee9900",
		fillOpacity:0.0,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#FFFF00",
		strokeOpacity:0.8,
		strokeWidth:2,
		strokeLinecap:"round",
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"inherit",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3
		},

	select:{
		fillColor:"blue",
		fillOpacity:0.0,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#FF0000",
		strokeOpacity:1,
		strokeWidth:3,
		strokeLinecap:"round",
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"pointer",
		fontColor:"#000000",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3},
		
	temporary:{
		fillColor:"#66cccc",
		fillOpacity:0.2,
		hoverFillColor:"white",
		hoverFillOpacity:0.8,
		strokeColor:"#66cccc",
		strokeOpacity:1,
		strokeLinecap:"round",
		strokeWidth:2,
		strokeDashstyle:"solid",
		hoverStrokeColor:"red",
		hoverStrokeOpacity:1,
		hoverStrokeWidth:0.2,
		pointRadius:6,
		hoverPointRadius:1,
		hoverPointUnit:"%",
		pointerEvents:"visiblePainted",
		cursor:"inherit",
		fontColor:"#000000",
		labelAlign:"cm",
		labelOutlineColor:"white",
		labelOutlineWidth:3},
		
	"delete":{
		display:"none"}
	};

Heron.options.map.layers = [

    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
	new OpenLayers.Layer.Google(
			"Google Satellite",
			{type: google.maps.MapTypeId.HYBRID, visibility: true},
			{singleTile: false, buffer: 0, isBaseLayer: true, }
	), 
	
	gHyb = 	new OpenLayers.Layer.Google(
			"Google Terrain",
			{type: google.maps.MapTypeId.TERRAIN, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),	

	new OpenLayers.Layer.Google(
			"Google Streets", // the default
			{type: google.maps.MapTypeId.ROADMAP, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),




	
		
	
	new OpenLayers.Layer("None", {isBaseLayer: true, numZoomLevels: 30}),	
	
    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
	new OpenLayers.Layer.Google(
			"Google Satellite",
			{type: google.maps.MapTypeId.HYBRID, visibility: true},
			{singleTile: false, buffer: 0, isBaseLayer: true, }
	), 
	
	gHyb = 	new OpenLayers.Layer.Google(
			"Google Terrain",
			{type: google.maps.MapTypeId.TERRAIN, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),	

	new OpenLayers.Layer.Google(
			"Google Streets", // the default
			{type: google.maps.MapTypeId.ROADMAP, visibility: false},
			{singleTile: false, buffer: 0, isBaseLayer: true}
	),




	
		
	
	new OpenLayers.Layer("None", {isBaseLayer: true, numZoomLevels: 30}),	
	
	
	
    /*
     * ==================================
     *       All Other Layers
     * ==================================
     */
		
	new OpenLayers.Layer.WMS(
		"Plan Area",
		'/geoserver/wms?',
		{layers: "development:planarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, }
	),
		new OpenLayers.Layer.WMS(
	//	"Riparian",
	//	'/geoserver/wms?',
	//	{layers: "development:riparian", transparent: true, format: 'image/png', tiled: false},
	//	{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, }
	//),
		new OpenLayers.Layer.WMS(
		"County Divide",
		'/geoserver/wms?',
		{layers: "development:countydivide", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: true, }
	),
	new OpenLayers.Layer.WMS(
	"Natural Communities",
		'/geoserver/wms/?',
		{layers: "development:naturalcommunities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853),visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Steelhead Distribution: Central California Coast (CCC) and California Central Valley (CCV)",
		'/geoserver/wms/?',
		{layers: "development:ccc_ccv_distribution", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	


	new OpenLayers.Layer.WMS(
		"City Plan Participants",
		'/geoserver/wms?',
		{layers: "development:cities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"All Watersheds",
		'/geoserver/wms?',
		{layers: "development:watersheds", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis Reserve Boundary",
		'/geoserver/wms?',
		{layers: "development:travis_reserve", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false,  maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Mitigation Banks",
		'/geoserver/wms?',
		{layers: "development:potmitlands", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13579771.6367, 4590800.29473, -13571179.3664, 4624964.5494), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	new OpenLayers.Layer.WMS(
		"Covered Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms?',
		{layers: "development:vfg_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594, 4585882.0959, -13539439.4477, 4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Key Corridors",
		'/geoserver/wms?',
		{layers: "development:corridors_linkages_lines", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601903.5012, 4606409.26512, -13567359.2427, 4645375.70888), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Delta Region Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "development:delta_region_marshconsarea", transparent: true, format: 'image/png', tiled: true},    
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13564715.4743616, 4588106.09835662, -13547991.9018731, 4623061.62230363), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Protected Lands",
		'/geoserver/wms?',
		{layers: "development:protectedlands_final", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis Air Force Base - Not Part of the HCP",
		'/geoserver/wms?',
		{layers: "development:travis_afb_boundary", transparent: true, format: 'image/png', tiled: true, zoomOnRowDoubleClick: true, zoomOnFeatureSelect: true, zoomToDataExtent: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, visibility: true, maxExtent: new OpenLayers.Bounds(-13578264.4169, 4612969.67961, -13568953.7192, 4620019.49093), noLegend: false,  featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
		new OpenLayers.Layer.WMS(
		"Vegetation and Cover Types",
		'/geoserver/wms?',
		{layers: "development:vegetation", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"Special Management Species",
		'/geoserver/wms?',
		{layers: "development:sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
			new OpenLayers.Layer.WMS(
		"San Pablo Bay and Napa Marsh Conservation Area",
		'/geoserver/wms?',
		{layers: "development:sanpablobayandnapamarshconsarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626310.1303544, 4587824.02695927, -13601372.9745264, 4601586.53802701), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
				new OpenLayers.Layer.WMS(
		"Solano County General Plan Residential, Commercial, and Industrial Land Use Designations - Not part of the HCP",
		'/geoserver/wms?',
		{layers: "development:gp_urbanareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13608245.5126696, 4588117.4245198, -13537416.4143597, 4653489.07462447), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	

	
	
	new OpenLayers.Layer.WMS(
		"Streams",
		'/geoserver/wms?',
		{layers: "development:streamorder", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Suisun Marsh Conservation Areas",
		'/geoserver/wms?',
		{layers: "development:suisunmarsh_consarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596937.1633, 4584961.6703, -13562058.8517, 4613994.73889), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Covered Activity Zones",
		'/geoserver/wms?',
		{layers: "development:zones", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Travis AFB Airport Land Use Planning Wildlife Hazard Areas",
		'/geoserver/wms?',
		{layers: "development:travis_afb_wha", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13587386.8602, 4603031.00508, -13558784.062, 4629898.95054), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Priority Drainages",
		'/geoserver/wms?',
		{layers: "development:priority_drainages", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677, 4587966.83868, -13547005.2383, 4656020.25213),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "development:vpconspreservation", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13572344.5601, 4613658.29052, -13555110.2047, 4623454.94596), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "development:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas with High Preservation and Restoration Potential",
		'/geoserver/wms?',
		{layers: "development:highrestorationvp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13600036.6653, 4590153.819, -13544174.9844, 4650713.23927), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
	new OpenLayers.Layer.WMS(
		"Priority Watersheds within Conservation Area RSM 1",
		'/geoserver/wms?',
		{layers: "development:priority_watersheds", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13604962.45, 4587456.44953, -13574157.9402, 4650085.93743), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
/*	new OpenLayers.Layer.WMS(
		"Priority Reserve Areas",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:priority_reserve_areas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
*/
new OpenLayers.Layer.WMS(
		"California Tiger Salamander - Known Range",
		'/geoserver/wms?',
		{layers: "development:ctsrange_known_", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13580289.1439, 4601361.95733, -13555824.2803, 4625681.41177), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"California Tiger Salamander - Potential Range",
		'/geoserver/wms?',
		{layers: "development:cts_potentialrange", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13584770.0026826, 4588085.0640865, -13542502.0246416, 4650329.50983062),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "development:crlf_consarea", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615171.28232), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
			new OpenLayers.Layer.WMS(
		"Critical Habitat",
		'/geoserver/wms?',
		{layers: "development:criticalhabitat_all", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
				new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk Conservation Areas",
		'/geoserver/wms?',
		{layers: "development:swhawk_conservationareas", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.9, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
	
new OpenLayers.Layer.WMS(
		"Known Chinook Salmon or Steelhead Spawning Streams",
		'/geoserver/wms?',
		{layers: "development:known_steelhead_spstreams", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13603751.2677,4603303.22271, -13542921.109,4655862.73063), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

	
	new OpenLayers.Layer.WMS(
		"Potential Specialty Reserve Areas",
		'/geoserver/wms?',
		{layers: "development:vp_potentialspecialtyreserves", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13583727.5494, 4617789.09958, -13545017.2465, 4650603.32947), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),

	
	new OpenLayers.Layer.WMS(
		"Wetlands",
		'/geoserver/wms?',
		{layers: "development:wetlandsvernalpools", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13621707.1975, 4588572.2593, -13543865.2076, 4649602.51324),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Conservation Areas",
		'/geoserver/wms?',
		{layers: "development:vernalpoolconsareas", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Inner Coast Range Natural Community",
		'/geoserver/wms?',
		{layers: "development:innercoastrange", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609306.9654, 4587975.39339 ,-13543281.4817, 4651946.09393),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Plan Participant Facilities",
		'/geoserver/wms?',
		{layers: "development:plan_participant_facilities", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853),  visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
/*	new OpenLayers.Layer.WMS(
		"Known Occurrences of Covered Plants: 1/4 Mi Buffer",
		'http://www.hcpmaps.com/geoserver/public/wms?',
		{layers: "public:knownoccurrencescovered_plants", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.7, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),		
*/		

new OpenLayers.Layer.WMS(
		"Irrigated Agricultural Habitat at High Risk",
		'/geoserver/wms?',
		{layers: "development:swhawk_habatrisk", transparent: true, format: 'image/png', tiled:true},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	new OpenLayers.Layer.WMS(
		"Conservation Areas with High Preservation Potential",
		'/geoserver/wms?',
		{layers: "development:vpconspreservation", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	
		new OpenLayers.Layer.WMS(
		"Valley Floor Grassland and Vernal Pool Natural Community",
		'/geoserver/wms?',
		{layers: "development:vfg", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
		
		new OpenLayers.Layer.WMS(
		"Covered Species",
		'/geoserver/wms?',
		{layers: "development:covered_species", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
			new OpenLayers.Layer.WMS(
		"Foothill Yellow-legged Frog Suitable Habitat Range",
		'/geoserver/wms?',
		{layers: "development:fhylf", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	new OpenLayers.Layer.WMS(
		"Streams with Suitable Habitat for Foothill-Yellow Legged Frog",
		'/geoserver/wms?',
		{layers: "development:fhylf_streams", transparent: true, format: 'image/png', tiled: false},
		{singleTile: false, opacity: 1, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611708.9594,4585882.0959, -13539439.4477,4656396.60513), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),
	
	
			new OpenLayers.Layer.WMS(
		"Giant Garter Snake Conservation Area",
		'/geoserver/wms?',
		{layers: "development:ggs_consarea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13563463.6304, 4603085.29652, -13535691.1272, 4653767.56414), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
			new OpenLayers.Layer.WMS(
		"California Red-legged Frog Conservation Area",
		'/geoserver/wms?',
		{layers: "development:crlf_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				new OpenLayers.Layer.WMS(
		"Callippe Silverspot Butterfly Conservation Area",
		'/geoserver/wms?',
		{layers: "development:callipespotbuttfly_crithab", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13606850.8159, 4590876.93963, -13592211.4312, 4615256.95156), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
				
				new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Core Population Areas",
		'/geoserver/wms?',
		{layers: "development:ccf_corepop", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13594051.065, 4609258.34784, -13569435.4929, 4623166.66682), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	
					new OpenLayers.Layer.WMS(
		"Contra Costa Goldfield Potential Habitat, Watershed, and Corridor Areas",
		'/geoserver/wms?',
		{layers: "development:ccg_potential", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 0.8, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13596370.0598, 4603653.98817, -13573012.5201, 4627133.32247), visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml' }
	),	

	new OpenLayers.Layer.WMS(
		"Parcels",
		'/geoserver/wms/?',
		{layers: "development:parcels", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: true, noLegend: false, maxResolution: 18, numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Alkali Milk-Vetch",
		'/geoserver/wms/?',
		{layers: "development:alkalimilkvetch", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"Boggs Lake Hedge-Hyssop",
		'/geoserver/wms/?',
		{layers: "development:boggslakehedgehyssop", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		
		new OpenLayers.Layer.WMS(
		"Burrowing Owl",
		'/geoserver/wms/?',
		{layers: "development:burrowingowl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			
		new OpenLayers.Layer.WMS(
		"California Black Rail",
		'/geoserver/wms/?',
		{layers: "development:californiablackrail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"California Clapper Rail",
		'/geoserver/wms/?',
		{layers: "development:californiaclapperrail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
		"California Tiger Salamander",
		'/geoserver/wms/?',
		{layers: "development:californiatigersalamander", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"California Red-Legged Frog",
		'/geoserver/wms/?',
		{layers: "development:californiaredleggedfrog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Colusa Grass",
		'/geoserver/wms/?',
		{layers: "development:colusagrass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
				new OpenLayers.Layer.WMS(
		"Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "development:riparian", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626748.3693,4583617.59906, -13535237.9591,4656252.18626), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
	new OpenLayers.Layer.WMS(
		"Conservancy Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "development:conservancyfairyshrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
	new OpenLayers.Layer.WMS(
		"Contra Costa Goldfields",
		'/geoserver/wms/?',
		{layers: "development:contracostagoldfields", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Delta Green Ground Beetle",
		'/geoserver/wms/?',
		{layers: "development:deltagreengroundbeetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Delta Smelt",
		'/geoserver/wms/?',
		{layers: "development:deltasmelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Ferris\'s Milk Vetch",
		'/geoserver/wms/?',
		{layers: "development:ferrsmilkvetch", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Giant Garter Snake",
		'/geoserver/wms/?',
		{layers: "development:giantgartersnake", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Legenere",
		'/geoserver/wms/?',
		{layers: "development:legenere", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Longfin Smelt",
		'/geoserver/wms/?',
		{layers: "development:longfinsmelt", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Mason\'s Lilaeopsis",
		'/geoserver/wms/?',
		{layers: "development:masonslilaeopsis", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Sacramento Splittail",
		'/geoserver/wms/?',
		{layers: "development:sacramentosplittail", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Salt Marsh Harvest Mouse",
		'/geoserver/wms/?',
		{layers: "development:saltmarshharvestmouse", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
				new OpenLayers.Layer.WMS(
		"San Joaquin Valley Orcutt Grass",
		'/geoserver/wms/?',
		{layers: "development:sanjoaquinvalleyorcuttgrass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Soft Bird\'s Beak",
		'/geoserver/wms/?',
		{layers: "development:softsaltybirdsbeak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Solano Grass",
		'/geoserver/wms/?',
		{layers: "development:solanograss", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Suisun Thistle",
		'/geoserver/wms/?',
		{layers: "development:suisunthistle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(
		"Swainson\'s Hawk",
		'/geoserver/wms/?',
		{layers: "development:swainsonshawk", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Tricolored Blackbird",
		'/geoserver/wms/?',
		{layers: "development:tricoloredblackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Valley Elderberry Longhorn Beetle",
		'/geoserver/wms/?',
		{layers: "development:valleyelderberrylonghornbeetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Vernal Pool Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "development:vernalpoolfairyshrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Vernal Pool Smallscale",
		'/geoserver/wms/?',
		{layers: "development:vernalpoolsmallscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	new OpenLayers.Layer.WMS(
		"Vernal Pool Tadpool Shrimp",
		'/geoserver/wms/?',
		{layers: "development:vernalpooltadpoleshrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
	"Baker\’s Navarretia",
		'/geoserver/wms/?',
		{layers: "development:bakersnavarretia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Bearded Popcorn-Flower",
		'/geoserver/wms/?',
		{layers: "development:beardedpopcornflower", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Brittlescale",
		'/geoserver/wms/?',
		{layers: "development:brittlescale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(	
		"Carquinez Goldenbush",
		'/geoserver/wms/?',
		{layers: "development:carquinezgoldenbush", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(	
		
		"Delta Mudwort",
		'/geoserver/wms/?',
		{layers: "development:deltamudwort", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(		
		"Delta Tule Pea",
		'/geoserver/wms/?',
		{layers: "development:deltatulepea", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
			"Dwarf Downingia",
		'/geoserver/wms/?',
		{layers: "development:dwarfdowningia", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Ferris\'s Goldfields",
		'/geoserver/wms/?',
		{layers: "development:ferrisgoldfields", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Foothill Yellow-legged Frog",
		'/geoserver/wms/?',
		{layers: "development:foothillyellowleggedfrog", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		
		new OpenLayers.Layer.WMS(	
	"Fragrant Fritillary",
		'/geoserver/wms/?',
		{layers: "development:fragrantfritillary", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Grasshopper Sparrow",
		'/geoserver/wms/?',
		{layers: "development:grasshoppersparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'} 
	),
			new OpenLayers.Layer.WMS(
			"Heartscale",
		'/geoserver/wms/?',
		{layers: "development:heartscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
				"Heckard\'s Pepper-Grass",
		'/geoserver/wms/?',
		{layers: "development:heckardspeppergrass", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
	"Hispid Bird\’s-Beak",
		'/geoserver/wms/?',
		{layers: "development:hispidsbirdsbeak", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Hogwallow Starfish",
		'/geoserver/wms/?',
		{layers: "development:hogwallowstarfish", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Loggerhead Shrike",
		'/geoserver/wms/?',
		{layers: "development:loggerheadshrike", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
"Midvalley Fairy Shrimp",
		'/geoserver/wms/?',
		{layers: "development:midvalleyfairyshrimp", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
		new OpenLayers.Layer.WMS(
	"Northern Harrier",
		'/geoserver/wms/?',
		{layers: "development:northernharrier", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
			new OpenLayers.Layer.WMS(
	"Pappose Tarplant",
		'/geoserver/wms/?',
		{layers: "development:papposetarplant", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
			new OpenLayers.Layer.WMS(	
	"Recurved Larkspur",
		'/geoserver/wms/?',
		{layers: "development:recurvedlarkspur", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Ricksecker\'s Water Scavenger Beetle",
		'/geoserver/wms/?',
		{layers: "development:rickseckerswaterscavengerbeetle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Saline Clover",
		'/geoserver/wms/?',
		{layers: "development:salineclover", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(
		"Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:agriculture", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
		new OpenLayers.Layer.WMS(
		"Special Management Species: Valley Floor Grassland and Vernal Pool",
		'/geoserver/wms/?',
		{layers: "development:vfg_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	
	
		new OpenLayers.Layer.WMS(
		"Salt Marsh Common Yellowthroat",
		'/geoserver/wms/?',
		{layers: "development:saltmarshcommonyellowthroat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),
	new OpenLayers.Layer.WMS(	
		
	"San Joaqin Spearscale",
		'/geoserver/wms/?',
		{layers: "development:sanjoaquinspearscale", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
"San Pablo Song Sparrow",
		'/geoserver/wms/?',
		{layers: "development:sanpablosongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223),  visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Short-Eared Owl",
		'/geoserver/wms/?',
		{layers: "development:shortearedowl", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		

	new OpenLayers.Layer.WMS(	
		"Song Sparrow - \"Modesto\" Population",
		'/geoserver/wms/?',
		{layers: "development:modestosongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
			"Suisun Marsh Aster",
		'/geoserver/wms/?',
		{layers: "development:suisuinmarshaster", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
				"Suisun Shrew",
		'/geoserver/wms/?',
		{layers: "development:suisunshrew", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
				"Coastal Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "development:coastal_marsh", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626578.5093,4584926.09431, -13547685.3045,4644372.83668), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	new OpenLayers.Layer.WMS(
		"Covered Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "development:rip_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Riparian, Stream, and Freshwater Marsh Natural Community",
		'/geoserver/wms/?',
		{layers: "development:rip_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Covered Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:iag_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
		"Special Management Species: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:iag_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
	
		new OpenLayers.Layer.WMS(
	"Suisun Song Sparrow",
		'/geoserver/wms/?',
		{layers: "development:suisunsongsparrow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		new OpenLayers.Layer.WMS(
	"Covered Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "development:icr_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "development:icr_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Covered Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "development:cm_cs", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Special Management Species: Coastal Marsh",
		'/geoserver/wms/?',
		{layers: "development:cm_sms", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Valley Needlegrass Grassland",
		'/geoserver/wms/?',
		{layers: "development:valleyneedlegrassgrassland", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(	
	"Western Pond Turtle",
		'/geoserver/wms/?',
		{layers: "development:westernpondturtle", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),		
		new OpenLayers.Layer.WMS(
	"Woolly Rose-Mallow",
		'/geoserver/wms/?',
		{layers: "development:woollyrosemallow", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Existing and Potential Reserves",
		'/geoserver/wms/?',
		{layers: "development:vernal_pool_potential_preservereserves", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
		
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "development:swhawkpot_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5019,4585882.0959, -13539449.6393,4656396.60513), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "development:swhawkpot_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13611715.7538,4587233.48173, -13564114.1697,4652947.93949), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:swhawkpot_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "development:potswhawk_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13588529.0058736, 4605536.64125984, -13549355.0288774, 4649629.56635739), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:potswhawk_iag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.531,4588905.9717, -13535347.5188,4656380.31719), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

		new OpenLayers.Layer.WMS(
	"Swainson\'s Hawk Potential Reserve Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "development:potswhawk_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941,4585923.07707, -13564111.6218,4653142.2455), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Valley Floor Grassland",
		'/geoserver/wms/?',
		{layers: "development:bocons_vpg", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13609654.5018911, 4585882.09590051, -13539449.639312, 4656396.605131), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Areas",
		'/geoserver/wms/?',
		{layers: "development:bo_consareas", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		
	
	
			new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Irrigated Agriculture",
		'/geoserver/wms/?',
		{layers: "development:bocons_ag", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13605613.5309957, 4588905.97169672, -13535347.5187941, 4656380.31718604), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
				new OpenLayers.Layer.WMS(
	"Burrowing Owl Conservation Area: Inner Coast Range",
		'/geoserver/wms/?',
		{layers: "development:bocons_icr", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
		new OpenLayers.Layer.WMS(
	"Yellow-Breasted Chat",
		'/geoserver/wms/?',
		{layers: "development:yellowbreastedchat", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
			new OpenLayers.Layer.WMS(
	"Streams with Suitable Habitat for Foothill-Yellow Legged Frog",
		'/geoserver/wms/?',
		{layers: "development:fhylf_streams", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	
	new OpenLayers.Layer.WMS(
	"Planned Development within Zone 1",
		'/geoserver/wms/?',
		{layers: "development:zone1_planneddevelopment", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	
	new OpenLayers.Layer.WMS(
	"Yellow-Headed Blackbird Breeding Range",
		'/geoserver/wms/?',
		{layers: "development:yellow_headed_blackbird", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Foothill Yellow-Legged Frog Suitable Habitat Range",
		'/geoserver/wms/?',
		{layers: "development:fhylf", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13612152.2941153, 4585923.07707394, -13564111.6218381, 4653142.24550287), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
		new OpenLayers.Layer.WMS(
	"Irrigation and Reclamation Districts",
		'/geoserver/wms/?',
		{layers: "development:all_irr_dist_boundaries", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	new OpenLayers.Layer.WMS(
	"Callippe Silverspot Butterfly",
		'/geoserver/wms/?',
		{layers: "development:callipesilverspotbutterfly", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13601187.0624,4604653.56283, -13541944.1481,4654650.89223), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Facilities - Point Features",
		'/geoserver/wms/?',
		{layers: "development:facilities_points", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
			new OpenLayers.Layer.WMS(
	"Species - Generalized in Plan Area",
		'/geoserver/wms/?',
		{layers: "development:grid_5000m_allspecies", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
				new OpenLayers.Layer.WMS(
	"Facilities - Line Features",
		'/geoserver/wms/?',
		{layers: "development:facilities_lines", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
					new OpenLayers.Layer.WMS(
	"Facilities - Polygon Features",
		'/geoserver/wms/?',
		{layers: "development:facilities_polys", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	

	new OpenLayers.Layer.WMS(
		"Solano Irrigation District Facilities",
	'/geoserver/wms/?',
		{layers: "development:SID_Facilities", transparent: true, format: 'image/png', tiled: true},
		{singleTile: false, opacity: 1.0, isBaseLayer: false, maxExtent: new OpenLayers.Bounds(-13626283.1384,4584305.78997, -13535992.5479,4655852.27853), visibility: false, noLegend: false,  numZoomLevels: 21,  featureInfoFormat: 'application/vnd.ogc.gml'}
	),	
	//    new OpenLayers.Layer.WMS(
  //          "USA States (Boundless)",
  //          'http://demo.boundlessgeo.com/geoserver/ows?',
 //           {layers: "states", transparent: true, format: 'image/png'},
  //          {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
     //           wfs: {
    //                protocol: 'fromWMSLayer',
    ////                featurePrefix: 'topp',
       //             featureNS: 'http://www.openplans.org/topp',
       //             downloadFormats: Heron.options.wfs.downloadFormats
      //          }
     //       }
      //      }
	parcels = new OpenLayers.Layer.Vector("Parcel Search Results", {noLegend: true, featureInfoFormat: 'application/vnd.ogc.gml'}),
//markers = new OpenLayers.Layer.Vector("Search", {metadata: {legend: {hideInLegend: true}),
    //Heron.App.map.addLayer(markers);
// ];
// Layers are organized in the application using the Layer Tree below:
var newLayertree = [

	{
		text:'Habitat Conservation Plan General Data Layers', nodeType: 'hr_cascader',  expanded: true, children:
			[	
				{nodeType: 'gx_layer', layer: 'Parcels'},	
				{nodeType: 'gx_layer', layer: 'Plan Area'},	
										
				{nodeType: 'gx_layer', layer: 'Travis Air Force Base - Not Part of the HCP'},	
				{nodeType: 'gx_layer', layer: 'Travis Reserve Boundary'},	
		
							
				
						
						
				

			
			]
	},
	
	{
		text:'Base Layers', nodeType: "gx_baselayercontainer", expanded: true
	}	
];


// Replace default layer browser DefaultConfig.js
// Pass our theme tree config as an option
Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = newLayertree;
