let kShotController = function () {
    var _hashmap;
    var array;
    var p;

    var kShot = function () {
        _hashmap = {};
        array = {};
        p;
        var callback = {
            onsuccess: function (p) {
                var max = [];
                var res;
                for (var i = 1; i <= p.length; i++) {
                    _recursiveKShot(i);
                }
                res = Math.max.apply(Math, max);
                document.getElementById("Resultado").innerHTML = (res*1000).toString();
            },
            onerror: function () {
            }
        };
        _getP(callback)
    };

    var _recursiveKShot = function (i) {
        if (i in array) {
            return array[i];
        }
        else {
            var max = [];
            for (var j = i + 1; j <= p.length; j++) {
                max[j] = _maxProfit(i, j) + _recursiveKShot(j + 1) / 1000;
            }
            array[i] = Math.max.apply(Math, max);
        }
    };

    var _maxProfit = function (i, j) {
        if (i.toString() + "," + j.toString() in _hashmap) {
            return map[i.toString() + "," + j.toString()]
        }
        else {
            if (i == j) {
                return 0;
            }
            else _hashmap[i.toString() + "," + j.toString()] = Math.max(p[j] - p[i], _maxProfit(i + 1, j), _maxProfit(i, j - 1));
        }
    };

    var _getP = function (callback) {
        p = document.getElementById("P").value;
        p = p.split(",");
        p = parseInt(p);
        callback.onsuccess(p);
    };


    return {kShot : kShot};
};