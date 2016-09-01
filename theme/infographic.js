
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('infographic', {
        //主题颜色
        "color": [
            "#01c5c3",
            "#ff7c27",
            "#256af7",
            "#54ca8d",
            "#fcbd10",
            "#8031ec",
            "#cc1392",
            "#99d302",
            "#f05119"
        ],
        "backgroundColor": "rgba(0,0,0,0)",
        "textStyle": {
            "fontFamily":"微软雅黑",
            "fontWeight":"normal"
        },
        "title": {
            "textStyle": {
                "color": "#008fd4",
                "fontSize":"14",
                "fontWeight":"normal"

            },
            "subtextStyle": {
                "color": "#aaaaaa"
            }
        },
        "grid": {
            "left": '10',
            "right": '10',
            "bottom": '5%',
            "top":'60',
            "containLabel": true
        },
        "line": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "5",
            "symbol": "emptyCircle",
            "smooth": false,

        },
        "radar": {
            "itemStyle": {
                "normal": {
                    "borderWidth": 1
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "3"
                }
            },
            "symbolSize": "5",
            "symbol": "emptyCircle",
            "smooth": true
        },
        "bar": {
            "barMaxWidth":28,
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "avoidLabelOverlap": false,
            "minAngle" :1,
            "selectedMode":"single",
            "color":[
                "#f4a570",
                "#a4bf6a",
                "#8ac9b6",
                "#71a2ba",
                "#bea5c8",               
            ],
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            },
            "label": {
                "normal":{
                    "show":true,
                    "position":"center",
                    "formatter":"{a0}",
                     "textStyle" : {
                            "fontSize" : '14',
                            "fontWeight" : 'normal',
                            "color":"#999"
                    },
                },
                "emphasis": {
                    "show" : false,
                    "position" : 'center',
                    "textStyle" : {
                            "fontSize" : '16',
                            "fontWeight" : 'normal',
                            "color":"#999"
                    },
                    "formatter":"{b}"                                    
                 },
                
            },
            "labelLine": {
                "normal": {
                    "show": false,
                    "length":0,
                }
            },
        },
        "scatter": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c1232b",
                    "color0": "#b5c334",
                    "borderColor": "#c1232b",
                    "borderColor0": "#b5c334",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "1",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaaaaa"
                }
            },
            
            "symbolSize": "5",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#01c5c3",
                "#ff7c27",
                "#256af7",
                "#54ca8d",
                "#fcbd10",
                "#8031ec",
                "#cc1392",
                "#99d302",
                "#f05119"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#666666",
                        "fontSize": 12
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#ffffff",
                    "borderWidth": "1",
                   
                },
                
            },
            "label": {
                "normal": {
                    "show":true,
                    "textStyle": {
                        "color": "#585858"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#dddddd",
                    "borderColor": "#eeeeee",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "areaColor": "rgba(254,153,78,1)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#c1232b"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(100,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#666666",
                    "fontSize": 12
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#e5e5e5"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#666666",
                    "fontSize": 12
                },
                "inside":false
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#e5e5e5"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            },
            "splitNumber":5,
            "boundaryGap": ['20%', '20%'],
            "scale":true,

        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#cccccc"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#666666",
                    "fontSize": 12
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#e5e5e5"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#008acd"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#333",
                    "fontSize": 12
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#3ab1ea"
                },
                "emphasis": {
                    "borderColor": "#007bb6"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            },
            "itemHeight":12,
            "itemGap":5,
            "inactiveColor":"#bbbbbb",
            "align":"left"
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "rgba(129,142,148,0.65)",
                    "width": 1,
                    "type":"dashed"
                },
                "crossStyle": {
                    "color": "rgba(129,142,148,0.65)",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#7b2754",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#72d4e0"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#27727b",
                    "borderColor": "#27727b",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#27727b",
                    "borderColor": "#27727b",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#c1232b",
                "borderColor": "rgba(194,53,49,0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#98e2a6",
                "#9ad0e2",
                "#f7e685",
                "#f6c88a",
                "#ff8e74"
            ],
            "align":"left"
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(239,239,255,1)",
            "fillerColor": "rgba(182,162,222,0.2)",
            "handleColor": "#3ab1ea",
            "handleSize": "100%",
            "textStyle": {
                "color": "#666666"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#666666"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#666666"
                    }
                }
            }
        }
    });
}));
