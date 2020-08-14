function point(map, data, radius=3, color='#14B4C9') {
    var layer = new Loca.ScatterPointLayer({
        eventSupport: true,
        map: map
    });

    layer.on('mousemove', function (ev) {
        // 事件类型
        var type = ev.type;
        // 当前元素的原始数据
        var rawData = ev.rawData;
        // 原始鼠标事件
        var originalEvent = ev.originalEvent;

        openInfoWin(map, originalEvent, {
            '名称': rawData.name,
            '别名': rawData.alias,
            '挂牌均价': rawData.price,
            '建筑年代': rawData.year,
            '建筑类型': rawData.type,
            '物业费用': rawData.price2,
            '物业公司': rawData.property,
            '开发商': rawData.developer,
            '楼栋总数': rawData.building,
            '房屋总数': rawData.households,
        });
    });

    layer.on('mouseleave', function (ev) {
        closeInfoWin();
    });

    // 传入原始数据
    layer.setData(data, {
        lnglat: 'location'
    })

    // 配置样式
    layer.setOptions({
        unit: 'px',
        style: {
            radius: radius,         // 圆形半径，单位像素
            color: color,           // 填充颜色
            borderWidth: 0.5,       // 边框宽度
            borderColor: color      // 边框颜色
        },
        selectStyle: {
            radius: radius,
            color: '#14B4C9'
        }
    });

    layer.render();
}
