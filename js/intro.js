var ucretKey = 0;
var AlmaHa_status = 0;
var PostRe_status = 0;
var PTTIsY_status = 0;
var UcAlTa_status = 0;
var GidDon_status = 0;
var Servis_status = 0;
var ResPul_status = 0;
var AdresAl_status = 0;
var SehIci_status = 0;
var Visa_status = 0;
var TelAra_status = 0;
var PTTUcak_status = 0;
var PosCek_status = 0;
var DegKon_status = 0;
var OdeSar_status = 0;
var UcOdMa_status = 0;
var Donus_status = 0;
var Teblig_status = 0;
var Kontes_status = 0;
var Ozulak_status = 0;
var Alkentes_status = 0;
var Norkoli_status = 0;
var Seckoli_status = 0;
var temelUcret = 0;
var topluAdet = 0;
var topluUcret = 0;
var vr_temelucret = 0;
var vr_cbx_almaha = 0;
var vr_cbx_postre = 0;
var vr_cbx_ucalta = 0;
var vr_cbx_adrestenal = 0;
var vr_cbx_sehirici = 0;
var vr_cbx_alkentes = 0;
var vr_cbx_ucak = 0;
var vr_cbx_oz_ulak = 0;
var vr_cbx_kontes = 0;
var vr_cbx_giddon = 0;
var vr_cbx_servis = 0;
var vr_cbx_respul = 0;
var vr_cbx_degkon = 0;
var vr_cbx_odesar = 0;
var vr_cbx_donus = 0;
var vr_cbx_ucodma = 0;
var vr_cbx_telefon_arama = 0;
var vr_cbx_teblig = 0;
var desimiagirlikmi = "";
var ucret = "0.00";
var ekHiz = "";
var ucret_hatasi = 0;
function UcretHesapla() {
    var pagirlik = document.getElementById("txt_agirlik").value;
    var pdesi = document.getElementById("txt_desi").value;
    var p_adet = document.getElementById("txt_adet").value;
    var pdesi1 = pdesi * 1000;
    ucret_hatasi = 0;
    ucret1 = normalUcret(pagirlik);
    ucret2 = desiUcret(pdesi1);
    if (ucret1 > ucret2) {
        ucret = ucret1;
        desimiagirlikmi = 'A';
    } else {
        ucret = ucret2;
        desimiagirlikmi = 'D';
    }
    vr_temelucret = ucret;
    EkHizmetUcretHesapla();
    ucret = eval("kurusKoy('" + ucret + "')");
    ucret = eval("noktaVirgulSil('" + ucret + "')");
    ucret = (ucret / 100).toFixed(2);
    if (p_adet > 1) {
        ucret = (ucret * p_adet).toFixed(2);
    }
    document.getElementById("div_ucret").innerHTML = ucret + "";
    EkHizmetBelirle();
}
function kurusKoy(deger) {
    var n = deger.indexOf(".");
    var len = deger.length;
    var fark = eval(len - n);
    if (n == -1) {
        deger = deger + ".00";
    } else {
        if (fark == 1) {
            deger = deger + "00";
        } else if (fark == 2) {
            deger = deger + "0";
        } else if (fark == 3) {
            deger = deger + "";
        } else {
            deger = deger + ".00";
        }
    }
    return (deger);
}
function normalUcret(pagirlik) {
    pucret = 0.00;
    var gonderitip1 = "";
    var gonderitur1 = "";
    gonderitip1 = document.getElementById('hv_gonderi_tip').value;
    gonderitur1 = document.getElementById('hv_gonderi_tur').value;
    secili = document.getElementById('rb_tip_kargo').value;
    if (document.getElementById('cbx_sehirici').checked == true) {
        if (pagirlik < 1001) {
            pucret = 5.60;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 7.30;
        } else if (pagirlik > 2000 && pagirlik < 30001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 7.85 + (0.45 * katsayi);
            } else {
                pucret = 7.85 + (0.45 * (katsayi - 1));
            }
        } else if (pagirlik > 30000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 30000) / 1000;
            if (modal > 0) {
                pucret = 18.20 + (0.40 * katsayi);
            } else {
                pucret = 18.20 + (0.40 * (katsayi - 1));
            }
        } else if (pagirlik >= 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 26.30 + (0.50 * katsayi);
            } else {
                pucret = 26.30 + (0.50 * (katsayi - 1));
            }
        }
    } else if (document.getElementById('cbx_pttisy').checked == true) {
        if (pagirlik < 1001) {
            pucret = 5.60;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 7.30;
        } else if (pagirlik > 2000 && pagirlik < 30001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 7.85 + (0.80 * katsayi);
            } else {
                pucret = 7.85 + (0.80 * (katsayi - 1));
            }
        } else if (pagirlik > 30000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 30000) / 1000;
            if (modal > 0) {
                pucret = 29.40 + (0.80 * katsayi);
            } else {
                pucret = 29.40 + (0.80 * (katsayi - 1));
            }
        } else if (pagirlik >= 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 45.25 + (0.65 * katsayi);
            } else {
                pucret = 45.25 + (0.65 * (katsayi - 1));
            }
        }
    } else {
        if (pagirlik < 1001) {
            pucret = 7.75;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 9.00;
        } else if (pagirlik > 2000 && pagirlik < 30001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 9.50 + (0.90 * katsayi);
            } else {
                pucret = 9.50 + (0.90 * (katsayi - 1));
            }
        } else if (pagirlik > 30000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 30000) / 1000;
            if (modal > 0) {
                pucret = 30.90 + (0.80 * katsayi);
            } else {
                pucret = 30.90 + (0.80 * (katsayi - 1));
            }
        } else if (pagirlik >= 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 46.75 + (0.65 * katsayi);
            } else {
                pucret = 46.75 + (0.65 * (katsayi - 1));
            }
        }
    }
    return pucret;
}
function desiUcret(pagirlik) {
    pucret = 0.00;
    var gonderitip1 = "";
    var gonderitur1 = "";
    gonderitip1 = document.getElementById('hv_gonderi_tip').value;
    gonderitur1 = document.getElementById('hv_gonderi_tur').value;
    if (document.getElementById('cbx_sehirici').checked == true) {
        if (pagirlik < 1001) {
            pucret = 5.60;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 7.30;
        } else if (pagirlik > 2000 && pagirlik < 30001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 7.85 + (0.45 * (katsayi + 1));
            } else {
                pucret = 7.85 + (0.45 * (katsayi));
            }
        } else if (pagirlik > 30000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 30000) / 1000;
            if (modal > 0) {
                pucret = 20.45 + (0.45 * (katsayi + 1));
            } else {
                pucret = 20.45 + (0.45 * (katsayi));
            }
        } else if (pagirlik > 50000 && pagirlik < 100001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 29.45 + (0.45 * (katsayi + 1));
            } else {
                pucret = 29.45 + (0.45 * (katsayi));
            }
        } else if (pagirlik > 100000) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 100000) / 1000;
            if (modal > 0) {
                pucret = 46.20 + (0.40 * (katsayi + 1));
            } else {
                pucret = 46.20 + (0.40 * (katsayi));
            }
        }
    } else if (document.getElementById('cbx_pttisy').checked == true) {
        if (pagirlik < 1001) {
            pucret = 5.60;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 7.30;
        } else if (pagirlik > 2000 && pagirlik < 30001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 7.85 + (0.90 * (katsayi + 1));
            } else {
                pucret = 7.85 + (0.90 * (katsayi));
            }
        } else if (pagirlik > 30000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 30000) / 1000;
            if (modal > 0) {
                pucret = 33.05 + (0.90 * (katsayi + 1));
            } else {
                pucret = 33.05 + (0.90 * (katsayi));
            }
        } else if (pagirlik > 50000 && pagirlik < 100001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 50.85 + (0.70 * (katsayi + 1));
            } else {
                pucret = 50.85 + (0.70 * (katsayi));
            }
        } else if (pagirlik > 100000) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 100000) / 1000;
            if (modal > 0) {
                pucret = 77.75 + (0.65 * (katsayi + 1));
            } else {
                pucret = 77.75 + (0.65 * (katsayi));
            }
        }
    } else {
        if (pagirlik < 1001) {
            pucret = 7.75;
        } else if (pagirlik > 1000 && pagirlik < 2001) {
            pucret = 9.00;
        } else if (pagirlik > 2000 && pagirlik < 50001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 2000) / 1000;
            if (modal > 0) {
                pucret = 9.50 + (0.90 * (katsayi + 1));
            } else {
                pucret = 9.50 + (0.90 * (katsayi));
            }
        } else if (pagirlik > 50000 && pagirlik < 100001) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 50000) / 1000;
            if (modal > 0) {
                pucret = 34.70 + (0.70 * (katsayi + 1));
            } else {
                pucret = 34.70 + (0.70 * (katsayi));
            }
        } else if (pagirlik > 100000) {
            modal = pagirlik % 1000;
            katsayi = (pagirlik - modal - 100000) / 1000;
            if (modal > 0) {
                pucret = 79.25 + (0.65 * (katsayi + 1));
            } else {
                pucret = 79.25 + (0.65 * (katsayi));
            }
        }
    }
    return pucret;
}
function EkHizmetUcretHesapla() {
    var sabitUcret = ucret;
    var agirlik = document.getElementById('txt_agirlik').value;
    if (document.getElementById('cbx_almaha').checked == true) {
        ucret = Number(Number(ucret) + Number(1.40));
    }
    if (document.getElementById('cbx_adrestenal').checked == true) {
        var agirlik1 = document.getElementById("txt_agirlik").value;
        var desi1 = document.getElementById("txt_desi").value;
        var gecerli_agirlik = 0;
        gecerli_agirlik = agirlik1;
        if (gecerli_agirlik <= 2000) {
            ucret = Number(Number(ucret) + Number(3.30));
        } else if (gecerli_agirlik > 2000 && gecerli_agirlik <= 10000) {
            ucret = Number(Number(ucret) + Number(4.40));
        } else if (gecerli_agirlik > 10000 && gecerli_agirlik <= 20000) {
            ucret = Number(Number(ucret) + Number(5.50));
        } else if (gecerli_agirlik > 20000 && gecerli_agirlik <= 30000) {
            ucret = Number(Number(ucret) + Number(8.80));
        } else if (gecerli_agirlik > 30000 && gecerli_agirlik <= 50000) {
            ucret = Number(Number(ucret) + Number(16.50));
        }
    }
    if (document.getElementById('cbx_sehirici').checked == true) {
        ucret = Number(ucret);
    }
    if (document.getElementById('cbx_alkentes').checked == true) {
        ucret = Number(Number(ucret) + Number(1.40));
    }
    if (document.getElementById('cbx_odesar').checked == true) {
        ucret = Number(Number(ucret) + Number(1.50));
    }
    if (document.getElementById('cbx_telefon_arama').checked == true) {
        ucret = Number(Number(ucret) + Number(0.75));
    }
    if (document.getElementById('cbx_kontrollu_teslim').checked == true) {
        ucret = Number(Number(ucret) + Number(2.50));
    }
    if (document.getElementById('cbx_ucalta').checked == true) {
        ucret = Number(Number(ucret) + Number(0));
    }
    ucret = trimFixed(ucret);
}
function EkHizmetBelirle() {
    if (document.getElementById('cbx_almaha').checked == true) {
        document.getElementById('cbx_alkentes').checked = false;
        document.getElementById('cbx_alkentes').disabled = true;
    } else {
        document.getElementById('cbx_alkentes').disabled = false;
    }
    if (document.getElementById('cbx_alkentes').checked == true) {
        document.getElementById('cbx_almaha').checked = false;
        document.getElementById('cbx_almaha').disabled = true;
    } else {
        document.getElementById('cbx_almaha').disabled = false;
    }
    if (document.getElementById('cbx_odesar').checked == true) {
        document.getElementById('cbx_ucalta').checked = false;
        document.getElementById('cbx_ucalta').disabled = true;
    } else {
        document.getElementById('cbx_ucalta').disabled = false;
    }
    if (document.getElementById('cbx_ucalta').checked == true) {
        document.getElementById('cbx_odesar').checked = false;
        document.getElementById('cbx_odesar').disabled = true;
    } else {
        document.getElementById('cbx_odesar').disabled = false;
    }
    ekHiz = "";
    if (document.getElementById('cbx_almaha').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_almaha').value;
    }
    if (document.getElementById('cbx_pttisy').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_pttisy').value;
    }
    if (document.getElementById('cbx_adrestenal').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_adrestenal').value;
    }
    if (document.getElementById('cbx_sehirici').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_sehirici').value;
    }
    if (document.getElementById('cbx_alkentes').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_alkentes').value;
    }
    if (document.getElementById('cbx_odesar').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_odesar').value;
    }
    if (document.getElementById('cbx_telefon_arama').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_telefon_arama').value
    }
    if (document.getElementById('cbx_kontrollu_teslim').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_kontrollu_teslim').value
    }
    if (document.getElementById('cbx_ucalta').checked == true) {
        ekHiz = ekHiz + document.getElementById('cbx_ucalta').value
    }
    document.getElementById("ekHizmetler").value = ekHiz;
}
function noktaVirgulSil(text) {
    for (i = 0; i0) {
        for (i = 0; i = "0" && c <= "9") {
            if (m == 0 && c == "0") {
            } else {
                m++;
            }
        }
    else
        if (c == " " || c == "+" || c == "-" || c == ".") {
        } else if (c == "E" || c == "e") {
            e = i;
            break;
        } else {
            return a;
        }
    }
    var b = 1.0 / 3.0;
    var y = "" + b;
    var q = y.indexOf(".");
    var n;
    if (q >= 0) {
        n = y.length - (q + 1);
    } else {
        return a;
    }
    if (m < n) {
        return a;
    }
    var p = x.indexOf(".");
    if (p == -1) {
        return a;
    }
    var w = " ";
    for (var i = e - (m - n) - 1; i >= p + 1; i--) {
        var c = x.substring(i, i + 1);
        if (i == e - (m - n) - 1) {
            continue;
        }
        if (i == e - (m - n) - 2) {
            if (c == "0" || c == "9") {
                w = c;
                continue;
            } else {
                return a;
            }
        }
        if (c != w) {
            if (w == "0") {
                var z = (x.substring(0, i + 1) + x.substring(e, x.length)) - 0;
                return z;
            } else if (w == "9") {
                var z = (x.substring(0, i) + ("" + ((c - 0) + 1)) + x.substring(e, x.length)) - 0;
                return z;
            } else {
                return a;
            }
        }
    }
    if (w == "0") {
        var z = (x.substring(0, p) + x.substring(e, x.length)) - 0;
        return z;
    } else if (w == "9") {
        var z = x.substring(0, p) - 0;
        var f;
        if (a > 0) {
            f = 1;
        } else if (a < 0) {
            f = -1;
        } else {
            return a;
        }
        var r = (("" + (z + f)) + x.substring(e, x.length)) - 0;
        return r;
    } else {
        return a;
    }
}
function makeCurrency(deger) {
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    if (!ucretKey == 0) {
        deger = "";
    }
    if (deger.length > 0) {
        while (deger.substring(0, 1) == 0) {
            deger = deger.substring(1, deger.length);
            if (deger.length < 1)return "0";
        }
        len = deger.length;
        for (i = 0; i < len; i++) if ((deger.charAt(i) != '0') && (deger.charAt(i) != ".")) break;
        aux = '';
        for (; i < len; i++) if (strCheck.indexOf(deger.charAt(i)) != -1) aux += deger.charAt(i);
        aux += key;
        len = aux.length;
        if (len == 0) deger = '0.00';
        if (len == 1) deger = '0' + "." + '0' + aux;
        if (len == 2) deger = '0' + "." + aux;
        if (len > 2) {
            aux2 = '';
            for (j = 0, i = len - 3; i >= 0; i--) {
                if (j == 3) {
                    aux2 += ",";
                    j = 0;
                }
                aux2 += aux.charAt(i);
                j++;
            }
            deger = '';
            len2 = aux2.length;
            for (i = len2 - 1; i >= 0; i--) deger += aux2.charAt(i);
            deger += "." + aux.substr(len - 2, len);
        }
    } else {
        deger = "0.00";
    }
    return deger;
}