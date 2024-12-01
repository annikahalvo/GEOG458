var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1IjoiYWhhbHZvIiwiYSI6ImNtMWpqOXk3dTEzZDIyam9nMnZwOXBlOXIifQ.Zj7VFGxBruejC3KeT-yE3Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Tree Canopy and Climate Change in Seattle from 2016-2021',
    subtitle: 'How has climate change impacted Seattle trees in recent years, and how will that impact us?',
    byline: 'By Annika Halvorson and Xander Bishop',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'title-basically',
            alignment: 'left',
            hidden: false,
            title: 'Tree Cover and Climate Change',
            image: 'GEOG458-1/images/seattle-trees.jpg', //fix this so an actual image shows up
            description: 'go into how tree cover and climate change are realated, cite a scientific article or something as a set up for what we will talk about eventually', //find articles and make it sound smart
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'seattle',//just a polygon of the Seattle area
                    opacity: 0.5
                },
                {layer: 'parks', //parks layer to also set the scene for what the viewers will be looking at
                    opacity: 0.5
                }
            ],
            onChapterExit: []
        },
        {
            id: 'tree-canopy-2016',
            alignment: 'left',
            hidden: false,
            title: '2016 Tree Canopy',
            //image: 
            // -7,'#d7191c',                                                        -2, '#fdae61',                                               0, '#ffffbf',                                                       2, '#a6d96a',                                                   7,'#1a9641' ≥
            description: '<div class="legend" id="pop-legend"><h4>Tree Canopy %</h4><div><span style="background-color: #f7fcf5"></span> ≤ 0</div><div><span style="background-color: #e5f5e0"></span> ≤ 5</div><div><span style="background-color: #c7e9c0"></span> ≤ 15</div><div><span style="background-color: #a1d99b"></span> ≤ 20</div><div><span style="background-color: #74c476"></span> ≤ 25</div><div><span style="background-color: #41ab5d"></span> ≤ 30</div><div><span style="background-color: #238b45"></span> ≤ 40</div><div><span style="background-color: #006d2c"></span> ≤ 50</div><div><span style="background-color: #00441b"></span> ≤ 70</div><div><span style="background-color: #000"></span> ≤ 90</div></div> <div>Tree Canopy data is displayed here in 50 acre hexagons, and the percentage is the amount of area within those 50 acres that have tree canopy </div>',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'parks',
                    opacity: 0
                     },
                {
                    layer: 'treeperchange',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                     layer: 'treeperchange',
                     opacity: 0
                 },
                 {
                    layer: 'treeper2021',
                    opacity: 0.0
                 }
            ]
        },
        {
            id: 'tree-canopy-2021',
            alignment: 'left',
            hidden: false,
            title: '2021 Tree Canopy',
            //image: 'images/SeattlesTopParks_JapaneseGardens_credit-Amelia-Vaughn.jpg',
            description: '<div class="legend" id="pop-legend"><h4>Tree Canopy %</h4><div><span style="background-color: #f7fcf5"></span> ≤ 0</div><div><span style="background-color: #e5f5e0"></span> ≤ 5</div><div><span style="background-color: #c7e9c0"></span> ≤ 15</div><div><span style="background-color: #a1d99b"></span> ≤ 20</div><div><span style="background-color: #74c476"></span> ≤ 25</div><div><span style="background-color: #41ab5d"></span> ≤ 30</div><div><span style="background-color: #238b45"></span> ≤ 40</div><div><span style="background-color: #006d2c"></span> ≤ 50</div><div><span style="background-color: #00441b"></span> ≤ 70</div><div><span style="background-color: #000"></span> ≤ 90</div></div> <div>This is the Tree Canopy from 2021, it might be hard to see, but many areas of Seattle experienced significant changes </div>',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'treeperchange',
                    opacity: 0
                },
                {layer: 'treeper2021',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {layer: 'treeper2021',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'change-trees',
            alignment: 'left',
            hidden: false,
            title: '% Absolute Change between 2016-2021',
            //image: '',
            description: '<div class="legend" id="pop-legend"><h4>% Change (ABS)</h4><div><span style="background-color: #d7191c"></span> ≤ -7</div><div><span style="background-color: #fdae61"></span> ≤ -2</div><div><span style="background-color: #ffffbf"></span> ≤ 0</div><div><span style="background-color: #a6d96a"></span> ≤ 2</div><div><span style="background-color: #1a9641"></span> ≤ 7</div></div> <div>This highlights the areas of significant change in tree canopy between 2016-2021. It shows the percent of the absolute change in Tree canopy over the 5 years</div>',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'treeper2021',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'temperature',
            alignment: 'left',
            hidden: false,
            title: 'Maximum Average Afternoon Temperature',
            image: '',
            description: '<div class="legend" id="pop-legend"><h4>Max Avg Afternoon Temperature (°F)</h4><div><span style="background-color: #ffffcc"></span> ≤ 80°</div><div><span style="background-color: #ffeda0"></span> ≤ 83°</div><div><span style="background-color: #fed976"></span> ≤ 84°</div><div><span style="background-color: #feb24c"></span> ≤ 85°</div><div><span style="background-color: #fd8d3c"></span> ≤ 86°</div><div><span style="background-color: #fc4e2a"></span> ≤ 87°</div><div><span style="background-color: #e31a1c"></span> ≤ 88°</div><div><span style="background-color: #b10026"></span> ≤ 92°</div><div><span style="background-color: #000000"></span> Water</div></div> <div>The Maximum Average Afternoon temperature is directly correlated with both Climate Change and Tree Canopy of an area. Areas in the 2021 tree canopy map with less tree canopy are shown in this map to have a higher maximum afternoon temperature.</div>',
            //'The Maximum Average Afternoon temperature is directly correlated with both Climate Change and Tree Canopy of an area.',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'temp',
                    opacity: 1

                },
                {layer: 'treeper2016',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {layer: 'treeper2021',
                    opacity: 0
                }
            ]
        },
        {
            id: 'parks!',
            alignment: 'left',
            hidden: false,
            title: 'Seattle Parks and Tree Canopy',
            //image: 'images/SeattlesTopParks_JapaneseGardens_credit-Amelia-Vaughn.jpg',
            description: 'add something here when we figure out what we want to do',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.42,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'treeperchange',
                    opacity: 0
                },
                {layer: 'treeper2021',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {layer: 'treeper2021',
                    opacity: 0.0
                }
            ]
        }
    ]
};