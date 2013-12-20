var addToHome = function(w) {
    var nav = w.navigator, isIDevice = "platform" in nav && /iphone|ipod|ipad/gi.test(nav.platform), isIPad, isRetina, isSafari, isStandalone, OSVersion, startX = 0, startY = 0, lastVisit = 0, isExpired, isSessionActive, isReturningVisitor, balloon, overrideChecks, positionInterval, closeTimeout, options = {
        autostart: true,
        returningVisitor: false,
        animationIn: "drop",
        animationOut: "fade",
        startDelay: 2e3,
        lifespan: 15e3,
        bottomOffset: 14,
        expire: 0,
        message: "",
        touchIcon: false,
        arrow: true,
        hookOnLoad: true,
        closeButton: true,
        iterations: 100
    }, intl = {
        ar: '<span dir="rtl">قم بتثبيت هذا التطبيق على <span dir="ltr">%device:</span>انقر<span dir="ltr">%icon</span> ،<strong>ثم اضفه الى الشاشة الرئيسية.</strong></span>',
        ca_es: "Per instal·lar aquesta aplicació al vostre %device premeu %icon i llavors <strong>Afegir a pantalla d'inici</strong>.",
        cs_cz: "Pro instalaci aplikace na Váš %device, stiskněte %icon a v nabídce <strong>Přidat na plochu</strong>.",
        da_dk: "Tilføj denne side til din %device: tryk på %icon og derefter <strong>Føj til hjemmeskærm</strong>.",
        de_de: "Installieren Sie diese App auf Ihrem %device: %icon antippen und dann <strong>Zum Home-Bildschirm</strong>.",
        el_gr: "Εγκαταστήσετε αυτήν την Εφαρμογή στήν συσκευή σας %device: %icon μετά πατάτε <strong>Προσθήκη σε Αφετηρία</strong>.",
        en_us: "Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.",
        es_es: "Para instalar esta app en su %device, pulse %icon y seleccione <strong>Añadir a pantalla de inicio</strong>.",
        fi_fi: "Asenna tämä web-sovellus laitteeseesi %device: paina %icon ja sen jälkeen valitse <strong>Lisää Koti-valikkoon</strong>.",
        fr_fr: "Ajoutez cette application sur votre %device en cliquant sur %icon, puis <strong>Ajouter à l'écran d'accueil</strong>.",
        he_il: '<span dir="rtl">התקן אפליקציה זו על ה-%device שלך: הקש %icon ואז <strong>הוסף למסך הבית</strong>.</span>',
        hr_hr: "Instaliraj ovu aplikaciju na svoj %device: klikni na %icon i odaberi <strong>Dodaj u početni zaslon</strong>.",
        hu_hu: "Telepítse ezt a web-alkalmazást az Ön %device-jára: nyomjon a %icon-ra majd a <strong>Főképernyőhöz adás</strong> gombra.",
        it_it: "Installa questa applicazione sul tuo %device: premi su %icon e poi <strong>Aggiungi a Home</strong>.",
        ja_jp: "このウェブアプリをあなたの%deviceにインストールするには%iconをタップして<strong>ホーム画面に追加</strong>を選んでください。",
        ko_kr: '%device에 웹앱을 설치하려면 %icon을 터치 후 "홈화면에 추가"를 선택하세요',
        nb_no: "Installer denne appen på din %device: trykk på %icon og deretter <strong>Legg til på Hjem-skjerm</strong>",
        nl_nl: "Installeer deze webapp op uw %device: tik %icon en dan <strong>Voeg toe aan beginscherm</strong>.",
        pl_pl: "Aby zainstalować tę aplikacje na %device: naciśnij %icon a następnie <strong>Dodaj jako ikonę</strong>.",
        pt_br: "Instale este aplicativo em seu %device: aperte %icon e selecione <strong>Adicionar à Tela Inicio</strong>.",
        pt_pt: "Para instalar esta aplicação no seu %device, prima o %icon e depois em <strong>Adicionar ao ecrã principal</strong>.",
        ru_ru: "Установите это веб-приложение на ваш %device: нажмите %icon, затем <strong>Добавить в «Домой»</strong>.",
        sv_se: "Lägg till denna webbapplikation på din %device: tryck på %icon och därefter <strong>Lägg till på hemskärmen</strong>.",
        th_th: "ติดตั้งเว็บแอพฯ นี้บน %device ของคุณ: แตะ %icon และ <strong>เพิ่มที่หน้าจอโฮม</strong>",
        tr_tr: "Bu uygulamayı %device'a eklemek için %icon simgesine sonrasında <strong>Ana Ekrana Ekle</strong> düğmesine basın.",
        uk_ua: "Встановіть цей веб сайт на Ваш %device: натисніть %icon, а потім <strong>На початковий екран</strong>.",
        zh_cn: "您可以将此应用程式安装到您的 %device 上。请按 %icon 然后点选<strong>添加至主屏幕</strong>。",
        zh_tw: "您可以將此應用程式安裝到您的 %device 上。請按 %icon 然後點選<strong>加入主畫面螢幕</strong>。"
    };
    function init() {
        if (!isIDevice) return;
        var now = Date.now(), i;
        if (w.addToHomeConfig) {
            for (i in w.addToHomeConfig) {
                options[i] = w.addToHomeConfig[i];
            }
        }
        if (!options.autostart) options.hookOnLoad = false;
        isIPad = /ipad/gi.test(nav.platform);
        isRetina = w.devicePixelRatio && w.devicePixelRatio > 1;
        isSafari = /Safari/i.test(nav.appVersion) && !/CriOS/i.test(nav.appVersion);
        isStandalone = nav.standalone;
        OSVersion = nav.appVersion.match(/OS (\d+_\d+)/i);
        OSVersion = OSVersion && OSVersion[1] ? +OSVersion[1].replace("_", ".") : 0;
        lastVisit = +w.localStorage.getItem("addToHome");
        isSessionActive = w.sessionStorage.getItem("addToHomeSession");
        isReturningVisitor = options.returningVisitor ? lastVisit && lastVisit + 28 * 24 * 60 * 60 * 1e3 > now : true;
        if (!lastVisit) lastVisit = now;
        isExpired = isReturningVisitor && lastVisit <= now;
        if (options.hookOnLoad) w.addEventListener("load", loaded, false); else if (!options.hookOnLoad && options.autostart) loaded();
    }
    function loaded() {
        w.removeEventListener("load", loaded, false);
        if (!isReturningVisitor) w.localStorage.setItem("addToHome", Date.now()); else if (options.expire && isExpired) w.localStorage.setItem("addToHome", Date.now() + options.expire * 6e4);
        if (!overrideChecks && (!isSafari || !isExpired || isSessionActive || isStandalone || !isReturningVisitor)) return;
        var touchIcon = "", platform = nav.platform.split(" ")[0], language = nav.language.replace("-", "_");
        balloon = document.createElement("div");
        balloon.id = "addToHomeScreen";
        balloon.style.cssText += "left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:" + (OSVersion < 5 ? "absolute" : "fixed");
        if (options.message in intl) {
            language = options.message;
            options.message = "";
        }
        if (options.message === "") {
            options.message = language in intl ? intl[language] : intl["en_us"];
        }
        if (options.touchIcon) {
            touchIcon = isRetina ? document.querySelector('head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon]') : document.querySelector('head link[rel^=apple-touch-icon][sizes="57x57"],head link[rel^=apple-touch-icon]');
            if (touchIcon) {
                touchIcon = '<span style="background-image:url(' + touchIcon.href + ')" class="addToHomeTouchIcon"></span>';
            }
        }
        balloon.className = (OSVersion >= 7 ? "addToHomeIOS7 " : "") + (isIPad ? "addToHomeIpad" : "addToHomeIphone") + (touchIcon ? " addToHomeWide" : "");
        balloon.innerHTML = touchIcon + options.message.replace("%device", platform).replace("%icon", OSVersion >= 4.2 ? '<span class="addToHomeShare"></span>' : '<span class="addToHomePlus">+</span>') + (options.arrow ? '<span class="addToHomeArrow"' + (OSVersion >= 7 && isIPad && touchIcon ? ' style="margin-left:-32px"' : "") + "></span>" : "") + (options.closeButton ? '<span class="addToHomeClose">×</span>' : "");
        document.body.appendChild(balloon);
        if (options.closeButton) balloon.addEventListener("click", clicked, false);
        if (!isIPad && OSVersion >= 6) window.addEventListener("orientationchange", orientationCheck, false);
        setTimeout(show, options.startDelay);
    }
    function show() {
        var duration, iPadXShift = 208;
        if (isIPad) {
            if (OSVersion < 5) {
                startY = w.scrollY;
                startX = w.scrollX;
            } else if (OSVersion < 6) {
                iPadXShift = 160;
            } else if (OSVersion >= 7) {
                iPadXShift = 143;
            }
            balloon.style.top = startY + options.bottomOffset + "px";
            balloon.style.left = Math.max(startX + iPadXShift - Math.round(balloon.offsetWidth / 2), 9) + "px";
            switch (options.animationIn) {
              case "drop":
                duration = "0.6s";
                balloon.style.webkitTransform = "translate3d(0," + -(w.scrollY + options.bottomOffset + balloon.offsetHeight) + "px,0)";
                break;

              case "bubble":
                duration = "0.6s";
                balloon.style.opacity = "0";
                balloon.style.webkitTransform = "translate3d(0," + (startY + 50) + "px,0)";
                break;

              default:
                duration = "1s";
                balloon.style.opacity = "0";
            }
        } else {
            startY = w.innerHeight + w.scrollY;
            if (OSVersion < 5) {
                startX = Math.round((w.innerWidth - balloon.offsetWidth) / 2) + w.scrollX;
                balloon.style.left = startX + "px";
                balloon.style.top = startY - balloon.offsetHeight - options.bottomOffset + "px";
            } else {
                balloon.style.left = "50%";
                balloon.style.marginLeft = -Math.round(balloon.offsetWidth / 2) - (w.orientation % 180 && OSVersion >= 6 && OSVersion < 7 ? 40 : 0) + "px";
                balloon.style.bottom = options.bottomOffset + "px";
            }
            switch (options.animationIn) {
              case "drop":
                duration = "1s";
                balloon.style.webkitTransform = "translate3d(0," + -(startY + options.bottomOffset) + "px,0)";
                break;

              case "bubble":
                duration = "0.6s";
                balloon.style.webkitTransform = "translate3d(0," + (balloon.offsetHeight + options.bottomOffset + 50) + "px,0)";
                break;

              default:
                duration = "1s";
                balloon.style.opacity = "0";
            }
        }
        balloon.offsetHeight;
        balloon.style.webkitTransitionDuration = duration;
        balloon.style.opacity = "1";
        balloon.style.webkitTransform = "translate3d(0,0,0)";
        balloon.addEventListener("webkitTransitionEnd", transitionEnd, false);
        closeTimeout = setTimeout(close, options.lifespan);
    }
    function manualShow(override) {
        if (!isIDevice || balloon) return;
        overrideChecks = override;
        loaded();
    }
    function close() {
        clearInterval(positionInterval);
        clearTimeout(closeTimeout);
        closeTimeout = null;
        if (!balloon) return;
        var posY = 0, posX = 0, opacity = "1", duration = "0";
        if (options.closeButton) balloon.removeEventListener("click", clicked, false);
        if (!isIPad && OSVersion >= 6) window.removeEventListener("orientationchange", orientationCheck, false);
        if (OSVersion < 5) {
            posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY;
            posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth) / 2) - startX;
        }
        balloon.style.webkitTransitionProperty = "-webkit-transform,opacity";
        switch (options.animationOut) {
          case "drop":
            if (isIPad) {
                duration = "0.4s";
                opacity = "0";
                posY += 50;
            } else {
                duration = "0.6s";
                posY += balloon.offsetHeight + options.bottomOffset + 50;
            }
            break;

          case "bubble":
            if (isIPad) {
                duration = "0.8s";
                posY -= balloon.offsetHeight + options.bottomOffset + 50;
            } else {
                duration = "0.4s";
                opacity = "0";
                posY -= 50;
            }
            break;

          default:
            duration = "0.8s";
            opacity = "0";
        }
        balloon.addEventListener("webkitTransitionEnd", transitionEnd, false);
        balloon.style.opacity = opacity;
        balloon.style.webkitTransitionDuration = duration;
        balloon.style.webkitTransform = "translate3d(" + posX + "px," + posY + "px,0)";
    }
    function clicked() {
        w.sessionStorage.setItem("addToHomeSession", "1");
        isSessionActive = true;
        close();
    }
    function transitionEnd() {
        balloon.removeEventListener("webkitTransitionEnd", transitionEnd, false);
        balloon.style.webkitTransitionProperty = "-webkit-transform";
        balloon.style.webkitTransitionDuration = "0.2s";
        if (!closeTimeout) {
            balloon.parentNode.removeChild(balloon);
            balloon = null;
            return;
        }
        if (OSVersion < 5 && closeTimeout) positionInterval = setInterval(setPosition, options.iterations);
    }
    function setPosition() {
        var matrix = new WebKitCSSMatrix(w.getComputedStyle(balloon, null).webkitTransform), posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY, posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth) / 2) - startX;
        if (posY == matrix.m42 && posX == matrix.m41) return;
        balloon.style.webkitTransform = "translate3d(" + posX + "px," + posY + "px,0)";
    }
    function reset() {
        w.localStorage.removeItem("addToHome");
        w.sessionStorage.removeItem("addToHomeSession");
    }
    function orientationCheck() {
        balloon.style.marginLeft = -Math.round(balloon.offsetWidth / 2) - (w.orientation % 180 && OSVersion >= 6 && OSVersion < 7 ? 40 : 0) + "px";
    }
    init();
    return {
        show: manualShow,
        close: close,
        reset: reset
    };
}(window);

(function(global, undefined) {
    "use strict";
    var document = global.document, Alertify;
    Alertify = function() {
        var _alertify = {}, dialogs = {}, isopen = false, keys = {
            ENTER: 13,
            ESC: 27,
            SPACE: 32
        }, queue = [], $, btnCancel, btnOK, btnReset, btnFocus, elCallee, elCover, elDialog, elLog, form, input, getTransitionEvent;
        dialogs = {
            buttons: {
                holder: '<nav class="alertify-buttons">{{buttons}}</nav>',
                submit: '<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                ok: '<button class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',
                cancel: '<button class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</button>'
            },
            input: '<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',
            message: '<p class="alertify-message">{{message}}</p>',
            log: '<article class="alertify-log{{class}}">{{message}}</article>'
        };
        getTransitionEvent = function() {
            var t, type, supported = false, el = document.createElement("fakeelement"), transitions = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    type = transitions[t];
                    supported = true;
                    break;
                }
            }
            return {
                type: type,
                supported: supported
            };
        };
        $ = function(id) {
            return document.getElementById(id);
        };
        _alertify = {
            labels: {
                ok: "OK",
                cancel: "Cancel"
            },
            delay: 5e3,
            buttonReverse: false,
            buttonFocus: "ok",
            transition: undefined,
            addListeners: function(fn) {
                var hasOK = typeof btnOK !== "undefined", hasCancel = typeof btnCancel !== "undefined", hasInput = typeof input !== "undefined", val = "", self = this, ok, cancel, common, key, reset;
                ok = function(event) {
                    if (typeof event.preventDefault !== "undefined") event.preventDefault();
                    common(event);
                    if (typeof input !== "undefined") val = input.value;
                    if (typeof fn === "function") {
                        if (typeof input !== "undefined") {
                            fn(true, val);
                        } else fn(true);
                    }
                    return false;
                };
                cancel = function(event) {
                    if (typeof event.preventDefault !== "undefined") event.preventDefault();
                    common(event);
                    if (typeof fn === "function") fn(false);
                    return false;
                };
                common = function(event) {
                    self.hide();
                    self.unbind(document.body, "keyup", key);
                    self.unbind(btnReset, "focus", reset);
                    if (hasInput) self.unbind(form, "submit", ok);
                    if (hasOK) self.unbind(btnOK, "click", ok);
                    if (hasCancel) self.unbind(btnCancel, "click", cancel);
                };
                key = function(event) {
                    var keyCode = event.keyCode;
                    if (keyCode === keys.SPACE && !hasInput) ok(event);
                    if (keyCode === keys.ESC && hasCancel) cancel(event);
                };
                reset = function(event) {
                    if (hasInput) input.focus(); else if (!hasCancel || self.buttonReverse) btnOK.focus(); else btnCancel.focus();
                };
                this.bind(btnReset, "focus", reset);
                if (hasOK) this.bind(btnOK, "click", ok);
                if (hasCancel) this.bind(btnCancel, "click", cancel);
                this.bind(document.body, "keyup", key);
                if (hasInput) this.bind(form, "submit", ok);
                if (!this.transition.supported) {
                    this.setFocus();
                }
            },
            bind: function(el, event, fn) {
                if (typeof el.addEventListener === "function") {
                    el.addEventListener(event, fn, false);
                } else if (el.attachEvent) {
                    el.attachEvent("on" + event, fn);
                }
            },
            handleErrors: function() {
                if (typeof global.onerror !== "undefined") {
                    var self = this;
                    global.onerror = function(msg, url, line) {
                        self.error("[" + msg + " on line " + line + " of " + url + "]", 0);
                    };
                    return true;
                } else {
                    return false;
                }
            },
            appendButtons: function(secondary, primary) {
                return this.buttonReverse ? primary + secondary : secondary + primary;
            },
            build: function(item) {
                var html = "", type = item.type, message = item.message, css = item.cssClass || "";
                html += '<div class="alertify-dialog">';
                if (_alertify.buttonFocus === "none") html += '<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>';
                if (type === "prompt") html += '<form id="alertify-form">';
                html += '<article class="alertify-inner">';
                html += dialogs.message.replace("{{message}}", message);
                if (type === "prompt") html += dialogs.input;
                html += dialogs.buttons.holder;
                html += "</article>";
                if (type === "prompt") html += "</form>";
                html += '<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>';
                html += "</div>";
                switch (type) {
                  case "confirm":
                    html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.ok));
                    html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "prompt":
                    html = html.replace("{{buttons}}", this.appendButtons(dialogs.buttons.cancel, dialogs.buttons.submit));
                    html = html.replace("{{ok}}", this.labels.ok).replace("{{cancel}}", this.labels.cancel);
                    break;

                  case "alert":
                    html = html.replace("{{buttons}}", dialogs.buttons.ok);
                    html = html.replace("{{ok}}", this.labels.ok);
                    break;

                  default:
                    break;
                }
                elDialog.className = "alertify alertify-" + type + " " + css;
                elCover.className = "alertify-cover";
                return html;
            },
            close: function(elem, wait) {
                var timer = wait && !isNaN(wait) ? +wait : this.delay, self = this, hideElement, transitionDone;
                this.bind(elem, "click", function() {
                    hideElement(elem);
                });
                transitionDone = function(event) {
                    event.stopPropagation();
                    self.unbind(this, self.transition.type, transitionDone);
                    elLog.removeChild(this);
                    if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
                };
                hideElement = function(el) {
                    if (typeof el !== "undefined" && el.parentNode === elLog) {
                        if (self.transition.supported) {
                            self.bind(el, self.transition.type, transitionDone);
                            el.className += " alertify-log-hide";
                        } else {
                            elLog.removeChild(el);
                            if (!elLog.hasChildNodes()) elLog.className += " alertify-logs-hidden";
                        }
                    }
                };
                if (wait === 0) return;
                setTimeout(function() {
                    hideElement(elem);
                }, timer);
            },
            dialog: function(message, type, fn, placeholder, cssClass) {
                elCallee = document.activeElement;
                var check = function() {
                    if (elLog && elLog.scrollTop !== null && elCover && elCover.scrollTop !== null) return; else check();
                };
                if (typeof message !== "string") throw new Error("message must be a string");
                if (typeof type !== "string") throw new Error("type must be a string");
                if (typeof fn !== "undefined" && typeof fn !== "function") throw new Error("fn must be a function");
                if (typeof this.init === "function") {
                    this.init();
                    check();
                }
                queue.push({
                    type: type,
                    message: message,
                    callback: fn,
                    placeholder: placeholder,
                    cssClass: cssClass
                });
                if (!isopen) this.setup();
                return this;
            },
            extend: function(type) {
                if (typeof type !== "string") throw new Error("extend method must have exactly one paramter");
                return function(message, wait) {
                    this.log(message, type, wait);
                    return this;
                };
            },
            hide: function() {
                var transitionDone, self = this;
                queue.splice(0, 1);
                if (queue.length > 0) this.setup(true); else {
                    isopen = false;
                    transitionDone = function(event) {
                        event.stopPropagation();
                        elDialog.className += " alertify-isHidden";
                        self.unbind(elDialog, self.transition.type, transitionDone);
                    };
                    if (this.transition.supported) {
                        this.bind(elDialog, this.transition.type, transitionDone);
                        elDialog.className = "alertify alertify-hide alertify-hidden";
                    } else {
                        elDialog.className = "alertify alertify-hide alertify-hidden alertify-isHidden";
                    }
                    elCover.className = "alertify-cover alertify-cover-hidden";
                    elCallee.focus();
                }
            },
            init: function() {
                document.createElement("nav");
                document.createElement("article");
                document.createElement("section");
                elCover = document.createElement("div");
                elCover.setAttribute("id", "alertify-cover");
                elCover.className = "alertify-cover alertify-cover-hidden";
                document.body.appendChild(elCover);
                elDialog = document.createElement("section");
                elDialog.setAttribute("id", "alertify");
                elDialog.className = "alertify alertify-hidden";
                document.body.appendChild(elDialog);
                elLog = document.createElement("section");
                elLog.setAttribute("id", "alertify-logs");
                elLog.className = "alertify-logs alertify-logs-hidden";
                document.body.appendChild(elLog);
                document.body.setAttribute("tabindex", "0");
                this.transition = getTransitionEvent();
                delete this.init;
            },
            log: function(message, type, wait) {
                var check = function() {
                    if (elLog && elLog.scrollTop !== null) return; else check();
                };
                if (typeof this.init === "function") {
                    this.init();
                    check();
                }
                elLog.className = "alertify-logs";
                this.notify(message, type, wait);
                return this;
            },
            notify: function(message, type, wait) {
                var log = document.createElement("article");
                log.className = "alertify-log" + (typeof type === "string" && type !== "" ? " alertify-log-" + type : "");
                log.innerHTML = message;
                elLog.appendChild(log);
                setTimeout(function() {
                    log.className = log.className + " alertify-log-show";
                }, 50);
                this.close(log, wait);
            },
            set: function(args) {
                var k;
                if (typeof args !== "object" && args instanceof Array) throw new Error("args must be an object");
                for (k in args) {
                    if (args.hasOwnProperty(k)) {
                        this[k] = args[k];
                    }
                }
            },
            setFocus: function() {
                if (input) {
                    input.focus();
                    input.select();
                } else btnFocus.focus();
            },
            setup: function(fromQueue) {
                var item = queue[0], self = this, transitionDone;
                isopen = true;
                transitionDone = function(event) {
                    event.stopPropagation();
                    self.setFocus();
                    self.unbind(elDialog, self.transition.type, transitionDone);
                };
                if (this.transition.supported && !fromQueue) {
                    this.bind(elDialog, this.transition.type, transitionDone);
                }
                elDialog.innerHTML = this.build(item);
                btnReset = $("alertify-resetFocus");
                btnOK = $("alertify-ok") || undefined;
                btnCancel = $("alertify-cancel") || undefined;
                btnFocus = _alertify.buttonFocus === "cancel" ? btnCancel : _alertify.buttonFocus === "none" ? $("alertify-noneFocus") : btnOK, 
                input = $("alertify-text") || undefined;
                form = $("alertify-form") || undefined;
                if (typeof item.placeholder === "string" && item.placeholder !== "") input.value = item.placeholder;
                if (fromQueue) this.setFocus();
                this.addListeners(item.callback);
            },
            unbind: function(el, event, fn) {
                if (typeof el.removeEventListener === "function") {
                    el.removeEventListener(event, fn, false);
                } else if (el.detachEvent) {
                    el.detachEvent("on" + event, fn);
                }
            }
        };
        return {
            alert: function(message, fn, cssClass) {
                _alertify.dialog(message, "alert", fn, "", cssClass);
                return this;
            },
            confirm: function(message, fn, cssClass) {
                _alertify.dialog(message, "confirm", fn, "", cssClass);
                return this;
            },
            extend: _alertify.extend,
            init: _alertify.init,
            log: function(message, type, wait) {
                _alertify.log(message, type, wait);
                return this;
            },
            prompt: function(message, fn, placeholder, cssClass) {
                _alertify.dialog(message, "prompt", fn, placeholder, cssClass);
                return this;
            },
            success: function(message, wait) {
                _alertify.log(message, "success", wait);
                return this;
            },
            error: function(message, wait) {
                _alertify.log(message, "error", wait);
                return this;
            },
            set: function(args) {
                _alertify.set(args);
            },
            labels: _alertify.labels,
            debug: _alertify.handleErrors
        };
    };
    if (typeof define === "function") {
        define([], function() {
            return new Alertify();
        });
    } else if (typeof global.alertify === "undefined") {
        global.alertify = new Alertify();
    }
})(this);

(function($) {
    $.fn.menutron = function(options) {
        var defaults = {
            maxScreenWidth: 600,
            menuTitle: "Choose..."
        };
        var options = $.extend(defaults, options);
        return this.each(function() {
            var menu = $(this).children();
            var selectMenu = $("<select>").css("display", "none");
            var optGroup = $("<optgroup>").css("display", "none");
            init();
            function init() {
                checkWidth();
                createMenu();
                transformMenu();
            }
            function checkWidth() {
                if ($(window).width() < options.maxScreenWidth) {
                    $(selectMenu).css("display", "block");
                    $(menu).css("display", "none");
                } else {
                    $(selectMenu).css("display", "none");
                    $(menu).css("display", "block");
                }
            }
            function createMenu() {
                $(menu).children().each(function() {
                    if ($(this).get(0).tagName !== "DT") {
                        if ($(this).find("ul,ol,dl").length) {
                            $(optGroup).attr("label", $(this).children(":first").text());
                            var option = $("<option>").text($(this).children(":first").text());
                            var link = $(this).children("a").attr("href");
                            $(option).attr("value", link);
                            $(option).appendTo(optGroup);
                            var nestedList = $(this).children().not(":first");
                            $(nestedList).children().each(function() {
                                var option = $("<option>").text($(this).text());
                                var link = $(this).children("a").attr("href");
                                $(option).attr("value", link);
                                $(option).appendTo(optGroup);
                            });
                            console.log(optGroup);
                            $(optGroup).appendTo(selectMenu);
                        } else {
                            var option = $("<option>").text($(this).text());
                            var link = $(this).children("a").attr("href");
                            $(option).attr("value", link);
                            $(option).appendTo(selectMenu);
                        }
                    }
                });
                var menuTitle = '<option selected="selected" value>' + options.menuTitle + "</option>";
                $(selectMenu).prepend(menuTitle);
                selectMenu.appendTo($(menu).parent());
                selectMenu.change(function() {
                    if ($(this).val() != "") {
                        window.location.href = $(this).val();
                    }
                });
            }
            function transformMenu() {
                $(window).resize(function() {
                    checkWidth();
                });
            }
        });
    };
})(jQuery);

(function(l) {
    function t(b, f) {
        var c, g, a = this, e = navigator.userAgent.toLowerCase();
        a.uid = l.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var d = document.createElement("div").style, j = [ "webkit", "Moz", "ms", "O" ], h = "", k = 0;
        for (c = 0; c < j.length; c++) g = j[c], !h && g + "Transform" in d && (h = g), 
        g = g.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[g + "RequestAnimationFrame"], 
        window.cancelAnimationFrame = window[g + "CancelAnimationFrame"] || window[g + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
            var b = new Date().getTime(), c = Math.max(0, 16 - (b - k)), d = window.setTimeout(function() {
                a(b + c);
            }, c);
            k = b + c;
            return d;
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a);
        });
        a.isIPAD = e.match(/(ipad)/);
        j = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        c = j[1] || "";
        g = j[2] || "0";
        j = {};
        c && (j[c] = !0, j.version = g);
        j.chrome && (j.webkit = !0);
        a._a = j;
        a.isAndroid = -1 < e.indexOf("android");
        a.slider = l(b);
        a.ev = l(a);
        a._b = l(document);
        a.st = l.extend({}, l.fn.royalSlider.defaults, f);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        if (a.st.allowCSS3 && (!j.webkit || a.st.allowCSS3OnWebkit)) e = h + (h ? "T" : "t"), 
        a._e = e + "ransform" in d && e + "ransition" in d, a._e && (a._f = h + (h ? "P" : "p") + "erspective" in d);
        h = h.toLowerCase();
        a._g = "-" + h + "-";
        a._h = "vertical" === a.st.slidesOrientation ? !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        l.each(l.rsModules, function(b, c) {
            "uid" !== b && c.call(a);
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? l(a.st.slides) : a.slider.children().detach()).each(function() {
            a._s(this, !0);
        });
        a.st.randomizeSlides && a.slides.sort(function() {
            return .5 - Math.random();
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId > a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.msTouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        d = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 = 6 > a.numSlides ? a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(l('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = d = l(d + "</div></div>");
        h = a.ns;
        a.msEnabled = window.navigator.msPointerEnabled;
        a.msEnabled ? (a.msTouch = Boolean(1 < window.navigator.msMaxTouchPoints), a.hasTouch = !1, 
        a._n1 = .2, a._j1 = "MSPointerDown" + h, a._k1 = "MSPointerMove" + h, a._l1 = "MSPointerUp" + h, 
        a._m1 = "MSPointerCancel" + h) : (a._j1 = "mousedown" + h, a._k1 = "mousemove" + h, 
        a._l1 = "mouseup" + h, a._m1 = "mouseup" + h, "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, 
        a._j1 += " touchstart" + h, a._k1 += " touchmove" + h, a._l1 += " touchend" + h, 
        a._m1 += " touchcancel" + h, a._n1 = .5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, 
        a._n1 = .2));
        a.st.sliderDrag && (a._f1 = !0, j.msie || j.opera ? a._g1 = a._h1 = "move" : j.mozilla ? (a._g1 = "-moz-grab", 
        a._h1 = "-moz-grabbing") : j.webkit && -1 != navigator.platform.indexOf("Mac") && (a._g1 = "-webkit-grab", 
        a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(d);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.msEnabled && a._p1.css("-ms-touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = l('<div class="rsPreloader"></div>');
        d = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", 
        a._w1 = a._x1 = a._g + "transform", a._f ? (j.webkit && !j.chrome && a.slider.addClass("rsWebkit3d"), 
        /iphone|ipad|ipod/gi.test(navigator.appVersion), a._y1 = "translate3d(", a._z1 = "px, ", 
        a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, 
        h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, 
        d.css(h))) : (a._x1 = "left", a._w1 = "top");
        var n;
        l(window).on("resize" + a.ns, function() {
            n && clearTimeout(n);
            n = setTimeout(function() {
                a.updateSliderSize();
            }, 50);
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        if (a.st.arrowsNavHideOnTouch && (a.hasTouch || a.msTouch)) a.st.arrowsNav = !1;
        a.st.arrowsNav && (d = a._o1, l('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(d), 
        a._c2 = d.children(".rsArrowLeft").click(function(b) {
            b.preventDefault();
            a.prev();
        }), a._d2 = d.children(".rsArrowRight").click(function(b) {
            b.preventDefault();
            a.next();
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), 
        d.one("mousemove.arrowshover", function() {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden");
        }), d.hover(function() {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"));
        }, function() {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"));
        })), a.ev.on("rsOnUpdateNav", function() {
            a._f2();
        }), a._f2());
        if (a._f1) a._p1.on(a._j1, function(b) {
            a._g2(b);
        }); else a.dragSuccess = !1;
        var m = [ "rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn" ];
        a._p1.click(function(b) {
            if (!a.dragSuccess) {
                var c = l(b.target).attr("class");
                if (-1 !== l.inArray(c, m) && a.toggleVideo()) return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (l(b.target).closest(".rsNoDrag", a._r1).length) return !0;
                    a._i2(b);
                }
                a.ev.trigger("rsSlideClick");
            }
        }).on("click.rs", "a", function() {
            if (a.dragSuccess) return !1;
            a._h2 = !0;
            setTimeout(function() {
                a._h2 = !1;
            }, 3);
        });
        a.ev.trigger("rsAfterInit");
    }
    l.rsModules || (l.rsModules = {
        uid: 0
    });
    t.prototype = {
        constructor: t,
        _i2: function(b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev();
        },
        _t: function() {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop) 2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b;
        },
        _s: function(b, f) {
            function c(a, b) {
                b ? e.images.push(a.attr(b)) : e.images.push(a.text());
                if (j) {
                    j = !1;
                    e.caption = "src" === b ? a.attr("alt") : a.contents();
                    e.image = e.images[0];
                    e.videoURL = a.attr("data-rsVideo");
                    var c = a.attr("data-rsw"), d = a.attr("data-rsh");
                    "undefined" !== typeof c && !1 !== c && "undefined" !== typeof d && !1 !== d ? (e.iW = parseInt(c, 10), 
                    e.iH = parseInt(d, 10)) : g.st.imgWidth && g.st.imgHeight && (e.iW = g.st.imgWidth, 
                    e.iH = g.st.imgHeight);
                }
            }
            var g = this, a, e = {}, d, j = !0;
            b = l(b);
            g._k2 = b;
            g.ev.trigger("rsBeforeParseNode", [ b, e ]);
            if (!e.stopParsing) return b = g._k2, e.id = g._r, e.contentAdded = !1, g._r++, 
            e.images = [], e.isBig = !1, e.hasCover || (b.hasClass("rsImg") ? (d = b, a = !0) : (d = b.find(".rsImg"), 
            d.length && (a = !0)), a ? (e.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function() {
                var a = l(this);
                a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a);
            })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), 
            d.length && (e.caption = d.remove()), e.content = b, g.ev.trigger("rsAfterParseNode", [ b, e ]), 
            f && g.slides.push(e), 0 === e.images.length && (e.isLoaded = !0, e.isRendered = !1, 
            e.isLoading = !1, e.images = null), e;
        },
        _b2: function() {
            var b = this, f, c, g = function(a) {
                37 === a ? b.prev() : 39 === a && b.next();
            };
            b._b.on("keydown" + b.ns, function(a) {
                if (!b._l2 && (c = a.keyCode, (37 === c || 39 === c) && !f)) g(c), f = setInterval(function() {
                    g(c);
                }, 700);
            }).on("keyup" + b.ns, function() {
                f && (clearInterval(f), f = null);
            });
        },
        goTo: function(b, f) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f);
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            l.removeData(this.slider, "royalSlider");
            l(window).off("resize" + this.ns);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null;
        },
        _n2: function(b, f) {
            function c(c, e, f) {
                c.isAdded ? (g(e, c), a(e, c)) : (f || (f = d.slidesJQ[e]), c.holder ? f = c.holder : (f = d.slidesJQ[e] = l(f), 
                c.holder = f), c.appendOnLoaded = !1, a(e, c, f), g(e, c), d._p2(c, f, b), c.isAdded = !0);
            }
            function g(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0));
            }
            function a(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w));
            }
            function e(a) {
                if (k) {
                    if (a > n - 1) return e(a - n);
                    if (0 > a) return e(n + a);
                }
                return a;
            }
            var d = this, j, h, k = d._z, n = d.numSlides;
            if (!isNaN(f)) return e(f);
            var m = d.currSlideId, p, q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y, r = Math.min(2, q), u = !1, t = !1, s;
            for (h = m; h < m + 1 + r; h++) if (s = e(h), (j = d.slides[s]) && (!j.isAdded || !j.positionSet)) {
                u = !0;
                break;
            }
            for (h = m - 1; h > m - 1 - r; h--) if (s = e(h), (j = d.slides[s]) && (!j.isAdded || !j.positionSet)) {
                t = !0;
                break;
            }
            if (u) for (h = m; h < m + q + 1; h++) s = e(h), p = Math.floor((d._u - (m - h)) / d.numSlides) * d.numSlides, 
            (j = d.slides[s]) && c(j, s);
            if (t) for (h = m - 1; h > m - 1 - q; h--) s = e(h), p = Math.floor((d._u - (m - h)) / n) * n, 
            (j = d.slides[s]) && c(j, s);
            if (!b) {
                r = e(m - q);
                m = e(m + q);
                q = r > m ? 0 : r;
                for (h = 0; h < n; h++) if (!(r > m && h > r - 1) && (h < q || h > m)) if ((j = d.slides[h]) && j.holder) j.holder.detach(), 
                j.isAdded = !1;
            }
        },
        setItemHtml: function(b, f) {
            var c = this, g = function() {
                if (b.images) {
                    if (!b.isLoading) {
                        var e, f;
                        b.content.hasClass("rsImg") ? (e = b.content, f = !0) : e = b.content.find(".rsImg:not(img)");
                        e && !e.is("img") && e.each(function() {
                            var a = l(this), c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = l(c) : a.replaceWith(c);
                        });
                        e = f ? b.content : b.content.find("img.rsImg");
                        h();
                        e.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig) l("<img />").on("load.rs error.rs", function() {
                            l(this).off("load.rs error.rs");
                            a([ this ], !0);
                        }).attr("src", b.image); else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            e = function() {
                                l(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && a(b.loaded, !1);
                            };
                            for (var g = 0; g < b.images.length; g++) {
                                var j = l("<img />");
                                b.numStartedLoad++;
                                j.on("load.rs error.rs", e).attr("src", b.images[g]);
                            }
                        }
                    }
                } else b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
            }, a = function(a, c) {
                if (a.length) {
                    var d = a[0];
                    if (c !== b.isBig) (d = b.holder.children()) && 1 < d.length && k(); else if (b.iW && b.iH) e(); else if (b.iW = d.width, 
                    b.iH = d.height, b.iW && b.iH) e(); else {
                        var f = new Image();
                        f.onload = function() {
                            f.width ? (b.iW = f.width, b.iH = f.height, e()) : setTimeout(function() {
                                f.width && (b.iW = f.width, b.iH = f.height);
                                e();
                            }, 1e3);
                        };
                        f.src = d.src;
                    }
                } else e();
            }, e = function() {
                b.isLoaded = !0;
                b.isLoading = !1;
                d();
                k();
                j();
            }, d = function() {
                if (!b.isAppended && c.ev) {
                    var a = c.st.visibleNearby, d = b.id - c._o;
                    if (!f && !b.appendOnLoaded && c.st.fadeinLoadedSlide && (0 === d || (a || c._r2 || c._l2) && (-1 === d || 1 === d))) a = {
                        visibility: "visible",
                        opacity: 0
                    }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                        b.content.css("opacity", 1);
                    }, 16);
                    b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                    b.isAppended = !0;
                    b.isLoaded && (c._q2(b), j());
                    b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                        c.ev.trigger("rsMaybeSizeReady", b);
                    }, 100));
                }
            }, j = function() {
                !b.loadedTriggered && c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), 
                c.ev.trigger("rsAfterContentSet", b));
            }, h = function() {
                c.st.usePreloader && b.holder.html(c._q1.clone());
            }, k = function() {
                if (c.st.usePreloader) {
                    var a = b.holder.find(".rsPreloader");
                    a.length && a.remove();
                }
            };
            b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? g() : (b.holder.isWaiting = !0, 
            h(), b.holder.slideId = -99) : g();
        },
        _p2: function(b) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1;
        },
        _g2: function(b, f) {
            var c = this, g, a = "touchstart" === b.type;
            c._s2 = a;
            c.ev.trigger("rsDragStart");
            if (l(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
            !f && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2) a && (c._v2 = !0); else {
                a && (c._v2 = !1);
                c._w2();
                if (a) {
                    var e = b.originalEvent.touches;
                    if (e && 0 < e.length) g = e[0], 1 < e.length && (c._v2 = !0); else return;
                } else b.preventDefault(), g = b, c.msEnabled && (g = g.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function(a) {
                    c._x2(a, f);
                }).on(c._l1, function(a) {
                    c._y2(a, f);
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = g.pageX;
                c._c3 = g.pageY;
                c._d3 = c._v = (!f ? c._h : c._e3) ? g.pageX : g.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = !f ? c._p : c._i3;
                c._j3 = new Date().getTime();
                if (a) c._e1.on(c._m1, function(a) {
                    c._y2(a, f);
                });
            }
        },
        _k3: function(b, f) {
            if (this._l3) {
                var c = this._m3, g = b.pageX - this._b3, a = b.pageY - this._c3, e = this._h3 + g, d = this._h3 + a, j = !f ? this._h : this._e3, e = j ? e : d, d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== g ? this._f3 = 0 < g ? 1 : -1 : "y" === d && 0 !== a && (this._g3 = 0 < a ? 1 : -1);
                d = j ? this._b3 : this._c3;
                g = j ? g : a;
                f ? e > this._n3 ? e = this._h3 + g * this._n1 : e < this._o3 && (e = this._h3 + g * this._n1) : this._z || (0 >= this.currSlideId && 0 < d - this._d3 && (e = this._h3 + g * this._n1), 
                this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (e = this._h3 + g * this._n1));
                this._h3 = e;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                f ? this._q3(this._h3) : this._l && this._p3(this._h3);
            }
        },
        _x2: function(b, f) {
            var c = this, g, a = "touchmove" === b.type;
            if (!c._s2 || a) {
                if (a) {
                    if (c._r3) return;
                    var e = b.originalEvent.touches;
                    if (e) {
                        if (1 < e.length) return;
                        g = e[0];
                    } else return;
                } else g = b, c.msEnabled && (g = g.originalEvent);
                c._a3 || (c._e && (!f ? c._p1 : c._s3).css(c._g + c._u1, "0s"), function j() {
                    c._l2 && (c._t3 = requestAnimationFrame(j), c._u3 && c._k3(c._u3, f));
                }());
                if (c._l3) b.preventDefault(), c._m3 = new Date().getTime(), c._u3 = g; else if (e = !f ? c._h : c._e3, 
                g = Math.abs(g.pageX - c._b3) - Math.abs(g.pageY - c._c3) - (e ? -7 : 7), 7 < g) {
                    if (e) b.preventDefault(), c._z2 = "x"; else if (a) {
                        c._v3();
                        return;
                    }
                    c._l3 = !0;
                } else if (-7 > g) {
                    if (e) {
                        if (a) {
                            c._v3();
                            return;
                        }
                    } else b.preventDefault(), c._z2 = "y";
                    c._l3 = !0;
                }
            }
        },
        _v3: function() {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2();
        },
        _y2: function(b, f) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a;
            }
            function g(b, d) {
                if (a._l || f) j = (-a._u - a._d1) * a._w, h = Math.abs(a._p - j), a._c = h / d, 
                b && (a._c += 250), a._c = c(a._c), a._x3(j, !1);
            }
            var a = this, e, d, j, h;
            d = "touchend" === b.type || "touchcancel" === b.type;
            if (!a._s2 || d) if (a._s2 = !1, a.ev.trigger("rsDragRelease"), a._u3 = null, a._l2 = !1, 
            a._r3 = !1, a._l3 = !1, a._m3 = 0, cancelAnimationFrame(a._t3), a._a3 && (f ? a._q3(a._h3) : a._l && a._p3(a._h3)), 
            a._b.off(a._k1).off(a._l1), d && a._e1.off(a._m1), a._i1(), !a._a3 && !a._v2 && f && a._w3) {
                var k = l(b.target).closest(".rsNavItem");
                k.length && a.goTo(k.index());
            } else {
                e = !f ? a._h : a._e3;
                if (!a._a3 || "y" === a._z2 && e || "x" === a._z2 && !e) if (!f && a._t2) {
                    a._t2 = !1;
                    if (a.st.navigateByClick) {
                        a._i2(a.msEnabled ? b.originalEvent : b);
                        a.dragSuccess = !0;
                        return;
                    }
                    a.dragSuccess = !0;
                } else {
                    a._t2 = !1;
                    a.dragSuccess = !1;
                    return;
                } else a.dragSuccess = !0;
                a._t2 = !1;
                a._z2 = "";
                var n = a.st.minSlideOffset;
                d = d ? b.originalEvent.changedTouches[0] : a.msEnabled ? b.originalEvent : b;
                var m = e ? d.pageX : d.pageY, p = a._d3;
                d = a._v;
                var q = a.currSlideId, r = a.numSlides, u = e ? a._f3 : a._g3, t = a._z;
                Math.abs(m - p);
                e = m - d;
                d = new Date().getTime() - a._j3;
                d = Math.abs(e) / d;
                if (0 === u || 1 >= r) g(!0, d); else {
                    if (!t && !f) if (0 >= q) {
                        if (0 < u) {
                            g(!0, d);
                            return;
                        }
                    } else if (q >= r - 1 && 0 > u) {
                        g(!0, d);
                        return;
                    }
                    if (f) {
                        j = a._i3;
                        if (j > a._n3) j = a._n3; else if (j < a._o3) j = a._o3; else {
                            n = d * d / .006;
                            k = -a._i3;
                            m = a._y3 - a._z3 + a._i3;
                            0 < e && n > k ? (k += a._z3 / (15 / (.003 * (n / d))), d = d * k / n, n = k) : 0 > e && n > m && (m += a._z3 / (15 / (.003 * (n / d))), 
                            d = d * m / n, n = m);
                            k = Math.max(Math.round(d / .003), 50);
                            j += n * (0 > e ? -1 : 1);
                            if (j > a._n3) {
                                a._a4(j, k, !0, a._n3, 200);
                                return;
                            }
                            if (j < a._o3) {
                                a._a4(j, k, !0, a._o3, 200);
                                return;
                            }
                        }
                        a._a4(j, k, !0);
                    } else p + n < m ? 0 > u ? g(!1, d) : a._m2("prev", c(Math.abs(a._p - (-a._u - a._d1 + 1) * a._w) / d), !1, !0, !0) : p - n > m ? 0 < u ? g(!1, d) : a._m2("next", c(Math.abs(a._p - (-a._u - a._d1 - 1) * a._w) / d), !1, !0, !0) : g(!1, d);
                }
            }
        },
        _p3: function(b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b);
        },
        updateSliderSize: function(b) {
            var f, c;
            if (this.st.autoScaleSlider) {
                var g = this.st.autoScaleSliderWidth, a = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", f * (a / g)), 
                f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), 
                c != this.height && (this.slider.css("width", c * (g / a)), c = this.slider.height()), 
                f = this.slider.width());
            } else f = this.slider.width(), c = this.slider.height();
            if (b || f != this.width || c != this.height) {
                this.width = f;
                this.height = c;
                this._b4 = f;
                this._c4 = c;
                this.ev.trigger("rsBeforeSizeSet");
                this.ev.trigger("rsAfterSizePropSet");
                this._e1.css({
                    width: this._b4,
                    height: this._c4
                });
                this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                this._d4 = this.st.imageScalePadding;
                for (f = 0; f < this.slides.length; f++) b = this.slides[f], b.positionSet = !1, 
                b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
                if (this._e4) for (f = 0; f < this._e4.length; f++) b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
                this._n2();
                this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                this.ev.trigger("rsOnUpdateNav");
            }
            this._j2 = this._e1.offset();
            this._j2 = this._j2[this._i];
        },
        appendSlide: function(b, f) {
            var c = this._s(b);
            if (isNaN(f) || f > this.numSlides) f = this.numSlides;
            this.slides.splice(f, 0, c);
            this.slidesJQ.splice(f, 0, '<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>');
            f < this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [ c, f ]);
            this._f4(f);
            f === this.currSlideId && this.ev.trigger("rsAfterSlideChange");
        },
        removeSlide: function(b) {
            var f = this.slides[b];
            f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--, 
            this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [ b ]), 
            this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"));
        },
        _f4: function() {
            var b = this, f = b.numSlides, f = 0 >= b._u ? 0 : Math.floor(b._u / f);
            b.numSlides = b.slides.length;
            0 === b.numSlides ? (b.currSlideId = b._d1 = b._u = 0, b.currSlide = b._g4 = null) : b._u = f * b.numSlides + b.currSlideId;
            for (f = 0; f < b.numSlides; f++) b.slides[f].id = f;
            b.currSlide = b.slides[b.currSlideId];
            b._r1 = b.slidesJQ[b.currSlideId];
            b.currSlideId >= b.numSlides ? b.goTo(b.numSlides - 1) : 0 > b.currSlideId && b.goTo(0);
            b._t();
            b._l && b._z && b._p1.css(b._g + b._u1, "0ms");
            b._h4 && clearTimeout(b._h4);
            b._h4 = setTimeout(function() {
                b._l && b._p3((-b._u - b._d1) * b._w);
                b._n2();
                b._l || b._r1.css({
                    display: "block",
                    opacity: 1
                });
            }, 14);
            b.ev.trigger("rsOnUpdateNav");
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), 
            this._e1.addClass("grab-cursor")));
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) : (this._e1.removeClass("grab-cursor"), 
            this._e1.addClass("grabbing-cursor")));
        },
        next: function(b) {
            this._m2("next", this.st.transitionSpeed, !0, !b);
        },
        prev: function(b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b);
        },
        _m2: function(b, f, c, g, a) {
            var e = this, d, j, h;
            e.ev.trigger("rsBeforeMove", [ b, g ]);
            h = "next" === b ? e.currSlideId + 1 : "prev" === b ? e.currSlideId - 1 : b = parseInt(b, 10);
            if (!e._z) {
                if (0 > h) {
                    e._i4("left", !g);
                    return;
                }
                if (h >= e.numSlides) {
                    e._i4("right", !g);
                    return;
                }
            }
            e._r2 && (e._u2(!0), c = !1);
            j = h - e.currSlideId;
            h = e._o2 = e.currSlideId;
            var k = e.currSlideId + j;
            g = e._u;
            var l;
            e._z ? (k = e._n2(!1, k), g += j) : g = k;
            e._o = k;
            e._g4 = e.slidesJQ[e.currSlideId];
            e._u = g;
            e.currSlideId = e._o;
            e.currSlide = e.slides[e.currSlideId];
            e._r1 = e.slidesJQ[e.currSlideId];
            var k = e.st.slidesDiff, m = Boolean(0 < j);
            j = Math.abs(j);
            var p = Math.floor(h / e._y), q = Math.floor((h + (m ? k : -k)) / e._y), p = (m ? Math.max(p, q) : Math.min(p, q)) * e._y + (m ? e._y - 1 : 0);
            p > e.numSlides - 1 ? p = e.numSlides - 1 : 0 > p && (p = 0);
            h = m ? p - h : h - p;
            h > e._y && (h = e._y);
            if (j > h + k) {
                e._d1 += (j - (h + k)) * (m ? -1 : 1);
                f *= 1.4;
                for (h = 0; h < e.numSlides; h++) e.slides[h].positionSet = !1;
            }
            e._c = f;
            e._n2(!0);
            a || (l = !0);
            d = (-g - e._d1) * e._w;
            l ? setTimeout(function() {
                e._j4 = !1;
                e._x3(d, b, !1, c);
                e.ev.trigger("rsOnUpdateNav");
            }, 0) : (e._x3(d, b, !1, c), e.ev.trigger("rsOnUpdateNav"));
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), 
            this._d2.css("display", "block"), !this._z && !this.st.loopRewind && (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), 
            this.currSlideId === this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))));
        },
        _x3: function(b, f, c, g, a) {
            function e() {
                var a;
                if (j && (a = j.data("rsTimeout"))) j !== h && j.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), j.data("rsTimeout", "");
                if (a = h.data("rsTimeout")) clearTimeout(a), h.data("rsTimeout", "");
            }
            var d = this, j, h, k = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, k[d._g + d._u1] = d._c + "ms", 
            k[c] = g ? l.rsCSS3Easing[d.st.easeInOut] : l.rsCSS3Easing[d.st.easeOut], d._p1.css(k), 
            g || !d.hasTouch ? setTimeout(function() {
                d._p3(b);
            }, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, j = d._g4, h = d._r1, h.data("rsTimeout") && h.css("opacity", 0), 
            e(), j && j.data("rsTimeout", setTimeout(function() {
                k[d._g + d._u1] = "0ms";
                k.zIndex = 0;
                k.display = "none";
                j.data("rsTimeout", "");
                j.css(k);
                setTimeout(function() {
                    j.css("opacity", 0);
                }, 16);
            }, d._c + 60)), k.display = "block", k.zIndex = d._m, k.opacity = 0, k[d._g + d._u1] = "0ms", 
            k[d._g + d._v1] = l.rsCSS3Easing[d.st.easeInOut], h.css(k), h.data("rsTimeout", setTimeout(function() {
                h.css(d._g + d._u1, d._c + "ms");
                h.data("rsTimeout", setTimeout(function() {
                    h.css("opacity", 1);
                    h.data("rsTimeout", "");
                }, 20));
            }, 20))) : d._l ? (k[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(k, d._c, g ? d.st.easeInOut : d.st.easeOut)) : (j = d._g4, 
            h = d._r1, h.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, h.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), e(), j && j.data("rsTimeout", setTimeout(function() {
                j.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                });
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = a ? setTimeout(function() {
                d.loadingTimeout = null;
                a.call();
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null;
                d._k4(f);
            }, d._c + 60);
        },
        _u2: function(b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l) if (this._e) {
                if (!b) {
                    b = this._p;
                    var f = this._h3 = this._l4();
                    this._p1.css(this._g + this._u1, "0ms");
                    b !== f && this._p3(f);
                }
            } else this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10); else 20 < this._m ? this._m = 10 : this._m++;
        },
        _l4: function() {
            var b = window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g), f = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10);
        },
        _m4: function(b, f) {
            return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b;
        },
        _k4: function() {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange");
        },
        _i4: function(b, f) {
            var c = this, g = (-c._u - c._d1) * c._w;
            if (!(0 === c.numSlides || c._r2)) if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, f); else if (c._l) {
                c._c = 200;
                var a = function() {
                    c._r2 = !1;
                };
                c._x3(g + ("left" === b ? 30 : -30), "", !1, !0, function() {
                    c._r2 = !1;
                    c._x3(g, "", !1, !0, a);
                });
            }
        },
        _q2: function(b) {
            if (!b.isRendered) {
                var f = b.content, c = "rsMainSlideImage", g, a = this.st.imageAlignCenter, e = this.st.imageScaleMode, d;
                b.videoURL && (c = "rsVideoContainer", "fill" !== e ? g = !0 : (d = f, d.hasClass(c) || (d = d.find("." + c)), 
                d.css({
                    width: "100%",
                    height: "100%"
                }), c = "rsMainSlideImage"));
                f.hasClass(c) || (f = f.find("." + c));
                if (f) {
                    var j = b.iW, c = b.iH;
                    b.isRendered = !0;
                    if ("none" !== e || a) {
                        b = "fill" !== e ? this._d4 : 0;
                        d = this._b4 - 2 * b;
                        var h = this._c4 - 2 * b, k, l, m = {};
                        if ("fit-if-smaller" === e && (j > d || c > h)) e = "fit";
                        if ("fill" === e || "fit" === e) k = d / j, l = h / c, k = "fill" == e ? k > l ? k : l : "fit" == e ? k < l ? k : l : 1, 
                        j = Math.ceil(j * k, 10), c = Math.ceil(c * k, 10);
                        "none" !== e && (m.width = j, m.height = c, g && f.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        a && (m.marginLeft = Math.floor((d - j) / 2) + b, m.marginTop = Math.floor((h - c) / 2) + b);
                        f.css(m);
                    }
                }
            }
        }
    };
    l.rsProto = t.prototype;
    l.fn.royalSlider = function(b) {
        var f = arguments;
        return this.each(function() {
            var c = l(this);
            if ("object" === typeof b || !b) c.data("royalSlider") || c.data("royalSlider", new t(c, b)); else if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(f, 1));
        });
    };
    l.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    l.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    };
    l.extend(jQuery.easing, {
        easeInOutSine: function(b, f, c, g, a) {
            return -g / 2 * (Math.cos(Math.PI * f / a) - 1) + c;
        },
        easeOutSine: function(b, f, c, g, a) {
            return g * Math.sin(f / a * (Math.PI / 2)) + c;
        },
        easeOutCubic: function(b, f, c, g, a) {
            return g * ((f = f / a - 1) * f * f + 1) + c;
        }
    });
})(jQuery, window);

(function(c) {
    c.rsProto._o4 = function() {
        var b, a = this;
        if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function() {
            b && clearTimeout(b);
            b = setTimeout(function() {
                a._g4 && a._g4.removeClass("rsActiveSlide");
                a._r1 && a._r1.addClass("rsActiveSlide");
                b = null;
            }, 50);
        });
    };
    c.rsModules.activeClass = c.rsProto._o4;
})(jQuery);

(function(j) {
    j.extend(j.rsProto, {
        _p4: function() {
            function l() {
                var g = a.currSlide;
                if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
                    if (0 < a._s4.length) {
                        for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
                        a._s4 = [];
                    }
                    if (0 < a._r4.length) {
                        var f;
                        for (b = 0; b < a._r4.length; b++) if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), 
                        f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
                        a._r4 = [];
                    }
                    g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks));
                }
            }
            var a = this, b;
            a._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            };
            a.st.block = j.extend({}, a._q4, a.st.block);
            a._r4 = [];
            a._s4 = [];
            a.ev.on("rsAfterInit", function() {
                l();
            });
            a.ev.on("rsBeforeParseNode", function(a, b, d) {
                b = j(b);
                d.animBlocks = b.find(".rsABlock").css("display", "none");
                d.animBlocks.length || (d.animBlocks = b.hasClass("rsABlock") ? b.css("display", "none") : !1);
            });
            a.ev.on("rsAfterContentSet", function(b, f) {
                f.id === a.slides[a.currSlideId].id && setTimeout(function() {
                    l();
                }, a.st.fadeinLoadedSlide ? 300 : 0);
            });
            a.ev.on("rsAfterSlideChange", function() {
                l();
            });
        },
        _v4: function(j, a) {
            setTimeout(function() {
                j.css(a);
            }, 6);
        },
        _u4: function(l) {
            var a = this, b, g, f, d, h, e, m;
            a._s4 = [];
            l.each(function(l) {
                b = j(this);
                g = {};
                f = {};
                d = null;
                var c = b.attr("data-move-offset"), c = c ? parseInt(c, 10) : a.st.block.moveOffset;
                if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, 
                "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
                    var n;
                    n = "right" === e || "left" === e ? !0 : !1;
                    var k;
                    m = !1;
                    a._e ? (k = 0, h = a._x1) : (n ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", 
                    m = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", m = !0), 
                    h = "margin-" + h, m && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), 
                    void 0 === k && (k = parseInt(b.css(h), 10), b.data("rs-start-move-prop", k))));
                    f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, n);
                    g[h] = a._m4(k, n);
                }
                if (c = b.attr("data-fade-effect")) {
                    if ("none" === c.toLowerCase() || "false" === c.toLowerCase()) c = !1;
                } else c = a.st.block.fadeEffect;
                c && (f.opacity = 0, g.opacity = 1);
                if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), 
                d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), 
                d.easing || (d.easing = a.st.block.easing), d.css3Easing = j.rsCSS3Easing[d.easing], 
                d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * l);
                c = {};
                a._e && (c[a._g + a._u1] = "0ms");
                c.moveProp = g.moveProp;
                c.opacity = g.opacity;
                c.display = "none";
                a._r4.push({
                    block: b,
                    css: c
                });
                a._v4(b, f);
                a._s4.push(setTimeout(function(b, d, c, e) {
                    return function() {
                        b.css("display", "block");
                        if (c) {
                            var g = {};
                            if (a._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp);
                                c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
                                g[a._g + a._t1] = f;
                                g[a._g + a._u1] = c.speed + "ms";
                                g[a._g + a._v1] = c.css3Easing;
                                b.css(g);
                                setTimeout(function() {
                                    b.css(d);
                                }, 24);
                            } else setTimeout(function() {
                                b.animate(d, c.speed, c.easing);
                            }, 16);
                        }
                        delete a._s4[e];
                    };
                }(b, g, d, l), 6 >= d.delay ? 12 : d.delay));
            });
        }
    });
    j.rsModules.animatedBlocks = j.rsProto._p4;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _w4: function() {
            var a = this;
            if (a.st.autoHeight) {
                var b, d, e, c = function(c) {
                    e = a.slides[a.currSlideId];
                    if (b = e.holder) if ((d = b.height()) && void 0 !== d) a._c4 = d, a._e || !c ? a._e1.css("height", d) : a._e1.stop(!0, !0).animate({
                        height: d
                    }, a.st.transitionSpeed);
                };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight", function(a, b) {
                    e === b && c();
                });
                a.ev.on("rsAfterContentSet.rsAutoHeight", function(a, b) {
                    e === b && c();
                });
                a.slider.addClass("rsAutoHeight");
                a.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        c(!1);
                        setTimeout(function() {
                            a.slider.append('<div style="clear:both; float: none;"></div>');
                            a._e && a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out");
                        }, 16);
                    }, 16);
                });
                a.ev.on("rsBeforeAnimStart", function() {
                    c(!0);
                });
                a.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        c(!1);
                    }, 16);
                });
            }
        }
    });
    b.rsModules.autoHeight = b.rsProto._w4;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _x4: function() {
            var a = this, d;
            a._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2e3
            };
            !a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
            a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
            a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function(a, c, f) {
                c = b(c);
                if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10);
            }), a.ev.one("rsAfterInit", function() {
                a._z4();
            }), a.ev.on("rsBeforeDestroy", function() {
                a.stopAutoPlay();
                a.slider.off("mouseenter mouseleave");
                b(window).off("blur" + a.ns + " focus" + a.ns);
            }));
        },
        _z4: function() {
            var a = this;
            a.startAutoPlay();
            a.ev.on("rsAfterContentSet", function(b, e) {
                !a._l2 && !a._r2 && a._a5 && e === a.currSlide && a._b5();
            });
            a.ev.on("rsDragRelease", function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5());
            });
            a.ev.on("rsAfterSlideChange", function() {
                a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5());
            });
            a.ev.on("rsDragStart", function() {
                a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()));
            });
            a.ev.on("rsBeforeMove", function(b, e, c) {
                a._a5 && (c && a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()));
            });
            a._e5 = !1;
            a.ev.on("rsVideoStop", function() {
                a._a5 && (a._e5 = !1, a._b5());
            });
            a.ev.on("rsVideoPlay", function() {
                a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0);
            });
            b(window).on("blur" + a.ns, function() {
                a._a5 && (a._c5 = !0, a._d5());
            }).on("focus" + a.ns, function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5());
            });
            a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function() {
                a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0);
            }, function() {
                a._a5 && (a._f5 = !1, a._b5());
            }));
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() : this.startAutoPlay();
        },
        startAutoPlay: function() {
            this._a5 = !0;
            this.currSlide.isLoaded && this._b5();
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1;
            this._d5();
        },
        _b5: function() {
            var a = this;
            !a._f5 && !a._e5 && (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function() {
                var b;
                !a._z && !a.st.loopRewind && (b = !0, a.st.loopRewind = !0);
                a.next(!0);
                b && (a.st.loopRewind = !1);
            }, !a.currSlide.customDelay ? a.st.autoPlay.delay : a.currSlide.customDelay));
        },
        _d5: function() {
            !this._f5 && !this._e5 && (this._g5 = !1, this._h5 && (clearTimeout(this._h5), this._h5 = null));
        }
    });
    b.rsModules.autoplay = b.rsProto._x4;
})(jQuery);

(function(c) {
    c.extend(c.rsProto, {
        _i5: function() {
            var a = this;
            "bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function() {
                a._j5 = !0;
                a.slider.addClass("rsWithBullets");
                for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
                a._k5 = b = c(b + "</div>");
                a._l5 = b.appendTo(a.slider).children();
                a._k5.on("click.rs", ".rsNavItem", function() {
                    a._m5 || a.goTo(c(this).index());
                });
            }), a.ev.on("rsOnAppendSlide", function(b, c, d) {
                d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') : a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                a._l5 = a._k5.children();
            }), a.ev.on("rsOnRemoveSlide", function(b, c) {
                var d = a._l5.eq(c);
                d && d.length && (d.remove(), a._l5 = a._k5.children());
            }), a.ev.on("rsOnUpdateNav", function() {
                var b = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                b = a._l5.eq(b);
                b.addClass("rsNavSelected");
                a._n5 = b;
            }));
        }
    });
    c.rsModules.bullets = c.rsProto._i5;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _o5: function() {
            var a = this, g, c, e;
            a._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            };
            a.st.deeplinking = b.extend({}, a._p5, a.st.deeplinking);
            if (a.st.deeplinking.enabled) {
                var h = a.st.deeplinking.change, d = "#" + a.st.deeplinking.prefix, f = function() {
                    var a = window.location.hash;
                    return a && (a = parseInt(a.substring(d.length), 10), 0 <= a) ? a - 1 : -1;
                }, j = f();
                -1 !== j && (a.st.startSlideId = j);
                h && (b(window).on("hashchange" + a.ns, function() {
                    if (!g) {
                        var b = f();
                        0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1), a.goTo(b));
                    }
                }), a.ev.on("rsBeforeAnimStart", function() {
                    c && clearTimeout(c);
                    e && clearTimeout(e);
                }), a.ev.on("rsAfterSlideChange", function() {
                    c && clearTimeout(c);
                    e && clearTimeout(e);
                    e = setTimeout(function() {
                        g = !0;
                        window.location.replace(("" + window.location).split("#")[0] + d + (a.currSlideId + 1));
                        c = setTimeout(function() {
                            g = !1;
                            c = null;
                        }, 60);
                    }, 400);
                }));
                a.ev.on("rsBeforeDestroy", function() {
                    c = e = null;
                    h && b(window).off("hashchange" + a.ns);
                });
            }
        }
    });
    b.rsModules.deeplinking = b.rsProto._o5;
})(jQuery);

(function(b, a, g) {
    function c(a) {
        a = a || location.href;
        return "#" + a.replace(/^[^#]*#?(.*)$/, "$1");
    }
    "$:nomunge";
    var e = document, h, d = b.event.special, f = e.documentMode, j = "onhashchange" in a && (f === g || 7 < f);
    b.fn.hashchange = function(a) {
        return a ? this.bind("hashchange", a) : this.trigger("hashchange");
    };
    b.fn.hashchange.delay = 50;
    d.hashchange = b.extend(d.hashchange, {
        setup: function() {
            if (j) return !1;
            b(h.start);
        },
        teardown: function() {
            if (j) return !1;
            b(h.stop);
        }
    });
    var p = function() {
        var e = c(), d = r(n);
        e !== n ? (q(n = e, d), b(a).trigger("hashchange")) : d !== n && (location.href = location.href.replace(/#.*/, "") + d);
        l = setTimeout(p, b.fn.hashchange.delay);
    }, d = {}, l, n = c(), q = f = function(a) {
        return a;
    }, r = f;
    d.start = function() {
        l || p();
    };
    d.stop = function() {
        l && clearTimeout(l);
        l = g;
    };
    if (a.attachEvent && !a.addEventListener && !j) {
        var k, m;
        d.start = function() {
            k || (m = (m = b.fn.hashchange.src) && m + c(), k = b('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                m || q(c());
                p();
            }).attr("src", m || "javascript:0").insertAfter("body")[0].contentWindow, e.onpropertychange = function() {
                try {
                    "title" === event.propertyName && (k.document.title = e.title);
                } catch (a) {}
            });
        };
        d.stop = f;
        r = function() {
            return c(k.location.href);
        };
        q = function(a, d) {
            var c = k.document, f = b.fn.hashchange.domain;
            a !== d && (c.title = e.title, c.open(), f && c.write('<script>document.domain="' + f + '"</script>'), 
            c.close(), k.location.hash = a);
        };
    }
    h = d;
})(jQuery, this);

(function(c) {
    c.extend(c.rsProto, {
        _q5: function() {
            var a = this;
            a._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            };
            a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
            if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function() {
                a._s5();
            });
        },
        _s5: function() {
            var a = this;
            a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
            if (a.st.fullscreen.nativeFS) {
                a._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1;
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var b = [ "webkit", "moz", "o", "ms", "khtml" ];
                if (!a.isAndroid) if ("undefined" != typeof document.cancelFullScreen) a._u5.supportsFullScreen = !0; else for (var d = 0; d < b.length; d++) if (a._u5.prefix = b[d], 
                "undefined" != typeof document[a._u5.prefix + "CancelFullScreen"]) {
                    a._u5.supportsFullScreen = !0;
                    break;
                }
                a._u5.supportsFullScreen ? (a.nativeFS = !0, a._u5.fullScreenEventName = a._u5.prefix + "fullscreenchange" + a.ns, 
                a._u5.isFullScreen = function() {
                    switch (this.prefix) {
                      case "":
                        return document.fullScreen;

                      case "webkit":
                        return document.webkitIsFullScreen;

                      default:
                        return document[this.prefix + "FullScreen"];
                    }
                }, a._u5.requestFullScreen = function(a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]();
                }, a._u5.cancelFullScreen = function() {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]();
                }) : a._u5 = !1;
            }
            a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function() {
                a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen();
            }));
        },
        enterFullscreen: function(a) {
            var b = this;
            if (b._u5) if (a) b._u5.requestFullScreen(c("html")[0]); else {
                b._b.on(b._u5.fullScreenEventName, function() {
                    b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0);
                });
                b._u5.requestFullScreen(c("html")[0]);
                return;
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.on("keyup" + b.ns + "fullscreen", function(a) {
                    27 === a.keyCode && b.exitFullscreen();
                });
                b._t5 && b._b2();
                a = c(window);
                b._x5 = a.scrollTop();
                b._y5 = a.scrollLeft();
                b._z5 = c("html").attr("style");
                b._a6 = c("body").attr("style");
                b._b6 = b.slider.attr("style");
                c("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                });
                b.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, 
                a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, 
                a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), 
                a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, 
                a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
                b.isFullscreen = !0;
                b._w5 = !1;
                b.updateSliderSize();
                b.ev.trigger("rsEnterFullscreen");
            }
        },
        exitFullscreen: function(a) {
            var b = this;
            if (b._u5) {
                if (!a) {
                    b._u5.cancelFullScreen(c("html")[0]);
                    return;
                }
                b._b.off(b._u5.fullScreenEventName);
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.off("keyup" + b.ns + "fullscreen");
                b._t5 && b._b.off("keydown" + b.ns);
                c("html").attr("style", b._z5 || "");
                c("body").attr("style", b._a6 || "");
                var d;
                for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, 
                a.slideId = -99, a.isBigLoaded = a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, 
                a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, 
                a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, 
                b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
                b.isFullscreen = !1;
                a = c(window);
                a.scrollTop(b._x5);
                a.scrollLeft(b._y5);
                b._w5 = !1;
                b.slider.removeClass("rsFullscreen");
                b.updateSliderSize();
                setTimeout(function() {
                    b.updateSliderSize();
                }, 1);
                b.ev.trigger("rsExitFullscreen");
            }
        },
        _c6: function(a) {
            var b = !a.isLoaded && !a.isLoading ? '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>' : '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>';
            a.content.hasClass("rsImg") ? a.content = c(b) : a.content.find(".rsImg").eq(0).replaceWith(b);
            !a.isLoaded && !a.isLoading && a.holder && a.holder.html(a.content);
        }
    });
    c.rsModules.fullscreen = c.rsProto._q5;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _d6: function() {
            var a = this;
            a.st.globalCaption && (a.ev.on("rsAfterInit", function() {
                a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(!a.st.globalCaptionInside ? a.slider : a._e1);
                a.globalCaption.html(a.currSlide.caption);
            }), a.ev.on("rsBeforeAnimStart", function() {
                a.globalCaption.html(a.currSlide.caption);
            }));
        }
    });
    b.rsModules.globalCaption = b.rsProto._d6;
})(jQuery);

(function(b) {
    b.extend(b.rsProto, {
        _e6: function() {
            var a = this;
            if (a.st.navAutoHide && !a.hasTouch) a.ev.one("rsAfterInit", function() {
                if (a._k5) {
                    a._k5.addClass("rsHidden");
                    var b = a.slider;
                    b.one("mousemove.controlnav", function() {
                        a._k5.removeClass("rsHidden");
                    });
                    b.hover(function() {
                        a._k5.removeClass("rsHidden");
                    }, function() {
                        a._k5.addClass("rsHidden");
                    });
                }
            });
        }
    });
    b.rsModules.autoHideNav = b.rsProto._e6;
})(jQuery);

(function(e) {
    e.extend(e.rsProto, {
        _f6: function() {
            var a = this;
            "tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function(a, d, b) {
                d = e(d);
                b.thumbnail = d.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), 
                b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "");
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._g6();
            }), a.ev.on("rsOnAppendSlide", function(c, d, b) {
                b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
                a._l5 = a._k5.children();
            }), a.ev.on("rsOnRemoveSlide", function(c, d) {
                var b = a._l5.eq(d);
                b && (b.remove(), a._l5 = a._k5.children());
            }), a.ev.on("rsOnUpdateNav", function() {
                var c = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                c = a._l5.eq(c);
                c.addClass("rsNavSelected");
                a._n5 = c;
            }));
        },
        _g6: function() {
            var a = this, c;
            a._j5 = !0;
            c = '<div class="rsNav rsTabs">';
            for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
            c = e(c + "</div>");
            a._k5 = c;
            a._l5 = c.children(".rsNavItem");
            a.slider.append(c);
            a._k5.click(function(b) {
                b = e(b.target).closest(".rsNavItem");
                b.length && a.goTo(b.index());
            });
        }
    });
    e.rsModules.tabs = e.rsProto._f6;
})(jQuery);

(function(f) {
    f.extend(f.rsProto, {
        _h6: function() {
            var a = this;
            "thumbnails" === a.st.controlNavigation && (a._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, a.st.thumbs = f.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin = a.st.thumbs.spacing), 
            a.ev.on("rsBeforeParseNode", function(a, c, b) {
                c = f(c);
                b.thumbnail = c.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = f(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = c.attr("data-rsTmb"), 
                b.thumbnail || (b.thumbnail = c.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "");
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._k6();
            }), a._n5 = null, a.ev.on("rsOnUpdateNav", function() {
                var e = f(a._l5[a.currSlideId]);
                e !== a._n5 && (a._n5 && (a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), 
                a._n5 = e.addClass("rsNavSelected"));
            }), a.ev.on("rsOnAppendSlide", function(e, c, b) {
                e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + c.thumbnail + "</div>";
                b >= a.numSlides ? a._s3.append(e) : a._l5.eq(b).before(e);
                a._l5 = a._s3.children();
                a.updateThumbsSize();
            }), a.ev.on("rsOnRemoveSlide", function(e, c) {
                var b = a._l5.eq(c);
                b && (b.remove(), a._l5 = a._s3.children(), a.updateThumbsSize());
            }));
        },
        _k6: function() {
            var a = this, e = "rsThumbs", c = a.st.thumbs, b = "", g, d, h = c.spacing;
            a._j5 = !0;
            a._e3 = "vertical" === c.orientation ? !1 : !0;
            a._n6 = g = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
            a._i3 = 0;
            a._p6 = !1;
            a._m5 = !1;
            a._l6 = !1;
            a._q6 = c.arrows && c.navigation;
            d = a._e3 ? "Hor" : "Ver";
            a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
            b += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
            a._o6 = c.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var j = 0; j < a.numSlides; j++) d = a.slides[j], b += "<div" + g + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 + "</div>";
            b = f(b + "</div></div>");
            g = {};
            c.paddingTop && (g[a._e3 ? "paddingTop" : "paddingLeft"] = c.paddingTop);
            c.paddingBottom && (g[a._e3 ? "paddingBottom" : "paddingRight"] = c.paddingBottom);
            b.css(g);
            a._s3 = f(b).find("." + e + "Container");
            a._q6 && (e += "Arrow", c.arrowLeft ? a._r6 = c.arrowLeft : (a._r6 = f('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), 
            b.append(a._r6)), c.arrowRight ? a._s6 = c.arrowRight : (a._s6 = f('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), 
            b.append(a._s6)), a._r6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) + a._u6) * a._t6;
                a._a4(b > a._n3 ? a._n3 : b);
            }), a._s6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6;
                a._a4(b < a._o3 ? a._o3 : b);
            }), c.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), 
            b.one("mousemove.rsarrowshover", function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1));
            }), b.hover(function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1));
            }, function() {
                a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0));
            })));
            a._k5 = b;
            a._l5 = a._s3.children();
            a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
            a.slider.append(b);
            a._w3 = !0;
            a._v6 = h;
            c.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
            a._k5.on("click.rs", ".rsNavItem", function() {
                a._m5 || a.goTo(f(this).index());
            });
            a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                a._w6 = a._e3 ? a._c4 : a._b4;
                a.updateThumbsSize(!0);
            });
        },
        updateThumbsSize: function() {
            var a = this, e = a._l5.first(), c = {}, b = a._l5.length;
            a._t6 = (a._e3 ? e.outerWidth() : e.outerHeight()) + a._v6;
            a._y3 = b * a._t6 - a._v6;
            c[a._e3 ? "width" : "height"] = a._y3 + a._v6;
            a._z3 = a._e3 ? a._k5.width() : a._k5.height();
            a._o3 = -(a._y3 - a._z3) - a.st.thumbs.firstMargin;
            a._n3 = a.st.thumbs.firstMargin;
            a._u6 = Math.floor(a._z3 / a._t6);
            if (a._y3 < a._z3) a.st.thumbs.autoCenter && a._q3((a._z3 - a._y3) / 2), a.st.thumbs.arrows && a._r6 && (a._r6.addClass("rsThumbsArrowDisabled"), 
            a._s6.addClass("rsThumbsArrowDisabled")), a._l6 = !1, a._m5 = !1, a._k5.off(a._j1); else if (a.st.thumbs.navigation && !a._l6 && (a._l6 = !0, 
            !a.hasTouch && a.st.thumbs.drag || a.hasTouch && a.st.thumbs.touch)) a._m5 = !0, 
            a._k5.on(a._j1, function(b) {
                a._g2(b, !0);
            });
            a._e && (c[a._g + "transition-duration"] = "0ms");
            a._s3.css(c);
            if (a._w3 && (a.isFullscreen || a.st.thumbs.fitInViewport)) a._e3 ? a._c4 = a._w6 - a._k5.outerHeight() : a._b4 = a._w6 - a._k5.outerWidth();
        },
        setThumbsOrientation: function(a, e) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(), this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), 
            this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0));
        },
        _q3: function(a) {
            this._i3 = a;
            this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a);
        },
        _a4: function(a, e, c, b, g) {
            var d = this;
            if (d._l6) {
                e || (e = d.st.thumbs.transitionSpeed);
                d._i3 = a;
                d._x6 && clearTimeout(d._x6);
                d._p6 && (d._e || d._s3.stop(), c = !0);
                var h = {};
                d._p6 = !0;
                d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] = c ? f.rsCSS3Easing[d.st.easeOut] : f.rsCSS3Easing[d.st.easeInOut], 
                d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, c ? "easeOutCubic" : d.st.easeInOut));
                b && (d._i3 = b);
                d._y6();
                d._x6 = setTimeout(function() {
                    d._p6 = !1;
                    g && (d._a4(b, g, !0), g = null);
                }, e);
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), 
            this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"));
        },
        _m6: function(a, e) {
            var c = 0, b, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3, d = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (c = 1), 
            d = -a + this._u6 - 2 + c, b = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (b = (-a + 1) * this._t6 + this._n3) : b = this._n3, 
            b !== this._i3 && (c = void 0 === b ? this._i3 : b, c > this._n3 ? this._q3(this._n3) : c < this._o3 ? this._q3(this._o3) : void 0 !== b && (e ? this._q3(b) : this._a4(b))), 
            this._y6());
        }
    });
    f.rsModules.thumbnails = f.rsProto._h6;
})(jQuery);

(function(f) {
    f.extend(f.rsProto, {
        _z6: function() {
            var a = this;
            a._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&autoplay=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&amp;portrait=0&amp;autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            };
            a.st.video = f.extend({}, a._a7, a.st.video);
            a.ev.on("rsBeforeSizeSet", function() {
                a._b7 && setTimeout(function() {
                    var b = a._r1, b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
                    a._c7 && a._c7.css({
                        width: b.width(),
                        height: b.height()
                    });
                }, 32);
            });
            var c = a._a.mozilla;
            a.ev.on("rsAfterParseNode", function(b, e, d) {
                b = f(e);
                if (d.videoURL) {
                    a.st.video.disableCSS3inFF && c && (a._e = a._f = !1);
                    e = f('<div class="rsVideoContainer"></div>');
                    var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    b.hasClass("rsImg") ? d.content = e.append(b).append(g) : d.content.find(".rsImg").wrap(e).after(g);
                }
            });
            a.ev.on("rsAfterSlideChange", function() {
                a.stopVideo();
            });
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo();
        },
        playVideo: function() {
            var a = this;
            if (!a._b7) {
                var c = a.currSlide;
                if (!c.videoURL) return !1;
                var b = a._d7 = c.content, c = c.videoURL, e, d;
                c.match(/youtu\.be/i) || c.match(/youtube\.com/i) ? (d = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, 
                (d = c.match(d)) && 11 == d[7].length && (e = d[7]), void 0 !== e && (a._c7 = a.st.video.youTubeCode.replace("%id%", e))) : c.match(/vimeo\.com/i) && (d = /(www\.)?vimeo.com\/(\d+)($|\/)/, 
                (d = c.match(d)) && (e = d[2]), void 0 !== e && (a._c7 = a.st.video.vimeoCode.replace("%id%", e)));
                a.videoObj = f(a._c7);
                a.ev.trigger("rsOnCreateVideoElement", [ c ]);
                a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), 
                a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer"), 
                a._c7.css({
                    width: b.width(),
                    height: b.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(b) {
                    a.stopVideo();
                    b.preventDefault();
                    b.stopPropagation();
                    return !1;
                }), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._e7(!1), setTimeout(function() {
                    a._c7.addClass("rsVideoActive");
                }, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
                return !0;
            }
            return !1;
        },
        stopVideo: function() {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._e7(!0), 
            setTimeout(function() {
                a.ev.trigger("rsOnDestroyVideoElement", [ a.videoObj ]);
                var c = a._c7.find("iframe");
                if (c.length) try {
                    c.attr("src", "");
                } catch (b) {}
                a._c7.remove();
                a._c7 = null;
            }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1;
        },
        _e7: function(a) {
            var c = [], b = this.st.video;
            b.autoHideArrows && (this._c2 && (c.push(this._c2, this._d2), this._e2 = !a), this._v5 && c.push(this._v5));
            b.autoHideControlNav && this._k5 && c.push(this._k5);
            b.autoHideBlocks && this.currSlide.animBlocks && c.push(this.currSlide.animBlocks);
            b.autoHideCaption && this.globalCaption && c.push(this.globalCaption);
            if (c.length) for (b = 0; b < c.length; b++) a ? c[b].removeClass("rsHidden") : c[b].addClass("rsHidden");
        }
    });
    f.rsModules.video = f.rsProto._z6;
})(jQuery);

(function(d) {
    d.rsProto._f7 = function() {
        var a = this;
        a.st.visibleNearby && a.st.visibleNearby.enabled && (a._g7 = {
            enabled: !0,
            centerArea: .6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: .8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, a.st.visibleNearby = d.extend({}, a._g7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function() {
            a._h7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
            a.st.visibleNearby.hiddenOverflow || a._h7.css("overflow", "visible");
            a._o1 = a.st.controlsInside ? a._h7 : a.slider;
        }), a.ev.on("rsAfterSizePropSet", function() {
            var b, c = a.st.visibleNearby;
            b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
            a._h ? (a._b4 *= b, a._h7.css({
                height: a._c4,
                width: a._b4 / b
            }), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._h7.css({
                height: a._c4 / b,
                width: a._b4
            }), a._d = a._c4 * (1 - b) / 2 / b);
            c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
            c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d);
        }));
    };
    d.rsModules.visibleNearby = d.rsProto._f7;
})(jQuery);

(function() {
    var $, win;
    $ = this.jQuery;
    win = $(window);
    $.fn.stick_in_parent = function(opts) {
        var elm, inner_scrolling, parent_selector, sticky_class, _fn, _i, _len;
        if (opts == null) {
            opts = {};
        }
        sticky_class = opts.sticky_class, inner_scrolling = opts.inner_scrolling, parent_selector = opts.parent;
        if (parent_selector == null) {
            parent_selector = void 0;
        }
        if (inner_scrolling == null) {
            inner_scrolling = true;
        }
        if (sticky_class == null) {
            sticky_class = "is_stuck";
        }
        _fn = function(elm, padding_bottom, parent_top, parent_height, top, height) {
            var bottomed, fixed, float, last_pos, offset, parent, recalc, reset_width, spacer, tick;
            parent = elm.parent();
            if (parent_selector != null) {
                parent = parent.closest(parent_selector);
            }
            if (!parent.length) {
                throw "failed to find stick parent";
            }
            recalc = function() {
                var border_top, padding_top;
                border_top = parseInt(parent.css("border-top-width"), 10);
                padding_top = parseInt(parent.css("padding-top"), 10);
                padding_bottom = parseInt(parent.css("padding-bottom"), 10);
                parent_top = parent.offset().top + border_top + padding_top;
                parent_height = parent.height();
                top = elm.offset().top - parseInt(elm.css("margin-top"), 10);
                return height = elm.outerHeight(true);
            };
            recalc();
            if (height === parent_height) {
                return;
            }
            float = elm.css("float");
            spacer = $("<div />").css({
                width: elm.outerWidth(true),
                height: height,
                display: elm.css("display"),
                "float": float
            });
            fixed = false;
            bottomed = false;
            last_pos = void 0;
            offset = 0;
            reset_width = false;
            tick = function() {
                var before, css, delta, scroll, will_bottom, win_height;
                scroll = win.scrollTop();
                if (last_pos != null) {
                    delta = scroll - last_pos;
                }
                last_pos = scroll;
                if (fixed) {
                    will_bottom = scroll + height + offset > parent_height + parent_top;
                    if (bottomed && !will_bottom) {
                        bottomed = false;
                        elm.css({
                            position: "fixed",
                            bottom: "",
                            top: 0
                        }).trigger("sticky_kit:unbottom");
                    }
                    if (scroll < top) {
                        fixed = false;
                        offset = 0;
                        if (float === "left" || float === "right") {
                            elm.insertAfter(spacer);
                        }
                        spacer.detach();
                        css = {
                            position: ""
                        };
                        if (reset_width) {
                            css.width = "";
                        }
                        elm.css(css).removeClass(sticky_class).trigger("sticky_kit:unstick");
                    }
                    if (inner_scrolling) {
                        win_height = win.height();
                        if (height > win_height) {
                            if (!bottomed) {
                                offset -= delta;
                                before = offset;
                                offset = Math.max(win_height - height, offset);
                                offset = Math.min(0, offset);
                                elm.css({
                                    top: offset + "px"
                                });
                            }
                        }
                    }
                } else {
                    if (scroll > top) {
                        fixed = true;
                        css = {
                            position: "fixed",
                            top: offset
                        };
                        if (float === "none" && elm.css("display") === "block") {
                            css.width = elm.width() + "px";
                            reset_width = true;
                        }
                        elm.css(css).addClass(sticky_class).after(spacer);
                        if (float === "left" || float === "right") {
                            spacer.append(elm);
                        }
                        elm.trigger("sticky_kit:stick");
                    }
                }
                if (fixed) {
                    if (will_bottom == null) {
                        will_bottom = scroll + height + offset > parent_height + parent_top;
                    }
                    if (!bottomed && will_bottom) {
                        bottomed = true;
                        if (parent.css("position") === "static") {
                            parent.css({
                                position: "relative"
                            });
                        }
                        return elm.css({
                            position: "absolute",
                            bottom: padding_bottom,
                            top: ""
                        }).trigger("sticky_kit:bottom");
                    }
                }
            };
            win.on("scroll", tick);
            setTimeout(tick, 0);
            return $(document.body).on("sticky_kit:recalc", function() {
                recalc();
                return tick();
            });
        };
        for (_i = 0, _len = this.length; _i < _len; _i++) {
            elm = this[_i];
            _fn($(elm));
        }
        return this;
    };
}).call(this);

(function() {
    var method;
    var noop = function noop() {};
    var methods = [ "assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn" ];
    var length = methods.length;
    var console = window.console = window.console || {};
    while (length--) {
        method = methods[length];
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

(function($) {
    var CLOSE_EVENT = "Close", BEFORE_CLOSE_EVENT = "BeforeClose", AFTER_CLOSE_EVENT = "AfterClose", BEFORE_APPEND_EVENT = "BeforeAppend", MARKUP_PARSE_EVENT = "MarkupParse", OPEN_EVENT = "Open", CHANGE_EVENT = "Change", NS = "mfp", EVENT_NS = "." + NS, READY_CLASS = "mfp-ready", REMOVING_CLASS = "mfp-removing", PREVENT_CLOSE_CLASS = "mfp-prevent-close";
    var mfp, MagnificPopup = function() {}, _isJQ = !!window.jQuery, _prevStatus, _window = $(window), _body, _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    }, _getEl = function(className, appendTo, html, raw) {
        var el = document.createElement("div");
        el.className = "mfp-" + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    }, _mfpTrigger = function(e, data) {
        mfp.ev.triggerHandler(NS + e, data);
        if (mfp.st.callbacks) {
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [ data ]);
            }
        }
    }, _setFocus = function() {
        (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    }, _getCloseBtn = function(type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    }, _checkInstance = function() {
        if (!$.magnificPopup.instance) {
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    }, _checkIfClose = function(target) {
        if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
            return;
        }
        var closeOnContent = mfp.st.closeOnContentClick;
        var closeOnBg = mfp.st.closeOnBgClick;
        if (closeOnContent && closeOnBg) {
            return true;
        } else {
            if (!mfp.content || $(target).hasClass("mfp-close") || mfp.preloader && target === mfp.preloader[0]) {
                return true;
            }
            if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
                if (closeOnBg) {
                    if ($.contains(document, target)) {
                        return true;
                    }
                }
            } else if (closeOnContent) {
                return true;
            }
        }
        return false;
    }, supportsTransitions = function() {
        var s = document.createElement("p").style, v = [ "ms", "O", "Moz", "Webkit" ];
        if (s["transition"] !== undefined) {
            return true;
        }
        while (v.length) {
            if (v.pop() + "Transition" in s) {
                return true;
            }
        }
        return false;
    };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
            mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
            mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
            mfp.isAndroid = /android/gi.test(appVersion);
            mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            _body = $(document.body);
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items, item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [ data.items ];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = "";
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === "auto" ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function(e) {
                    if (_checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl("container", mfp.wrap);
            }
            mfp.contentContainer = _getEl("content");
            if (mfp.st.preloader) {
                mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp["init" + n].call(mfp);
            }
            _mfpTrigger("BeforeOpen");
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += " mfp-close-btn-in";
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += " mfp-align-top";
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: "hidden",
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: "absolute"
                });
            }
            if (mfp.st.fixedBgPos === false || mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: "absolute"
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on("keyup" + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on("resize" + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += " mfp-auto-cursor";
            }
            if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.paddingRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = "hidden";
                } else {
                    $("body, html").css("overflow", "hidden");
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += " mfp-ie7";
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger("BuildControls");
            $("html").css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(document.body);
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    _setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on("focusin" + EVENT_NS, function(e) {
                    if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                        _setFocus();
                        return false;
                    }
                });
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
        },
        close: function() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + " ";
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    paddingRight: ""
                };
                if (mfp.isIE7) {
                    $("body, html").css("overflow", "");
                } else {
                    windowStyles.overflow = "";
                }
                $("html").css(windowStyles);
            }
            _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
            mfp.bgOverlay.attr("class", "mfp-bg");
            mfp.container.attr("class", "mfp-container");
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
            }
            if (mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css("height", height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css("height", mfp.wH);
            }
            _mfpTrigger("Resize");
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content) mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger("BeforeChange", [ mfp.currItem ? mfp.currItem.type : "", type ]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger("FirstMarkupParse", markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
            }
            var newContent = mfp["get" + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger("AfterChange");
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find(".mfp-close").length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = "";
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass("mfp-" + type + "-holder");
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index], type = item.type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass("mfp-" + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr("data-mfp-src");
                if (!item.src) {
                    item.src = item.el.attr("href");
                }
            }
            item.type = type || mfp.st.type || "inline";
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger("ElementParse", item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = "click.magnificPopup";
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass("mfp-s-" + _prevStatus);
                }
                if (!text && status === "loading") {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger("UpdateStatus", data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass("mfp-s-" + status);
                _prevStatus = status;
            }
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height());
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [ template, values, item ]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split("_");
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + "-" + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === "replaceWith") {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === "img") {
                            if (el.is("img")) {
                                el.attr("src", value);
                            } else {
                                el.replaceWith('<img src="' + value + '" class="' + el.attr("class") + '" />');
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + "-" + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.id = "mfp-sbm";
                scrollDiv.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) options = {};
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: "",
            preloader: true,
            focus: "",
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === "open") {
                var items, itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen) mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            if (_isJQ) {
                jqEl.data("magnificPopup", options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };
    var INLINE_NS = "inline", _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline, el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = "mfp-" + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus("ready");
                    } else {
                        mfp.updateStatus("error", inlineSt.tNotFound);
                        el = $("<div>");
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus("ready");
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined) return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || "";
            }
        }
        return "";
    };
    $.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<div class="mfp-img"></div>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + "</div>" + "</div>",
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image, ns = ".image";
                mfp.types.push("image");
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === "image" && imgSt.cursor) {
                        _body.addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        _body.removeClass(imgSt.cursor);
                    }
                    _window.off("resize" + EVENT_NS);
                });
                _mfpOn("Resize" + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn("AfterChange", mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img) return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css("padding-top"), 10) + parseInt(item.img.css("padding-bottom"), 10);
                    }
                    item.img.css("max-height", mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger("ImageHasSize", item);
                    if (item.imgHidden) {
                        if (mfp.content) mfp.content.removeClass("mfp-loading");
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0, img = item.img[0], mfpSetInterval = function(delay) {
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    _imgInterval = setInterval(function() {
                        if (img.naturalWidth > 0) {
                            mfp._onImageHasSize(item);
                            return;
                        }
                        if (counter > 200) {
                            clearInterval(_imgInterval);
                        }
                        counter++;
                        if (counter === 3) {
                            mfpSetInterval(10);
                        } else if (counter === 40) {
                            mfpSetInterval(50);
                        } else if (counter === 100) {
                            mfpSetInterval(500);
                        }
                    }, delay);
                };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0, onLoadComplete = function() {
                    if (item) {
                        if (item.img[0].complete) {
                            item.img.off(".mfploader");
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus("ready");
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            _mfpTrigger("ImageLoadComplete");
                        } else {
                            guard++;
                            if (guard < 200) {
                                setTimeout(onLoadComplete, 100);
                            } else {
                                onLoadError();
                            }
                        }
                    }
                }, onLoadError = function() {
                    if (item) {
                        item.img.off(".mfploader");
                        if (item === mfp.currItem) {
                            mfp._onImageHasSize(item);
                            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                        }
                        item.hasSize = true;
                        item.loaded = true;
                        item.loadError = true;
                    }
                }, imgSt = mfp.st.image;
                var el = template.find(".mfp-img");
                if (el.length) {
                    var img = document.createElement("img");
                    img.className = "mfp-img";
                    item.img = $(img).on("load.mfploader", onLoadComplete).on("error.mfploader", onLoadError);
                    img.src = item.src;
                    if (el.is("img")) {
                        item.img = item.img.clone();
                    }
                    if (item.img[0].naturalWidth > 0) {
                        item.hasSize = true;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass("mfp-loading");
                        mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
                    } else {
                        template.removeClass("mfp-loading");
                        mfp.updateStatus("ready");
                    }
                    return template;
                }
                mfp.updateStatus("loading");
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass("mfp-loading");
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement("p").style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule("zoom", {
        options: {
            enabled: false,
            easing: "ease-in-out",
            duration: 300,
            opener: function(element) {
                return element.is("img") ? element : element.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom, ns = ".zoom";
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration, getElToAnimate = function(image) {
                    var newImg = image.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), transition = "all " + zoomSt.duration / 1e3 + "s " + zoomSt.easing, cssObj = {
                        position: "fixed",
                        zIndex: 9999,
                        left: 0,
                        top: 0,
                        "-webkit-backface-visibility": "hidden"
                    }, t = "transition";
                    cssObj["-webkit-" + t] = cssObj["-moz-" + t] = cssObj["-o-" + t] = cssObj[t] = transition;
                    newImg.css(cssObj);
                    return newImg;
                }, showMainContent = function() {
                    mfp.content.css("visibility", "visible");
                }, openTimeout, animatedImg;
                _mfpOn("BuildControls" + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css("visibility", "hidden");
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger("ZoomAnimationEnded");
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css("visibility", "hidden");
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === "image";
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css("padding-top"), 10);
                var paddingBottom = parseInt(el.css("padding-bottom"), 10);
                offset.top -= $(window).scrollTop() - paddingTop;
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj["-moz-transform"] = obj["transform"] = "translate(" + offset.left + "px," + offset.top + "px)";
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var RETINA_NS = "retina";
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return "@2x" + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina, ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn("ImageHasSize" + "." + RETINA_NS, function(e, item) {
                            item.img.css({
                                "max-width": item.img[0].naturalWidth / ratio,
                                width: "100%"
                            });
                        });
                        _mfpOn("ElementParse" + "." + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
})(window.jQuery || window.Zepto);

(function(root, factory) {
    if (typeof exports == "object") module.exports = factory(); else if (typeof define == "function" && define.amd) define(factory); else root.Spinner = factory();
})(this, function() {
    "use strict";
    var prefixes = [ "webkit", "Moz", "ms", "O" ], animations = {}, useCssAnimations;
    function createEl(tag, prop) {
        var el = document.createElement(tag || "div"), n;
        for (n in prop) el[n] = prop[n];
        return el;
    }
    function ins(parent) {
        for (var i = 1, n = arguments.length; i < n; i++) parent.appendChild(arguments[i]);
        return parent;
    }
    var sheet = function() {
        var el = createEl("style", {
            type: "text/css"
        });
        ins(document.getElementsByTagName("head")[0], el);
        return el.sheet || el.styleSheet;
    }();
    function addAnimation(alpha, trail, i, lines) {
        var name = [ "opacity", trail, ~~(alpha * 100), i, lines ].join("-"), start = .01 + i / lines * 100, z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha), prefix = useCssAnimations.substring(0, useCssAnimations.indexOf("Animation")).toLowerCase(), pre = prefix && "-" + prefix + "-" || "";
        if (!animations[name]) {
            sheet.insertRule("@" + pre + "keyframes " + name + "{" + "0%{opacity:" + z + "}" + start + "%{opacity:" + alpha + "}" + (start + .01) + "%{opacity:1}" + (start + trail) % 100 + "%{opacity:" + alpha + "}" + "100%{opacity:" + z + "}" + "}", sheet.cssRules.length);
            animations[name] = 1;
        }
        return name;
    }
    function vendor(el, prop) {
        var s = el.style, pp, i;
        prop = prop.charAt(0).toUpperCase() + prop.slice(1);
        for (i = 0; i < prefixes.length; i++) {
            pp = prefixes[i] + prop;
            if (s[pp] !== undefined) return pp;
        }
        if (s[prop] !== undefined) return prop;
    }
    function css(el, prop) {
        for (var n in prop) el.style[vendor(el, n) || n] = prop[n];
        return el;
    }
    function merge(obj) {
        for (var i = 1; i < arguments.length; i++) {
            var def = arguments[i];
            for (var n in def) if (obj[n] === undefined) obj[n] = def[n];
        }
        return obj;
    }
    function pos(el) {
        var o = {
            x: el.offsetLeft,
            y: el.offsetTop
        };
        while (el = el.offsetParent) o.x += el.offsetLeft, o.y += el.offsetTop;
        return o;
    }
    function getColor(color, idx) {
        return typeof color == "string" ? color : color[idx % color.length];
    }
    var defaults = {
        lines: 12,
        length: 7,
        width: 5,
        radius: 10,
        rotate: 0,
        corners: 1,
        color: "#000",
        direction: 1,
        speed: 1,
        trail: 100,
        opacity: 1 / 4,
        fps: 20,
        zIndex: 2e9,
        className: "spinner",
        top: "auto",
        left: "auto",
        position: "relative"
    };
    function Spinner(o) {
        if (typeof this == "undefined") return new Spinner(o);
        this.opts = merge(o || {}, Spinner.defaults, defaults);
    }
    Spinner.defaults = {};
    merge(Spinner.prototype, {
        spin: function(target) {
            this.stop();
            var self = this, o = self.opts, el = self.el = css(createEl(0, {
                className: o.className
            }), {
                position: o.position,
                width: 0,
                zIndex: o.zIndex
            }), mid = o.radius + o.length + o.width, ep, tp;
            if (target) {
                target.insertBefore(el, target.firstChild || null);
                tp = pos(target);
                ep = pos(el);
                css(el, {
                    left: (o.left == "auto" ? tp.x - ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + "px",
                    top: (o.top == "auto" ? tp.y - ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid) + "px"
                });
            }
            el.setAttribute("role", "progressbar");
            self.lines(el, self.opts);
            if (!useCssAnimations) {
                var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, alpha, fps = o.fps, f = fps / o.speed, ostep = (1 - o.opacity) / (f * o.trail / 100), astep = f / o.lines;
                (function anim() {
                    i++;
                    for (var j = 0; j < o.lines; j++) {
                        alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity);
                        self.opacity(el, j * o.direction + start, alpha, o);
                    }
                    self.timeout = self.el && setTimeout(anim, ~~(1e3 / fps));
                })();
            }
            return self;
        },
        stop: function() {
            var el = this.el;
            if (el) {
                clearTimeout(this.timeout);
                if (el.parentNode) el.parentNode.removeChild(el);
                this.el = undefined;
            }
            return this;
        },
        lines: function(el, o) {
            var i = 0, start = (o.lines - 1) * (1 - o.direction) / 2, seg;
            function fill(color, shadow) {
                return css(createEl(), {
                    position: "absolute",
                    width: o.length + o.width + "px",
                    height: o.width + "px",
                    background: color,
                    boxShadow: shadow,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / o.lines * i + o.rotate) + "deg) translate(" + o.radius + "px" + ",0)",
                    borderRadius: (o.corners * o.width >> 1) + "px"
                });
            }
            for (;i < o.lines; i++) {
                seg = css(createEl(), {
                    position: "absolute",
                    top: 1 + ~(o.width / 2) + "px",
                    transform: o.hwaccel ? "translate3d(0,0,0)" : "",
                    opacity: o.opacity,
                    animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + " " + 1 / o.speed + "s linear infinite"
                });
                if (o.shadow) ins(seg, css(fill("#000", "0 0 4px " + "#000"), {
                    top: 2 + "px"
                }));
                ins(el, ins(seg, fill(getColor(o.color, i), "0 0 1px rgba(0,0,0,.1)")));
            }
            return el;
        },
        opacity: function(el, i, val) {
            if (i < el.childNodes.length) el.childNodes[i].style.opacity = val;
        }
    });
    function initVML() {
        function vml(tag, attr) {
            return createEl("<" + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr);
        }
        sheet.addRule(".spin-vml", "behavior:url(#default#VML)");
        Spinner.prototype.lines = function(el, o) {
            var r = o.length + o.width, s = 2 * r;
            function grp() {
                return css(vml("group", {
                    coordsize: s + " " + s,
                    coordorigin: -r + " " + -r
                }), {
                    width: s,
                    height: s
                });
            }
            var margin = -(o.width + o.length) * 2 + "px", g = css(grp(), {
                position: "absolute",
                top: margin,
                left: margin
            }), i;
            function seg(i, dx, filter) {
                ins(g, ins(css(grp(), {
                    rotation: 360 / o.lines * i + "deg",
                    left: ~~dx
                }), ins(css(vml("roundrect", {
                    arcsize: o.corners
                }), {
                    width: r,
                    height: o.width,
                    left: o.radius,
                    top: -o.width >> 1,
                    filter: filter
                }), vml("fill", {
                    color: getColor(o.color, i),
                    opacity: o.opacity
                }), vml("stroke", {
                    opacity: 0
                }))));
            }
            if (o.shadow) for (i = 1; i <= o.lines; i++) seg(i, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (i = 1; i <= o.lines; i++) seg(i);
            return ins(el, g);
        };
        Spinner.prototype.opacity = function(el, i, val, o) {
            var c = el.firstChild;
            o = o.shadow && o.lines || 0;
            if (c && i + o < c.childNodes.length) {
                c = c.childNodes[i + o];
                c = c && c.firstChild;
                c = c && c.firstChild;
                if (c) c.opacity = val;
            }
        };
    }
    var probe = css(createEl("group"), {
        behavior: "url(#default#VML)"
    });
    if (!vendor(probe, "transform") && probe.adj) initVML(); else useCssAnimations = vendor(probe, "animation");
    return Spinner;
});

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.contactForm = function() {
            var el, form;
            el = $(".contact-form-link");
            form = $("#simple-contact-form");
            return {
                init: function() {
                    form.attr("action", "");
                    return el.magnificPopup({
                        items: {
                            src: "#contact-form",
                            type: "inline",
                            focus: "#scf_name",
                            closeBtnInside: true
                        }
                    });
                }
            };
        }();
        return KTV.contactForm.init();
    });
}).call(this);

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.homePageSlider = function() {
            var el, setSlider, setSliderEvents, sliderOptions;
            el = $("#featured-slider");
            sliderOptions = {
                arrowsNav: true,
                arrowsNavAutoHide: false,
                fadeinLoadedSlide: false,
                controlNavigationSpacing: 0,
                controlNavigation: "bullets",
                imageScaleMode: "none",
                imageAlignCenter: false,
                autoHeight: true,
                transitionType: "fade",
                usePreloader: false,
                loop: false,
                autoPlay: {
                    enabled: true,
                    delay: 4e3
                }
            };
            setSlider = function() {
                $(".slide-1").find(".slide-desc").delay(1500).animate({
                    bottom: 0
                });
                el.find(".slide").css("display", "block");
                return el.royalSlider(sliderOptions);
            };
            setSliderEvents = function() {
                var apiEl, bottom, currentSlide, currentSlideDesc;
                currentSlide = null;
                currentSlideDesc = null;
                bottom = $(".slide-desc").eq(0).css("bottom");
                apiEl = el.data("royalSlider");
                return apiEl.ev.on("rsAfterSlideChange", function() {
                    currentSlide = apiEl.currSlide.content;
                    currentSlideDesc = currentSlide.find(".slide-desc");
                    return currentSlideDesc.delay(1500).animate({
                        bottom: 0
                    });
                });
            };
            return {
                init: function() {
                    setSlider();
                    return setSliderEvents();
                }
            };
        }();
        if ($(".home-page").length) {
            return KTV.homePageSlider.init();
        }
    });
}).call(this);

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.newsletterSignup = function() {
            var form, handleSubmit, spinner;
            form = $("#newsletter-signup");
            spinner = null;
            handleSubmit = function(e) {
                e.preventDefault();
                return $.ajax({
                    type: "POST",
                    data: {
                        mc_submit_type: "js",
                        mcsf_action: "mc_submit_signup_form",
                        _mc_submit_signup_form_nonce: form.find("#_mc_submit_signup_form_nonce").val(),
                        mc_mv_EMAIL: form.find(".email").val(),
                        mc_signup_submit: "Sign Up"
                    },
                    beforeSend: function() {
                        form.find('input[type="submit"]').attr("disabled", "disabled");
                        spinner = new Spinner().spin(form[0]);
                    },
                    error: function() {
                        form.find('input[type="submit"]').removeAttr("disabled");
                        spinner.stop();
                        return alertify.error("Bummer, our servers are having issues right now. Try again later.");
                    },
                    success: function(data) {
                        var errorText, result;
                        form.find('input[type="submit"]').removeAttr("disabled");
                        spinner.stop();
                        result = $(data);
                        if (result.hasClass("mc_success_msg")) {
                            form.find(".email").val("");
                            alertify.set({
                                delay: 3e3
                            });
                            return alertify.success("Your all signed up. Yeeeew!");
                        } else {
                            errorText = result.html().replace("» ", "");
                            alertify.set({
                                delay: 1e4
                            });
                            return alertify.error(errorText);
                        }
                    }
                });
            };
            return {
                init: function() {
                    return form.on("submit", handleSubmit);
                }
            };
        }();
        return KTV.newsletterSignup.init();
    });
}).call(this);

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.productImageSwapper = function() {
            var container, featuredImage, handleThumbClick, swapFeaturedImage, thumbnails;
            container = $(".product-images-container");
            featuredImage = $(".featured-product-image", container);
            thumbnails = $(".thumbnails", container);
            handleThumbClick = function() {
                return thumbnails.on("click", ".product-thumb img", swapFeaturedImage);
            };
            swapFeaturedImage = function(e) {
                e.preventDefault();
                return featuredImage.attr("src", $(this).closest("a").attr("href"));
            };
            return {
                init: function() {
                    return handleThumbClick();
                }
            };
        }();
        if ($(".store-page.store-single").length) {
            return KTV.productImageSwapper.init();
        }
    });
}).call(this);

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.responsiveSubNav = function() {
            var breakpoint, cloneLeftIntoTop, hasLeftNav, hasTopNav, leftEl, leftSubNav, navClone, setNavState, setResponsiveNav, setTitle, topEl, topHeader, topSubNav, watchNav;
            leftEl = $(".aside-container");
            topEl = $(".horizontal-sub-nav");
            leftSubNav = null;
            topSubNav = null;
            topHeader = null;
            navClone = null;
            breakpoint = 769;
            hasLeftNav = function() {
                leftSubNav = leftEl.find(".aside-navigation");
                return !!leftSubNav.length;
            };
            hasTopNav = function() {
                topSubNav = topEl.find(".list-container");
                topHeader = topEl.find(".sub-nav-heading");
                return !!topSubNav.length;
            };
            setNavState = function() {
                if (navClone) {
                    navClone.hide();
                }
                topSubNav.show();
                if ($(window).width() > breakpoint) {
                    return topHeader.show();
                } else {
                    return topHeader.hide();
                }
            };
            watchNav = function() {
                return $(window).resize(setNavState);
            };
            cloneLeftIntoTop = function() {
                var cloneContainer;
                navClone = leftSubNav.find("ul").first().clone().addClass("cloned");
                cloneContainer = $('<div class="list-container"></div>');
                cloneContainer.insertAfter(topEl.find(".heading-container"));
                return navClone.appendTo(cloneContainer);
            };
            setTitle = function() {
                switch (true) {
                  case !!$("#body.shows-page").length:
                    return "Select Channel:";

                  case !!$("#body.blog-page").length:
                    return "Blog Categories:";

                  case !!$("#body.about-page").length:
                    return "About Us:";

                  case !!$("#body.tag-page").length:
                    return "Popular Tags:";

                  case !!$("#body.links-page").length:
                    return "Link Categories:";

                  default:
                    return "Menu:";
                }
            };
            setResponsiveNav = function() {
                topSubNav.menutron({
                    maxScreenWidth: breakpoint,
                    menuTitle: setTitle()
                });
                return setNavState();
            };
            return {
                init: function() {
                    if (hasLeftNav()) {
                        cloneLeftIntoTop();
                    }
                    if (hasTopNav()) {
                        setResponsiveNav();
                    }
                    if (hasTopNav()) {
                        return watchNav();
                    }
                }
            };
        }();
        return KTV.responsiveSubNav.init();
    });
}).call(this);

(function() {
    jQuery(function() {
        var KTV;
        KTV = KTV || {};
        KTV.stickySidebar = function() {
            var el, partner;
            el = $(".aside-navigation");
            partner = $(".main-container");
            return {
                init: function() {
                    if (el.length && el.height() < partner.height()) {
                        return el.stick_in_parent();
                    }
                }
            };
        }();
        return $(window).load(function() {
            return KTV.stickySidebar.init();
        });
    });
}).call(this);

(function() {}).call(this);