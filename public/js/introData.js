Highcharts.setOptions({
  colors: ['#0371c0', '#59585a', '#95a0a9', '#d2cbb8', '#f6abac']
});


$(function () { 

$(".dropdown-trigger").dropdown();

var data_camps1 = [
    ['Camp 10',1,'',''],
    ['Camp 11',1,'',''],
    ['Camp 12',1,'',''],
    ['Camp 13',1,'',''],
    ['Camp 14',1,'',''],
    ['Camp 15',1,'',''],
    ['Camp 16',1,'',''],
    ['Camp 17',1,'',''],
    ['Camp 18',1,'',''],
    ['Camp 19',1,'',''],
    ['Camp 1E',1,'',''],
    ['Camp 1W',1,'',''],
    ['Camp 20',1,'',''],
    ['Camp 21',1,'',''],
    ['Camp 22',1,'',''],
	['Camp 23',1,'',''],
    ['Camp 24',1,'',''],
    ['Camp 25',1,'',''],
    ['Camp 26',1,'',''],
    ['Camp 27',1,'',''],
    ['Camp 2E',1,'',''],
    ['Camp 2W',1,'',''],
    ['Camp 3',1,'',''],
	['Camp 4',1,'',''],
    ['Camp 5',1,'',''],
    ['Camp 6',1,'',''],
    ['Camp 7',1,'',''],
    ['Camp 8E',1,'',''],
    ['Camp 8W',1,'',''],
    ['Camp 9',1,'',''],
	['Nayapara RC',1,'',''],
	['Kutupalong RC','Unassessed Camp'],['Camp 4 Extension','Unassessed Camp'],['Camp 20 Extension',0,'',''],
];

	$.getJSON('data/campsjoin.geojson', function (geojson) {

    Highcharts.mapChart('container_intro2', {
        chart: {
            map: geojson, backgroundColor: 'transparent',
        },

        title: {
            text: ''
        },
		credits:
			{
			enabled:false
			},
		exporting: {
			enabled: false
		},

        mapNavigation: {
            enabled: false,
            buttonOptions: {
              enabled:false
            }
        },
		 legend: {enabled:true,
            title: {
                text: ''
            },
           align: 'center',
            verticalAlign: 'bottom',
			x:220,
			y:-20,
			itemMarginTop: 10,
			symbolWidth: 10,
			floating:true,
        },

		plotOptions: {
        map: {
			allAreas: false,
            joinBy: ['New_Camp_N', 'code'],
            dataLabels: {
                enabled: false,
                color: '#59585a',
                style: {textOutline:false,
                    fontWeight: 'bold'
                },
                format: '{point.properties.New_Camp_N}',
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '<div><div>{point.properties.New_Camp_N}: <b>{series.name}</b></div></div>'
            }
        }
    },

       series: [{
            name: 'Assessed Camp', borderColor: '#ffffff',color:'#0371c0',
			data: ['Camp 10','Camp 11', 'Camp 12','Camp 14','Camp 16', 'Camp 23', 'Camp 5','Nayapara RC', 'Camp 13','Camp 15','Camp 17','Camp 18','Camp 19','Camp 1E','Camp 1W','Camp 20','Camp 21', 'Camp 22','Camp 24', 'Camp 25','Camp 26', 'Camp 27','Camp 2E', 'Camp 2W', 'Camp 3', 'Camp 4', 'Camp 6', 'Camp 7', 'Camp 8E', 'Camp 8W', 'Camp 9'].map(function(code){
				return {code:code};
		})},
			{
			name: 'Unassessed Camp', borderColor: '#59585a', color:'#cecece',
			data: ['Kutupalong RC','Camp 4 Extension', 'Camp 20 Extension'].map(function(code){
				return {code:code};
			})},]
    });
	
});
});

$(function () { var data_camps = [
    ['Camp 10',1,'',''],
    ['Camp 11',1,'',''],
    ['Camp 12',1,'',''],
    ['Camp 13',1,'',''],
    ['Camp 14',1,'',''],
    ['Camp 15',1,'',''],
    ['Camp 16',1,'',''],
    ['Camp 17',1,'',''],
    ['Camp 18',1,'',''],
    ['Camp 19',1,'',''],
    ['Camp 1E',1,'',''],
    ['Camp 1W',1,'',''],
    ['Camp 20',1,'',''],
    ['Camp 21',1,'',''],
    ['Camp 22',1,'',''],
	['Camp 23',1,'',''],
    ['Camp 24',1,'',''],
    ['Camp 25',1,'',''],
    ['Camp 26',1,'',''],
    ['Camp 27',1,'',''],
    ['Camp 2E',1,'',''],
    ['Camp 2W',1,'',''],
    ['Camp 3',1,'',''],
	['Camp 4',1,'',''],
    ['Camp 5',1,'',''],
    ['Camp 6',1,'',''],
    ['Camp 7',1,'',''],
    ['Camp 8E',1,'',''],
    ['Camp 8W',1,'',''],
    ['Camp 9',1,'',''],
	['Nayapara RC',1,'',''],
	['Kutupalong RC',0,'',''],['Camp 4 Extension',0,'',''],['Camp 20 Extension','',''],
	['',0,'Naikhongchhari',1],['',0,'Ukhia',1],['',0,'Teknaf',1]
];
	
	$.getJSON('data/combined.geojson', function (geojson) {

    // Initiate the chart
    Highcharts.mapChart('container_intro', {
        chart: {
            map: geojson, backgroundColor: 'transparent',
        },

        title: {
            text: ''
        },
		credits:
			{
			enabled:false
			},
		exporting: {
			enabled: false
		},

        mapNavigation: {
            enabled: false,
            buttonOptions: {
              enabled:false
            }
        },
		 legend: {enabled:false,
            title: {
                text: ''
            },
            align: 'center',
            verticalAlign: 'bottom',  
        },

        colorAxis: {
            min: 0,
            max: 1,
            minColor: '#ffffff',
            maxColor: '#0371c0'
        },

        series: [{
            data: data_camps,
            keys: ['New_Camp_N','value','Upazila','UpazilaNum'],
            joinBy: 'New_Camp_N',
            name: 'Camp',
			borderColor: '#59585a',
            borderWidth: 0.4,
			nullInteraction:false,
            states: {
                hover: {
                    borderWidth:100, borderColor:'#59585a', brightness:0.1
                }
            },
            dataLabels: {
                enabled: true, overflow: true, allowOverlap:true, inside:true,
				color:'#59585a', style: {textOutline:false,fontSize:"14px"},
                format: '{point.properties.Upazila}'
            },
			 tooltip: {
                headerFormat: '',
				pointFormat: '<b>{point.properties.New_Camp_N}</b>'},
				hideDelay: 1000

        }]
    });
	
});

});