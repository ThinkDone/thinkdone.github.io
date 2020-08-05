function red_area(map) {
    var ellipse = new AMap.Ellipse({
        center: [121.339746, 31.196293],
        radius: [4000, 12000], //半径
        borderWeight: 3,
        fillColor: 'red',
        fillOpacity: 0.1,
        strokeColor: "#fff", 
        strokeWeight: 0,
    })

    ellipse.setMap(map)
    
    var circle1 = new AMap.Circle({
        center: new AMap.LngLat(121.363568, 31.268727),     // 圆心位置
        radius: 5000,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle1);

    var circle2 = new AMap.Circle({
        center: new AMap.LngLat(121.550805, 31.153725),     // 圆心位置
        radius: 5000,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle2);

    var circle3 = new AMap.Circle({
        center: new AMap.LngLat(121.87292, 31.051303),      // 圆心位置
        radius: 5000,                                       // 圆半径
        fillColor: 'red',                                   // 圆形填充颜色
        fillOpacity: 0.1,                                   // 填充颜色透明度
        strokeColor: '#fff',                                // 描边颜色
        strokeWeight: 0,                                    // 描边宽度
    });

    map.add(circle3);

//    var circle4 = new AMap.Circle({
//        center: new AMap.LngLat(121.538549, 31.333808),     // 圆心位置
//        radius: 3000,                                       // 圆半径
//        fillColor: 'red',                                   // 圆形填充颜色
//        fillOpacity: 0.1,                                   // 填充颜色透明度
//        strokeColor: '#fff',                                // 描边颜色
//        strokeWeight: 0,                                    // 描边宽度
//    });
//
//    map.add(circle4);
}