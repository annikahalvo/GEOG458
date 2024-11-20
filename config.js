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
    title: 'Tree Canopy and Climate Change in Seattle',
    subtitle: 'Subtitle',
    byline: 'By Annika Halvorson and Xander Bishop',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'title1',
            //image: ,
            description: 'T',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'treeperchange',
                    opacity: 1
                     },
                {
                    layer: 'treeper2021',
                    opacity: 0.0
                }
            ],
            onChapterExit: [
                {
                     layer: 'treeperchange',
                     opacity: 1
                 },
                 {
                    layer: 'treeper2021',
                    opacity: 0.0
                 }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Title2',
            //image: 'images/SeattlesTopParks_JapaneseGardens_credit-Amelia-Vaughn.jpg',
            description: '',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.5,
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
                    opacity: 1
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
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Title3',
            //image: '',
            description: '',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'treeper2021',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Parks and Private Schools',
            image: '',
            description: '',
            location: {
                center: [-122.34259, 47.61399],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'treeper2021',
                    opacity: 1

                },
                {layer: 'treeper2016',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {layer: 'treeper2021',
                    opacity: 0
                }
            ]
        }
    ]
};