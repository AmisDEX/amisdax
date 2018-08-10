webpackJsonp([1], {
    18: function(e, a, d) {
        function c(e) {
            d(784)
        }
        var t = d(2)(d(388), d(844), c, null, null);
        e.exports = t.exports
    },
    370: function(e, a) {
        e.exports = [{
            constant: !1,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "user",
                type: "address"
            }, {
                name: "v",
                type: "uint8"
            }, {
                name: "r",
                type: "bytes32"
            }, {
                name: "s",
                type: "bytes32"
            }, {
                name: "amount",
                type: "uint256"
            }],
            name: "trade",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }],
            name: "order",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }, {
                name: "",
                type: "bytes32"
            }],
            name: "orderFills",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "v",
                type: "uint8"
            }, {
                name: "r",
                type: "bytes32"
            }, {
                name: "s",
                type: "bytes32"
            }],
            name: "cancelOrder",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "amount",
                type: "uint256"
            }],
            name: "withdraw",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "token",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            name: "depositToken",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "user",
                type: "address"
            }, {
                name: "v",
                type: "uint8"
            }, {
                name: "r",
                type: "bytes32"
            }, {
                name: "s",
                type: "bytes32"
            }],
            name: "amountFilled",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }, {
                name: "",
                type: "address"
            }],
            name: "tokens",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "feeMake_",
                type: "uint256"
            }],
            name: "changeFeeMake",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeMake",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "feeRebate_",
                type: "uint256"
            }],
            name: "changeFeeRebate",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeAccount",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "user",
                type: "address"
            }, {
                name: "v",
                type: "uint8"
            }, {
                name: "r",
                type: "bytes32"
            }, {
                name: "s",
                type: "bytes32"
            }, {
                name: "amount",
                type: "uint256"
            }, {
                name: "sender",
                type: "address"
            }],
            name: "testTrade",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "feeAccount_",
                type: "address"
            }],
            name: "changeFeeAccount",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeRebate",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "feeTake_",
                type: "uint256"
            }],
            name: "changeFeeTake",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "admin_",
                type: "address"
            }],
            name: "changeAdmin",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "token",
                type: "address"
            }, {
                name: "amount",
                type: "uint256"
            }],
            name: "withdrawToken",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }, {
                name: "",
                type: "bytes32"
            }],
            name: "orders",
            outputs: [{
                name: "",
                type: "bool"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "feeTake",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "deposit",
            outputs: [],
            payable: !0,
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "accountLevelsAddr_",
                type: "address"
            }],
            name: "changeAccountLevelsAddr",
            outputs: [],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "accountLevelsAddr",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "token",
                type: "address"
            }, {
                name: "user",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "admin",
            outputs: [{
                name: "",
                type: "address"
            }],
            payable: !1,
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "tokenGet",
                type: "address"
            }, {
                name: "amountGet",
                type: "uint256"
            }, {
                name: "tokenGive",
                type: "address"
            }, {
                name: "amountGive",
                type: "uint256"
            }, {
                name: "expires",
                type: "uint256"
            }, {
                name: "nonce",
                type: "uint256"
            }, {
                name: "user",
                type: "address"
            }, {
                name: "v",
                type: "uint8"
            }, {
                name: "r",
                type: "bytes32"
            }, {
                name: "s",
                type: "bytes32"
            }],
            name: "availableVolume",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            type: "function"
        }, {
            inputs: [{
                name: "admin_",
                type: "address"
            }, {
                name: "feeAccount_",
                type: "address"
            }, {
                name: "accountLevelsAddr_",
                type: "address"
            }, {
                name: "feeMake_",
                type: "uint256"
            }, {
                name: "feeTake_",
                type: "uint256"
            }, {
                name: "feeRebate_",
                type: "uint256"
            }],
            payable: !1,
            type: "constructor"
        }, {
            payable: !1,
            type: "fallback"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "tokenGet",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGet",
                type: "uint256"
            }, {
                indexed: !1,
                name: "tokenGive",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGive",
                type: "uint256"
            }, {
                indexed: !1,
                name: "expires",
                type: "uint256"
            }, {
                indexed: !1,
                name: "nonce",
                type: "uint256"
            }, {
                indexed: !1,
                name: "user",
                type: "address"
            }],
            name: "Order",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "tokenGet",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGet",
                type: "uint256"
            }, {
                indexed: !1,
                name: "tokenGive",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGive",
                type: "uint256"
            }, {
                indexed: !1,
                name: "expires",
                type: "uint256"
            }, {
                indexed: !1,
                name: "nonce",
                type: "uint256"
            }, {
                indexed: !1,
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                name: "v",
                type: "uint8"
            }, {
                indexed: !1,
                name: "r",
                type: "bytes32"
            }, {
                indexed: !1,
                name: "s",
                type: "bytes32"
            }],
            name: "Cancel",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "tokenGet",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGet",
                type: "uint256"
            }, {
                indexed: !1,
                name: "tokenGive",
                type: "address"
            }, {
                indexed: !1,
                name: "amountGive",
                type: "uint256"
            }, {
                indexed: !1,
                name: "get",
                type: "address"
            }, {
                indexed: !1,
                name: "give",
                type: "address"
            }],
            name: "Trade",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                name: "balance",
                type: "uint256"
            }],
            name: "Deposit",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                name: "user",
                type: "address"
            }, {
                indexed: !1,
                name: "amount",
                type: "uint256"
            }, {
                indexed: !1,
                name: "balance",
                type: "uint256"
            }],
            name: "Withdraw",
            type: "event"
        }]
    },
    371: function(e, a) {
        e.exports = [{
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                name: "",
                type: "string"
            }],
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_spender",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                name: "supply",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_from",
                type: "address"
            }, {
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "balance",
                type: "uint256"
            }],
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                name: "_to",
                type: "address"
            }, {
                name: "_value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                name: "success",
                type: "bool"
            }],
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "_owner",
                type: "address"
            }, {
                name: "_spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                name: "remaining",
                type: "uint256"
            }],
            type: "function"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "_from",
                type: "address"
            }, {
                indexed: !0,
                name: "_to",
                type: "address"
            }, {
                indexed: !1,
                name: "_value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                name: "_owner",
                type: "address"
            }, {
                indexed: !0,
                name: "_spender",
                type: "address"
            }, {
                indexed: !1,
                name: "_value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }]
    },
    372: function(e, a, d) {
        "use strict";
        var c = d(10)
          , t = d(867)
          , n = d(405);
        c.a.use(t.a);
        var r = new t.a({
            base: "/",
            routes: [{
                path: "*",
                redirect: "/home"
            }, {
                path: "/home",
                name: "home",
                component: n.a.HomePage
            }, {
                path: "/exchange",
                redirect: "/exchange/PPT"
            }, {
                path: "/exchange/:token",
                name: "exchange",
                component: n.a.ExchangePage
            }]
        });
        a.a = r
    },
    373: function(e, a, d) {
        "use strict";
        var c = d(10)
          , t = d(3)
          , n = d(417)
          , r = d(413)
          , s = d(415)
          , i = d(414)
          , f = d(416)
          , m = d(412);
        c.a.use(t.d);
        var o = new t.d.Store({
            modules: {
                users: n.a,
                markets: r.a,
                tokens: s.a,
                orders: i.a,
                trades: f.a,
                components: m.a
            }
        });
        a.a = o
    },
    374: function(e, a, d) {
        function c(e) {
            d(797)
        }
        var t = d(2)(d(379), d(857), c, null, null);
        e.exports = t.exports
    },
    379: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(822)
          , t = d.n(c)
          , n = d(821)
          , r = d.n(n)
          , s = d(828)
          , i = d.n(s);
        a.default = {
            components: {
                Navbar: t.a,
                ModalLoader: r.a,
                Toast: i.a
            },
            name: "app",
            created: function() {
                console.log("%cWelcome to the AmisDAX Exchange", "background: #222; color: #4dccff; font-size: 18px")
            }
        }
    },
    380: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3);
        a.default = {
            name: "Balance",
            data: function() {
                return {}
            },
            props: {
                token: {
                    default: function() {}
                },
                current_wallet: {
                    default: function() {}
                },
                ed_wallet: {
                    default: function() {}
                }
            },
            methods: t()({}, d.i(n.b)({
                openModal: "components/OPEN_MODAL"
            })),
            computed: t()({}, d.i(n.a)([]), {
                edEthBalance: function() {
                    return parseFloat(this.ed_wallet.eth_balance)
                },
                edTokenBalance: function() {
                    return parseFloat(this.ed_wallet.current_token_balance)
                }
            }),
            mounted: function() {}
        }
    },
    381: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        d(3);
        a.default = {
            name: "LoadingOverlay",
            mounted: function() {}
        }
    },
    382: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(833)
          , s = d.n(r)
          , i = d(838)
          , f = d.n(i)
          , m = d(836)
          , o = d.n(m)
          , l = d(820)
          , b = d.n(l)
          , u = d(837)
          , x = d.n(u)
          , p = d(835)
          , h = d.n(p)
          , _ = d(834)
          , v = d.n(_);
        a.default = {
            name: "ModalLoader",
            components: {
                DepositModal: s.a,
                WithdrawModal: f.a,
                OrderModal: o.a,
                LoadingOverlay: b.a,
                TradeConfirmModal: x.a,
                OrderConfirmModal: h.a,
                DonateModal: v.a
            },
            data: function() {
                return {}
            },
            methods: t()({}, d.i(n.b)({
                closeModal: "components/CLOSE_MODAL"
            }), {
                close: function(e) {
                    e.target != this.$refs.modal_loader && e.target != this.$refs.modal_container || this.closeModal()
                }
            }),
            computed: t()({}, d.i(n.a)({
                modalLoader: "components/modal_loader"
            })),
            mounted: function() {}
        }
    },
    383: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3);
        d(9);
        a.default = {
            name: "Navbar",
            data: function() {
                return {
                    token: "",
                    tokenSelectActive: !1
                }
            },
            methods: t()({}, d.i(n.b)({
                updateTokenFilter: "tokens/UPDATE_TOKEN_FILTER",
                updateCurrentToken: "tokens/UPDATE_CURRENT_TOKEN",
                openModal: "components/OPEN_MODAL",
                closeModal: "components/CLOSE_MODAL",
                showAllLoading: "components/SHOW_ALL_LOADING"
            }), d.i(n.c)({
                initCurrentMarket: "markets/init_current_market"
            }), {
                openDonateModal: function() {
                    this.openModal("DonateModal")
                },
                onFilterChange: function(e) {
                    this.updateTokenFilter(e.target.value)
                },
                onTokenSelect: function(e) {
                    this.showAllLoading(),
                    this.updateCurrentToken(e),
                    this.initMarket()
                },
                initMarket: function() {
                    var e = this
                      , a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.initCurrentMarket().then(function(a) {
                        e.closeModal()
                    }, function(d) {
                        a > 6 ? a = 0 : a++,
                        setTimeout(function() {
                            e.initMarket(a)
                        }, 1e3 * a)
                    })
                }
            }),
            computed: t()({}, d.i(n.a)({
                navbar: "components/navbar",
                tokens: "tokens/filtered_tokens",
                current_token: "tokens/current_token",
                token_filter: "tokens/token_filter",
                trades: "trades/current_token_trades",
                address: "users/address"
            })),
            mounted: function() {}
        }
    },
    384: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(0)
          , s = d.n(r);
        a.default = {
            name: "OpenOrderList",
            props: {
                orders: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: t()({}, d.i(n.c)({
                cancelOrder: "orders/cancel_order"
            }), d.i(n.b)({
                toast: "components/OPEN_TOAST"
            }), {
                priceFormat: function(e) {
                    return parseFloat(e).toFixed(10)
                },
                timeFormat: function(e) {
                    var a = new Date(e);
                    return s()(a).fromNow()
                },
                side: function(e) {
                    return "0x0000000000000000000000000000000000000000" === e.tokenGet ? "sell" : "buy"
                },
                cancel: function(e) {
                    var a = this
                      , d = {
                        tokenGet: e.tokenGet,
                        amountGet: e.amountGet,
                        tokenGive: e.tokenGive,
                        amountGive: e.amountGive,
                        expires: e.expires,
                        nonce: e.nonce,
                        v: e.v,
                        r: e.r,
                        s: e.s
                    };
                    this.cancelOrder(d).then(function(e) {
                        log("results: ", e),
                        a.toast("Successfully Created Transaction")
                    }, function(e) {
                        a.toast("Error Creating Transaction"),
                        log("error: ", e)
                    })
                }
            })
        }
    },
    385: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(18)
          , s = d.n(r);
        a.default = {
            name: "OrderBook",
            components: {
                Overlay: s.a
            },
            data: function() {
                return {
                    orders: [],
                    dateFormatter: new Intl.DateTimeFormat("en-US",{
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !1
                    }),
                    agg: .01,
                    limit: 30
                }
            },
            props: {
                buys: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                sells: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: t()({}, d.i(n.b)({
                updateTradeOrder: "trades/UPDATE_TRADE_ORDER",
                openModal: "components/OPEN_MODAL"
            }), {
                priceFormat: function(e) {
                    return parseFloat(e).toFixed(10)
                },
                timeFormat: function(e) {
                    var a = new Date(e);
                    return this.dateFormatter.format(a)
                },
                onOrderSelected: function(e) {
                    this.updateTradeOrder(e),
                    this.openModal("TradeConfirmModal")
                },
                aggregate: function(e) {},
                volumePercentStyle: function(e, a) {
                    var d = e.amount * e.price
                      , c = Math.ceil(d / this.maxAmount * 100)
                      , t = "rgba(132,247,102,.6) ";
                    return "sell" == a && (t = "rgba(255,105,57,.55) "),
                    "background: linear-gradient(to right," + t + c + "%, rgba(0, 0, 0, 0)" + c + "%)"
                }
            }),
            computed: t()({}, d.i(n.a)({
                orderBook: "components/order_book"
            }), {
                agg_buys: function() {
                    return this.buys.slice(0, this.limit)
                },
                agg_sells: function() {
                    return this.sells.slice(0, this.limit).sort(function(e, a) {
                        return e.price > a.price ? -1 : e.price < a.price ? 1 : 0
                    })
                },
                maxAmount: function() {
                    var e = 0;
                    return this.agg_sells.forEach(function(a) {
                        a.amount * a.price > e && (e = a.amount * a.price)
                    }),
                    this.agg_buys.forEach(function(a) {
                        a.amount * a.price > e && (e = a.amount * a.price)
                    }),
                    e
                }
            }),
            mounted: function() {}
        }
    },
    386: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = (d(9),
        d(3));
        a.default = {
            name: "OrderForm",
            data: function() {
                return {}
            },
            props: {
                token: {
                    default: null
                }
            },
            methods: t()({}, d.i(n.b)({
                openModal: "components/OPEN_MODAL",
                updateOrderForm: "orders/UPDATE_ORDER_FORM"
            }), d.i(n.c)({
                placeOrder: "orders/place_order"
            }), {
                alertUser: function() {
                    this.orderForm.trade_order || alert("Pick an order from the Order Book shown in the AmisDAX UI to trade with")
                },
                submitOrder: function() {
                    "y" == window.location.hostname.charAt(0) && "o" == window.location.hostname.charAt(4) && this.validOrder && this.openModal("OrderConfirmModal")
                }
            }),
            computed: t()({}, d.i(n.a)({
                orderForm: "orders/order_form"
            }), {
                validOrder: function() {
                    return !(parseFloat(this.orderForm.price) <= 0) && (!(parseFloat(this.orderForm.volume) <= 0) && (!(parseInt(this.orderForm.expires) <= 0) && ("buy" == this.orderForm.order_type || "sell" == this.orderForm.order_type)))
                },
                total: function() {
                    return (this.orderForm.price * this.orderForm.volume).toFixed(5)
                }
            }),
            mounted: function() {}
        }
    },
    387: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(0)
          , s = (d.n(r),
        d(18))
          , i = d.n(s)
          , f = d(823)
          , m = d.n(f)
          , o = d(827)
          , l = d.n(o);
        a.default = {
            name: "OrderHistory",
            components: {
                Overlay: i.a,
                OpenOrderList: m.a,
                RecentTradesList: l.a
            },
            data: function() {
                return {
                    openOrders: !1
                }
            },
            props: {
                open_buys: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                open_sells: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                trades: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: t()({}, d.i(n.b)({
                updateOrderForm: "orders/UPDATE_ORDER_FORM"
            })),
            computed: t()({}, d.i(n.a)({
                orderHistory: "components/order_history"
            }), {
                orders: function() {
                    return this.openOrders ? this.open_buys.concat(this.open_sells).sort(function(e, a) {
                        return e.date > a.date ? 1 : e.date > a.date ? -1 : 0
                    }) : this.filled_buys.concat(this.filled_sells).sort(function(e, a) {
                        return e.date > a.date ? -1 : e.date > a.date ? 1 : 0
                    })
                }
            }),
            mounted: function() {}
        }
    },
    388: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.default = {
            name: "Overlay",
            props: {
                visible: {
                    default: !1
                }
            },
            mounted: function() {}
        }
    },
    389: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = (d(3),
        d(0))
          , t = d.n(c);
        a.default = {
            name: "RecentTradesList",
            props: {
                trades: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: {
                priceFormat: function(e) {
                    return parseFloat(e).toFixed(10)
                },
                timeFormat: function(e) {
                    var a = new Date(e);
                    return t()(a).fromNow()
                }
            }
        }
    },
    390: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3);
        a.default = {
            name: "Toast",
            computed: t()({}, d.i(n.a)({
                toast: "components/toast"
            }))
        }
    },
    391: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(18)
          , s = d.n(r);
        a.default = {
            name: "TradeHistory",
            components: {
                Overlay: s.a
            },
            props: {
                trades: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            methods: {
                goToTx: function(e) {
                    window.open("https://etherscan.io/tx/" + e)
                },
                tradeStyle: function(e) {
                    var a = e.amount * e.price
                      , d = Math.ceil(a / this.maxAmount * 100)
                      , c = "rgba(132,247,102,.6) ";
                    return "sell" == e.side && (c = "rgba(255,105,57,.55) "),
                    "background: linear-gradient(to right," + c + d + "%, rgba(0, 0, 0, 0)" + d + "%)"
                }
            },
            computed: t()({}, d.i(n.a)({
                tradeHistory: "components/trade_history"
            }), {
                maxAmount: function() {
                    var e = 0;
                    return this.trades.forEach(function(a) {
                        a.amount * a.price > e && (e = a.amount * a.price)
                    }),
                    e
                }
            }),
            mounted: function() {}
        }
    },
    392: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(81)
          , t = d(0);
        d.n(t);
        a.default = {
            name: "Depth",
            props: {
                buys: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                sells: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                agg: {
                    type: Number,
                    default: 50
                }
            },
            watch: {
                buys: {
                    handler: function(e, a) {
                        var d = this;
                        this.buys.length && this.svg && setTimeout(function() {
                            d.draw(d.formattedBuys, d.formattedSells)
                        }, 100)
                    },
                    immediate: !0,
                    deep: !0
                },
                sells: {
                    handler: function(e, a) {
                        var d = this;
                        this.sells.length && this.svg && setTimeout(function() {
                            d.draw(d.formattedBuys, d.formattedSells)
                        }, 100)
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                initChart: function() {
                    this.margin = {
                        top: 0,
                        right: -1,
                        bottom: -1,
                        left: -1
                    },
                    this.width = this.$refs.depth_chart_container.clientWidth - this.margin.left - this.margin.right,
                    this.height = this.$refs.depth_chart_container.clientHeight - this.margin.top - this.margin.bottom,
                    this.svg = c.b("#depth-chart-container").append("svg:svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom),
                    this.g = this.svg.append("svg:g").attr("id", "depth-chart-group").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
                },
                draw: function(e, a) {
                    var d = e.concat(a);
                    c.b("#depth-chart-group").selectAll("*").remove();
                    var t = c.c().exponent(2).rangeRound([0, this.width])
                      , n = c.c().exponent(2).rangeRound([this.height, 0])
                      , r = c.d().curve(c.e).x(function(e) {
                        return t(e.price)
                    }).y1(function(e) {
                        return n(e.cum_volume)
                    })
                      , s = c.d().curve(c.e).x(function(e) {
                        return t(e.price)
                    }).y1(function(e) {
                        return n(e.cum_volume)
                    });
                    t.domain(c.f(d, function(e) {
                        return e.price
                    })),
                    n.domain([0, c.g(d, function(e) {
                        return e.cum_volume
                    })]),
                    r.y0(n(0)),
                    s.y0(n(0)),
                    this.g.append("g").attr("class", "grid").attr("transform", "translate(0," + this.height + ")").call(c.h(t).ticks(30).tickSize(-this.height).tickFormat("")),
                    this.g.append("g").attr("class", "grid").call(c.i(n).ticks(20).tickSize(-this.width).tickFormat("")),
                    this.g.append("linearGradient").attr("id", "buy-area-gradient").attr("gradientUnits", "userSpaceOnUse").attr("x1", 0).attr("y1", 0).attr("x2", n(d.length / 4)).attr("y2", 0).selectAll("stop").data([{
                        offset: "0%",
                        color: "rgba(0, 0, 0, .6)"
                    }, {
                        offset: "50%",
                        color: "rgba(132, 247, 102, .6)"
                    }, {
                        offset: "100%",
                        color: "rgba(132, 247, 102, .6)"
                    }]).enter().append("stop").attr("offset", function(e) {
                        return e.offset
                    }).attr("stop-color", function(e) {
                        return e.color
                    }),
                    this.g.append("linearGradient").attr("id", "sell-area-gradient").attr("gradientUnits", "userSpaceOnUse").attr("x1", 0).attr("y1", 0).attr("x2", this.width).attr("y2", 0).selectAll("stop").data([{
                        offset: "0%",
                        color: "rgba(255,0,0,0.6)"
                    }, {
                        offset: "50%",
                        color: "rgba(255,0,0,0.6)"
                    }, {
                        offset: "100%",
                        color: "rgba(30, 43, 52, .7)"
                    }]).enter().append("stop").attr("offset", function(e) {
                        return e.offset
                    }).attr("stop-color", function(e) {
                        return e.color
                    }),
                    this.g.append("path").datum(e).attr("class", "buy-area").attr("d", r),
                    this.g.append("path").datum(a).attr("class", "sell-area").attr("d", s),
                    this.g.append("g").attr("class", "axis").call(c.h(t).ticks(5)),
                    this.g.append("g").attr("transform", "translate(" + this.width + ", 0)").attr("class", "axis").call(c.j(n).ticks(15))
                }
            },
            computed: {
                sortedBuys: function() {
                    return this.buys.sort(function(e, a) {
                        return e.price > a.price ? -1 : e.price < a.price ? 1 : 0
                    })
                },
                filteredBuys: function() {
                    return this.sortedBuys.slice(0, this.maxAggBuyIndex)
                },
                formattedBuys: function() {
                    var e = 0
                      , a = 0;
                    return this.filteredBuys.map(function(d) {
                        return e += d.volume * d.price,
                        a += d.volume,
                        {
                            type: "buy",
                            volume: d.volume,
                            price: d.price,
                            total: d.volume * d.price,
                            cum_worth: e,
                            cum_volume: a
                        }
                    })
                },
                sortedSells: function() {
                    return this.sells.sort(function(e, a) {
                        return e.price > a.price ? 1 : e.price < a.price ? -1 : 0
                    })
                },
                filteredSells: function() {
                    return this.sortedSells.slice(0, this.maxAggSellIndex)
                },
                formattedSells: function() {
                    var e = 0
                      , a = 0;
                    return this.filteredSells.map(function(d) {
                        return e += d.volume * d.price,
                        a += d.volume,
                        {
                            type: "sell",
                            volume: d.volume,
                            price: d.price,
                            total: d.volume * d.price,
                            cum_worth: e,
                            cum_volume: a
                        }
                    })
                },
                averageBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return e + a.price
                    }, 0) / this.buys.length
                },
                minBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return a.price < e && (e = a.price),
                        e
                    }, 1 / 0)
                },
                maxBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return a.price > e && (e = a.price),
                        e
                    }, 0)
                },
                maxAggBuyIndex: function() {
                    return parseInt(this.buys.length * (this.agg / 100))
                },
                minAggBuyPrice: function() {
                    var e = parseInt(this.buys.length * (this.agg / 100));
                    return this.buys[e].price
                },
                maxAggSellIndex: function() {
                    return parseInt(this.sells.length * (this.agg / 100))
                },
                minSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return a.price < e && (e = a.price),
                        e
                    }, 1 / 0)
                },
                maxSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return a.price > e && (e = a.price),
                        e
                    }, 0)
                },
                averageSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return e + a.price
                    }, 0) / this.sells.length
                }
            },
            mounted: function() {
                this.initChart()
            }
        }
    },
    393: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(81)
          , r = d(0)
          , s = (d.n(r),
        d(18))
          , i = d.n(s)
          , f = d(3);
        a.default = {
            name: "DepthChart",
            components: {
                Overlay: i.a
            },
            data: function() {
                return {
                    agg: 10
                }
            },
            props: {
                buys: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                sells: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            watch: {
                buys: {
                    handler: function(e, a) {
                        var d = this;
                        this.buys.length && this.svg && setTimeout(function() {
                            d.draw(d.formattedBuys, d.formattedSells)
                        }, 100)
                    },
                    immediate: !0,
                    deep: !0
                },
                sells: {
                    handler: function(e, a) {
                        var d = this;
                        this.sells.length && this.svg && setTimeout(function() {
                            d.draw(d.formattedBuys, d.formattedSells)
                        }, 100)
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                initChart: function() {
                    this.margin = {
                        top: 20,
                        right: 40,
                        bottom: 50,
                        left: -1
                    },
                    this.width = this.$refs.depth_chart_container.clientWidth - this.margin.left - this.margin.right,
                    this.height = this.$refs.depth_chart_container.clientHeight - this.margin.top - this.margin.bottom,
                    this.svg = n.b("#depth-chart-container").append("svg:svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom),
                    this.g = this.svg.append("svg:g").attr("id", "depth-chart-group").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
                },
                draw: function(e, a) {
                    var d = e.concat(a);
                    n.b("#depth-chart-group").selectAll("*").remove();
                    var c = n.m().rangeRound([0, this.width])
                      , t = n.m().rangeRound([this.height, 0])
                      , r = n.d().curve(n.e).x(function(e) {
                        return c(e.cum_volume)
                    }).y1(function(e) {
                        return t(e.price)
                    })
                      , s = n.d().curve(n.e).x(function(e) {
                        return c(e.cum_volume)
                    }).y1(function(e) {
                        return t(e.price)
                    });
                    c.domain([0, n.g(d, function(e) {
                        return e.cum_volume
                    })]),
                    t.domain(n.f(d, function(e) {
                        return e.price
                    })),
                    r.y0(t(0)),
                    s.y0(t(1)),
                    this.g.append("g").attr("class", "grid").attr("transform", "translate(0," + this.height + ")").call(n.h(c).ticks(30).tickSize(-this.height).tickFormat("")),
                    this.g.append("g").attr("class", "grid").call(n.i(t).ticks(20).tickSize(-this.width).tickFormat("")),
                    this.g.append("linearGradient").attr("id", "buy-area-gradient").attr("gradientUnits", "userSpaceOnUse").attr("x1", 0).attr("y1", 0).attr("x2", t(d.length / 4)).attr("y2", 0).selectAll("stop").data([{
                        offset: "0%",
                        color: "rgba(0, 0, 0, .6)"
                    }, {
                        offset: "50%",
                        color: "rgba(132, 247, 102, .6)"
                    }, {
                        offset: "100%",
                        color: "rgba(132, 247, 102, .6)"
                    }]).enter().append("stop").attr("offset", function(e) {
                        return e.offset
                    }).attr("stop-color", function(e) {
                        return e.color
                    }),
                    this.g.append("linearGradient").attr("id", "sell-area-gradient").attr("gradientUnits", "userSpaceOnUse").attr("x1", 0).attr("y1", 0).attr("x2", this.width).attr("y2", 0).selectAll("stop").data([{
                        offset: "0%",
                        color: "rgba(255,0,0,0.6)"
                    }, {
                        offset: "50%",
                        color: "rgba(255,0,0,0.6)"
                    }, {
                        offset: "100%",
                        color: "rgba(30, 43, 52, .7)"
                    }]).enter().append("stop").attr("offset", function(e) {
                        return e.offset
                    }).attr("stop-color", function(e) {
                        return e.color
                    }),
                    this.g.append("path").datum(e).attr("class", "buy-area").attr("d", r),
                    this.g.append("path").datum(a).attr("class", "sell-area").attr("d", s),
                    this.g.append("g").attr("class", "axis").call(n.h(c).ticks(5)),
                    this.g.append("g").attr("transform", "translate(" + this.width + ", 0)").attr("class", "axis").call(n.j(t).ticks(15))
                }
            },
            computed: t()({
                sortedBuys: function() {
                    return this.buys.sort(function(e, a) {
                        return e.price > a.price ? -1 : e.price < a.price ? 1 : 0
                    })
                },
                filteredBuys: function() {
                    return this.sortedBuys.slice(0, this.maxAggBuyIndex)
                },
                formattedBuys: function() {
                    var e = 0
                      , a = 0;
                    return this.filteredBuys.map(function(d) {
                        return e += d.volume * d.price,
                        a += d.volume,
                        {
                            type: "buy",
                            volume: d.volume,
                            price: d.price,
                            total: d.volume * d.price,
                            cum_worth: e,
                            cum_volume: a
                        }
                    })
                },
                sortedSells: function() {
                    return this.sells.sort(function(e, a) {
                        return e.price > a.price ? 1 : e.price < a.price ? -1 : 0
                    })
                },
                filteredSells: function() {
                    return this.sortedSells.slice(0, this.maxAggSellIndex)
                },
                formattedSells: function() {
                    var e = 0
                      , a = 0;
                    return this.filteredSells.map(function(d) {
                        return e += d.volume * d.price,
                        a += d.volume,
                        {
                            type: "sell",
                            volume: d.volume,
                            price: d.price,
                            total: d.volume * d.price,
                            cum_worth: e,
                            cum_volume: a
                        }
                    })
                },
                averageBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return e + a.price
                    }, 0) / this.buys.length
                },
                minBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return a.price < e && (e = a.price),
                        e
                    }, 1 / 0)
                },
                maxBuyPrice: function() {
                    return this.buys.reduce(function(e, a) {
                        return a.price > e && (e = a.price),
                        e
                    }, 0)
                },
                maxAggBuyIndex: function() {
                    return parseInt(this.buys.length * (this.agg / 100))
                },
                minAggBuyPrice: function() {
                    var e = parseInt(this.buys.length * (this.agg / 100));
                    return this.buys[e].price
                },
                maxAggSellIndex: function() {
                    return parseInt(this.sells.length * (this.agg / 100))
                },
                minSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return a.price < e && (e = a.price),
                        e
                    }, 1 / 0)
                },
                maxSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return a.price > e && (e = a.price),
                        e
                    }, 0)
                },
                averageSellPrice: function() {
                    return this.sells.reduce(function(e, a) {
                        return e + a.price
                    }, 0) / this.sells.length
                }
            }, d.i(f.a)({
                depthChart: "components/depth_chart"
            })),
            mounted: function() {
                this.initChart()
            }
        }
    },
    394: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(81)
          , r = d(0)
          , s = (d.n(r),
        d(18))
          , i = d.n(s)
          , f = d(3);
        a.default = {
            name: "PriceChart",
            components: {
                Overlay: i.a
            },
            data: function() {
                return {}
            },
            props: {
                trades: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            watch: {
                trades: {
                    handler: function(e, a) {
                        this.trades.length && this.svg && this.draw(this.formatData(this.trades))
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                initChart: function() {
                    this.margin = {
                        top: 10,
                        right: 20,
                        bottom: 70,
                        left: 50
                    },
                    this.width = this.$refs.price_chart_container.clientWidth - this.margin.left - this.margin.right,
                    this.height = this.$refs.price_chart_container.clientHeight - this.margin.top - this.margin.bottom,
                    this.svg = n.b("#price-chart-container").append("svg:svg").attr("width", this.width + this.margin.left + this.margin.right).attr("height", this.height + this.margin.top + this.margin.bottom),
                    this.g = this.svg.append("svg:g").attr("id", "price-chart-group").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")")
                },
                draw: function(e) {
                    var a = this;
                    n.b("#price-chart-group").selectAll("*").remove(),
                    this.zoom = n.k().scaleExtent([1, 40]).translateExtent([[-100, -100], [this.width + 90, this.height + 100]]).on("zoom", this.zoomed),
                    this.x = n.l().range([0, this.width]),
                    this.y = n.m().range([this.height, 0]),
                    this.priceLine = n.n().curve(n.e).x(function(e) {
                        return a.x(e.date)
                    }).y(function(e) {
                        return a.y(e.price)
                    }),
                    this.x.domain(n.f(e, function(e) {
                        return e.date
                    })),
                    this.y.domain([0, n.g(e, function(e) {
                        return e.price
                    })]),
                    this.xAxis = n.h(this.x),
                    this.yAxis = n.i(this.y),
                    this.gridXAxis = n.h(this.x),
                    this.gridYAxis = n.i(this.y),
                    this.priceLinePath = this.g.append("path").data([e]).attr("class", "line").attr("d", this.priceLine),
                    this.gX = this.g.append("g").attr("transform", "translate(0," + this.height + ")").call(this.xAxis),
                    this.gY = this.g.append("g").call(this.yAxis),
                    this.gridX = this.g.append("g").attr("class", "grid").attr("transform", "translate(0," + this.height + ")").call(this.gridXAxis.ticks(5).tickSize(-this.height).tickFormat("")),
                    this.gridY = this.g.append("g").attr("class", "grid").call(this.gridYAxis.ticks(15).tickSize(-this.width).tickFormat("")),
                    this.view = this.g.append("rect").attr("class", "view").attr("x", .5).attr("y", .5).attr("width", this.width - 1).attr("height", this.height - 1),
                    this.g.call(this.zoom)
                },
                zoomed: function() {
                    this.view.attr("transform", n.o.transform),
                    this.gX.call(this.xAxis.scale(n.o.transform.rescaleX(this.x))),
                    this.gY.call(this.yAxis.scale(n.o.transform.rescaleY(this.y))),
                    this.gridX.call(this.gridXAxis.scale(n.o.transform.rescaleX(this.x))),
                    this.gridY.call(this.gridYAxis.scale(n.o.transform.rescaleY(this.y)));
                    var e = n.o.transform
                      , a = e.rescaleX(this.x)
                      , d = e.rescaleY(this.y);
                    this.g.select(".line").attr("d", this.priceLine.x(function(e) {
                        return a(e.date)
                    })),
                    this.g.select(".line").attr("d", this.priceLine.y(function(e) {
                        return d(e.price)
                    }))
                },
                reset: function() {
                    this.g.transition().duration(750).call(this.zoom.transform, n.p)
                },
                formatData: function(e) {
                    var a = e[e.length - 1];
                    return e.filter(function(e) {
                        return !(10 * e.price < a.price || e.price / 10 > a.price)
                    }).map(function(e) {
                        return {
                            volume: e.amount,
                            price: e.price,
                            date: e.date,
                            total: e.amount * e.price
                        }
                    })
                }
            },
            computed: t()({}, d.i(f.a)({
                priceChart: "components/price_chart"
            })),
            mounted: function() {
                this.initChart()
            }
        }
    },
    395: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(9)
          , s = d(18)
          , i = d.n(s);
        a.default = {
            name: "DepositModal",
            components: {
                Overlay: i.a
            },
            data: function() {
                return {
                    eth_amount: 0,
                    token_amount: 0,
                    deposited: !1,
                    txn: null,
                    loading: !1,
                    error: !1,
                    error_message: null
                }
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL"
            }), {
                depositEth: function() {
                    var e = this;
                    this.loading = !0,
                    r.a.EtherDelta.depositEth(this.eth_amount).then(function(a) {
                        e.loading = !1,
                        e.deposited = !0,
                        e.txn = a,
                        log("result: ", a)
                    }).catch(function(a) {
                        e.loading = !1,
                        e.error = !0,
                        e.error_message = " Transaction canceled",
                        log("error: ", a)
                    })
                },
                depositToken: function() {
                    var e = this;
                    this.loading = !0,
                    r.a.EtherDelta.approve(this.token.addr, this.token_amount).then(function(a) {
                        log("approve result: ", a),
                        r.a.EtherDelta.depositToken(e.token.addr, e.token_amount).then(function(a) {
                            e.loading = !1,
                            e.deposited = !0,
                            e.txn = a,
                            log("depositToken result: ", a)
                        }).catch(function(a) {
                            e.loading = !1,
                            e.error = !0,
                            e.error_message = " Transaction canceled",
                            log("error: ", a)
                        })
                    }).catch(function(a) {
                        e.loading = !1,
                        e.error = !0,
                        e.error_message = " Transaction canceled",
                        log("error: ", a)
                    })
                }
            }),
            computed: t()({}, d.i(n.a)({
                token: "tokens/current_token",
                wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet"
            })),
            mounted: function() {}
        }
    },
    396: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(9)
          , s = d(18)
          , i = d.n(s);
        a.default = {
            name: "DonateModal",
            components: {
                Overlay: i.a
            },
            data: function() {
                return {
                    eth_amount: 0,
                    token_amount: 0,
                    donated: !1,
                    loading: !1,
                    error: !1,
                    error_message: null
                }
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL"
            }), {
                donateEth: function() {
                    var e = this;
                    this.loading = !0,
                    r.a.EtherDelta.donateEth(this.eth_amount).then(function(a) {
                        e.loading = !1,
                        e.donated = !0,
                        log("result: ", a)
                    }).catch(function(a) {
                        e.error = !0,
                        e.error_message = a.message,
                        e.loading = !1,
                        log("error: ", a)
                    })
                }
            }),
            computed: t()({}, d.i(n.a)({
                token: "tokens/current_token",
                wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet"
            })),
            mounted: function() {}
        }
    },
    397: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(9)
          , s = d(18)
          , i = d.n(s);
        a.default = {
            name: "OrderConfirmModal",
            data: function() {
                return {
                    response: !1,
                    order_message: "Order Successfully Placed"
                }
            },
            components: {
                Overlay: i.a
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL",
                updateOverlay: "components/UPDATE_ORDER_CONFIRM"
            }), d.i(n.c)({
                placeOrder: "orders/place_order"
            }), {
                submitOrder: function() {
                    var e = this;
                    this.updateOverlay({
                        loading: !0
                    });
                    var a = void 0
                      , d = void 0
                      , c = void 0
                      , t = void 0;
                    "buy" == this.orderForm.order_type ? (a = "0x0000000000000000000000000000000000000000",
                    d = this.token.addr,
                    c = r.a.EtherDelta.toWei(this.orderForm.volume * this.orderForm.price, 18),
                    t = r.a.EtherDelta.toWei(this.orderForm.volume, this.token.decimals)) : (a = this.token.addr,
                    d = "0x0000000000000000000000000000000000000000",
                    c = r.a.EtherDelta.toWei(this.orderForm.volume, this.token.decimals),
                    t = r.a.EtherDelta.toWei(this.orderForm.volume * this.orderForm.price, 18));
                    var n = {
                        tokenGet: d,
                        amountGet: t,
                        tokenGive: a,
                        amountGive: c,
                        expires: this.orderForm.expires,
                        nonce: parseInt(1e9 * Math.random())
                    };
                    this.placeOrder(n).then(function(a) {
                        e.response = !0,
                        e.order_message = "Order Successfully Placed!",
                        e.updateOverlay({
                            loading: !1
                        })
                    }, function(a) {
                        e.response = !0,
                        e.order_message = "Error Placing Order: " + a,
                        e.updateOverlay({
                            loading: !1
                        })
                    })
                }
            }),
            computed: t()({}, d.i(n.a)({
                orderForm: "orders/order_form",
                token: "tokens/current_token",
                wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet",
                orderConfirm: "components/order_confirm"
            }), {
                fee: function() {
                    return "buy" === this.orderForm.order_type ? parseFloat(this.orderForm.volume) * parseFloat(this.orderForm.price) * .003 : .003 * parseFloat(this.orderForm.volume)
                }
            }),
            mounted: function() {}
        }
    },
    398: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3);
        a.default = {
            name: "OrderModal",
            data: function() {
                return {}
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL"
            }), {
                placeOrder: function() {
                    log("PLACE ORDER")
                }
            }),
            computed: t()({}, d.i(n.a)({
                current_market: "markets/current_market",
                current_wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet",
                orderForm: "orders/order_form"
            }), {
                total: function() {
                    return (this.orderForm.price * this.orderForm.volume).toFixed(10)
                }
            }),
            mounted: function() {}
        }
    },
    399: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = (d(9),
        d(18))
          , s = d.n(r);
        a.default = {
            name: "TradeConfirmModal",
            components: {
                Overlay: s.a
            },
            data: function() {
                return {
                    amount: 0,
                    trade_successful: null,
                    trade_message: ""
                }
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL",
                updateOverlay: "components/UPDATE_TRADE_CONFIRM"
            }), d.i(n.c)({
                trade: "trades/trade"
            }), {
                maxAmount: function() {
                    var e = this.tradeOrder.ethAvailableVolume;
                    e > parseFloat(this.ed_wallet.current_token_balance) && (log("TODO"),
                    e = this.ed_wallet.current_token_balance),
                    log(e),
                    this.amount = e
                },
                submitTrade: function() {
                    var e = this;
                    if (this.validTrade) {
                        this.updateOverlay({
                            loading: !0
                        });
                        var a = this.amount;
                        "buy" === this.tradeType && (a = this.amount * this.tradeOrder.price);
                        var d = {
                            tokenGet: this.tradeOrder.tokenGet,
                            amountGet: this.tradeOrder.amountGet,
                            tokenGive: this.tradeOrder.tokenGive,
                            amountGive: this.tradeOrder.amountGive,
                            expires: this.tradeOrder.expires,
                            nonce: this.tradeOrder.nonce,
                            user: this.tradeOrder.user,
                            v: this.tradeOrder.v,
                            r: this.tradeOrder.r,
                            s: this.tradeOrder.s,
                            amount: a
                        };
                        this.trade(d).then(function(a) {
                            e.updateOverlay({
                                loading: !1
                            }),
                            e.trade_message = a,
                            e.trade_successful = !0,
                            e.updateOverlay({
                                loading: !1
                            }),
                            log("results: ", a)
                        }, function(a) {
                            log("error: ", a),
                            e.trade_successful = !1,
                            a.message ? e.trade_message = a.message : e.trade_message = a,
                            e.updateOverlay({
                                loading: !1
                            })
                        })
                    }
                }
            }),
            computed: t()({}, d.i(n.a)({
                token: "tokens/current_token",
                tradeOrder: "trades/trade_order",
                wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet",
                tradeConfirm: "components/trade_confirm"
            }), {
                maxVolume: function() {
                    var e = this.ed_wallet.current_token_balance;
                    return e > this.tradeOrder.ethAvailableVolume && (e = this.tradeOrder.ethAvailableVolume),
                    e
                },
                validTrade: function() {
                    return !(parseFloat(this.tradeOrder.price) <= 0) && (!(parseFloat(this.amount) <= 0) && !(parseInt(this.tradeOrder.expires) <= 0))
                },
                total: function() {
                    return 0 == this.amount || 0 == this.tradeOrder.price ? 0 : this.tradeOrder.price * this.amount
                },
                fee: function() {
                    return 0 == this.amount || 0 == this.tradeOrder.price ? 0 : "buy" === this.tradeType ? parseFloat(this.amount) * parseFloat(this.tradeOrder.price) * .003 : .003 * parseFloat(this.amount)
                },
                tradeType: function() {
                    return "0x0000000000000000000000000000000000000000" === this.tradeOrder.tokenGet ? "buy" : "sell"
                }
            }),
            mounted: function() {}
        }
    },
    400: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = d(9)
          , s = d(18)
          , i = d.n(s);
        a.default = {
            name: "WithdrawModal",
            components: {
                Overlay: i.a
            },
            data: function() {
                return {
                    eth_amount: 0,
                    token_amount: 0,
                    withdrew: !1,
                    txn: null,
                    loading: !1,
                    error: !1,
                    error_message: null
                }
            },
            methods: t()({}, d.i(n.b)({
                close: "components/CLOSE_MODAL"
            }), {
                withdrawEth: function() {
                    var e = this;
                    this.loading = !0,
                    r.a.EtherDelta.withdrawEth(this.eth_amount).then(function(a) {
                        e.loading = !1,
                        e.withdrew = !0,
                        e.txn = a,
                        log("result: ", a)
                    }).catch(function(a) {
                        e.loading = !1,
                        e.error = !0,
                        e.error_message = a.message,
                        log("error: ", a)
                    })
                },
                withdrawToken: function() {
                    var e = this;
                    this.true = !1,
                    r.a.EtherDelta.withdrawToken(this.token.addr, this.token_amount).then(function(a) {
                        e.loading = !1,
                        e.withdrew = !0,
                        e.txn = a,
                        log("withdrawToken result: ", a)
                    }).catch(function(a) {
                        e.loading = !1,
                        e.error = !0,
                        e.error_message = a.message,
                        log("error: ", a)
                    })
                }
            }),
            computed: t()({}, d.i(n.a)({
                token: "tokens/current_token",
                current_wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet"
            })),
            mounted: function() {}
        }
    },
    401: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(819)
          , r = d.n(n)
          , s = d(829)
          , i = d.n(s)
          , f = d(826)
          , m = d.n(f)
          , o = d(824)
          , l = d.n(o)
          , b = d(825)
          , u = d.n(b)
          , x = d(831)
          , p = d.n(x)
          , h = d(832)
          , _ = d.n(h)
          , v = d(3)
          , C = d(9);
        a.default = {
            name: "ExchangePage",
            components: {
                Balance: r.a,
                OrderForm: u.a,
                OrderHistory: m.a,
                OrderBook: l.a,
                DepthChart: p.a,
                PriceChart: _.a,
                TradeHistory: i.a
            },
            computed: t()({}, d.i(v.a)({
                trades: "trades/current_token_trades",
                buy_orders: "orders/buy_orders",
                sell_orders: "orders/sell_orders",
                current_wallet: "users/current_wallet",
                ed_wallet: "users/ed_wallet",
                recent_trades: "users/trades",
                user_sell_orders: "users/sell_orders",
                user_buy_orders: "users/buy_orders",
                tokens: "tokens/tokens",
                token: "tokens/current_token"
            })),
            methods: t()({}, d.i(v.c)({
                watchOrders: "orders/watch_orders",
                watchTrades: "trades/watch_trades",
                updateCurrentWallet: "users/update_current_wallet",
                initCurrentMarket: "markets/init_current_market",
                watchCurrentMarket: "markets/watch_current_market",
                updateEdWallet: "users/update_ed_wallet"
            }), d.i(v.b)({
                openModal: "components/OPEN_MODAL",
                closeModal: "components/CLOSE_MODAL",
                updateCurrentToken: "tokens/UPDATE_CURRENT_TOKEN",
                updateTokenFilter: "tokens/UPDATE_TOKEN_FILTER",
                updateCurrentAddress: "users/UPDATE_CURRENT_ADDRESS"
            }), {
                initMarket: function() {
                    var e = this
                      , a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.initCurrentMarket().then(function(e) {}, function(d) {
                        a > 12 ? a = 0 : a++,
                        setTimeout(function() {
                            e.initMarket(a)
                        }, 1e3 * a)
                    })
                },
                watchMarket: function() {
                    this.watchCurrentMarket().then(function(e) {}, function(e) {})
                },
                watchWallets: function() {
                    var e = this;
                    this.updateCurrentWallet(),
                    this.updateEdWallet(),
                    setInterval(function() {
                        e.updateCurrentWallet(),
                        e.updateEdWallet()
                    }, 1e3)
                },
                watchCurrentAddress: function() {
                    var e = this;
                    this.updateCurrentAddress(),
                    setInterval(function() {
                        e.updateCurrentAddress()
                    }, 1e3)
                }
            }),
            watch: {
                trades: function() {
                    this.trades.length && (document.title = this.token.name + " " + this.trades[0].price)
                }
            },
            created: function() {
                var e = this
                  , a = null;
                this.$route.params.token && (a = this.tokens.find(function(a) {
                    return a.name.toLowerCase() == e.$route.params.token.toLowerCase()
                })) && (this.updateCurrentToken(a),
                this.updateTokenFilter(a.name)),
                C.a.EtherDelta.initSocket().then(function() {
                    e.initMarket()
                }),
                this.watchWallets(),
                this.watchCurrentAddress()
            },
            mounted: function() {}
        }
    },
    402: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(81)
          , t = d(0)
          , n = (d.n(t),
        d(830))
          , r = d.n(n);
        a.default = {
            name: "HomePage",
            data: function() {
                return {
                    buys: [],
                    sells: []
                }
            },
            components: {
                DepthChart: r.a
            },
            methods: {
                generateOrder: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .001
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01
                      , d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                      , t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e5;
                    return {
                        price: c.a(e, a)(),
                        volume: c.a(d, t)()
                    }
                },
                randomizeOrders: function() {
                    var e = c.a(0, this.buys.length - 1)()
                      , a = c.a(0, this.sells.length - 1)()
                      , d = c.a(1, 10)()
                      , t = c.a(1, 10)()
                      , n = c.a(1, 10)()
                      , r = c.a(1, 10)();
                    for (this.buys.splice(e, d),
                    this.sells.slice(a, t); n > 0; )
                        this.buys.push(this.generateOrder(.001, .005)),
                        --n;
                    for (; r > 0; )
                        this.sells.push(this.generateOrder(.005)),
                        --r
                }
            },
            mounted: function() {
                for (var e = this, a = 100; a > 0; )
                    this.buys.push(this.generateOrder(.001, .005)),
                    this.sells.push(this.generateOrder(.005)),
                    --a;
                setInterval(function() {
                    e.randomizeOrders()
                }, 2e3)
            }
        }
    },
    403: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(5)
          , t = d.n(c)
          , n = d(3)
          , r = (d(9),
        d(370))
          , s = d.n(r)
          , i = d(371);
        d.n(i);
        a.default = {
            name: "PortfolioPage",
            components: {},
            computed: t()({}, d.i(n.a)({})),
            methods: t()({}, d.i(n.c)({}), d.i(n.b)({})),
            created: function() {},
            mounted: function() {
                log("#######################");
                var e = new Web3(web3.currentProvider)
                  , a = e.eth.accounts[0];
                log("user_addr: ", a);
                var d = (e.eth.contract(s.a).at("0x8d12a197cb00d4747a1fe03395095ce2a5cc6819"),
                e.toWei(".001", "ether"));
                log(d)
            }
        }
    },
    404: function(e, a, d) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = d(10)
          , t = d(374)
          , n = d.n(t)
          , r = d(376)
          , s = (d.n(r),
        d(372))
          , i = d(373)
          , f = d(0)
          , m = d.n(f)
          , o = d(375);
        d.i(r.sync)(i.a, s.a),
        c.a.use(o.a),
        window.log = console.log,
        window.moment = m.a,
        c.a.config.productionTip = !1,
        String.prototype.hexEncode = function() {
            var e, a, d = "";
            for (a = 0; a < this.length; a++)
                e = this.charCodeAt(a).toString(16),
                d += ("000" + e).slice(-4);
            return d
        }
        ,
        new c.a({
            el: "#app",
            router: s.a,
            store: i.a,
            template: "<App/>",
            components: {
                App: n.a
            }
        })
    },
    405: function(e, a, d) {
        "use strict";
        var c = d(839)
          , t = d.n(c)
          , n = d(841)
          , r = d.n(n)
          , s = d(840)
          , i = d.n(s);
        a.a = {
            ExchangePage: t.a,
            PortfolioPage: r.a,
            HomePage: i.a
        }
    },
    406: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(10);
        a.a = {
            get_board_page: function(e, a) {
                return new t.a(function(d, c) {
                    n.a.http.get("http://boards.4chan.org/" + e + "/" + a + ".json").then(function(e) {
                        console.log(e),
                        d(e.body)
                    }, function(e) {
                        c(e)
                    })
                }
                )
            },
            get_thread: function(e, a) {
                return new t.a(function(d, c) {
                    n.a.http.get("http://boards.4chan.org/" + e + "/thread/" + a + ".json").then(function(e) {
                        console.log(e),
                        d(e.body)
                    }, function(e) {
                        c(e)
                    })
                }
                )
            }
        }
    },
    407: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(10)
          , r = this;
        a.a = {
            fetch_currencies: function(e) {
                return new t.a(function(a, d) {
                    n.a.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=" + e).then(function(e) {
                        a(e.body)
                    }, function(e) {
                        d(e)
                    })
                }
                )
            },
            watch_currencies: function(e, a, d) {
                return setInterval(function() {
                    r.a.fetch_currencies(e).then(function(e) {
                        d(e)
                    }).catch(function(e) {
                        d(e)
                    })
                }, a)
            }
        }
    },
    408: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(10)
          , r = this;
        a.a = {
            fetch_currency_history_by_minute: function(e) {
                return "AMIS" == e && (e = "AMIS"),
                new t.a(function(a, d) {
                    n.a.http.get("https://min-api.cryptocompare.com/data/histominute?fsym=" + e + "&tsym=USD&limit=1440&aggregate=60&e=CCCAGG").then(function(e) {
                        a(e.body)
                    }, function(e) {
                        d(e)
                    })
                }
                )
            },
            watch_currency_history_by_minute: function(e, a, d) {
                return setInterval(function() {
                    r.a.fetch_currency_history_by_minute(e).then(function(e) {
                        d(e)
                    }).catch(function(e) {
                        d(e)
                    })
                }, a)
            }
        }
    },
    409: function(e, a, d) {
        "use strict";
        (function(e) {
            var c = d(25)
              , t = d.n(c)
              , n = d(419)
              , r = d.n(n)
              , s = d(420)
              , i = d.n(s)
              , f = d(870)
              , m = d.n(f)
              , o = d(814)
              , l = d.n(o)
              , b = d(424)
              , u = d.n(b)
              , x = d(370)
              , p = d.n(x)
              , h = d(371)
              , _ = d.n(h)
              , v = d(809)
              , C = d.n(v)
              , T = d(778)
              , y = (d.n(T),
            function() {
                function a() {
                    r()(this, a),
                    "undefined" != typeof web3 ? (this.w3 = new Web3(web3.currentProvider),
                    this.contractAddr = "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
                    this.contract = this.w3.eth.contract(p.a).at(this.contractAddr),
                    this.contractToken = this.w3.eth.contract(_.a)) : this.w3 = {
                        eth: {}
                    },
                    this.connectionAttempts = 0,
                    this.ed_abi = p.a,
                    this.token_abi = _.a,
                    this.dateFormatter = new Intl.DateTimeFormat("en-US",{
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: !1
                    })
                }
                return i()(a, [{
                    key: "initSocket",
                    value: function() {
                        var e = this;
                        return new t.a(function(a, d) {
                            e.socket = l.a.connect(m.a.socketServers[e.connectionAttempts], {
                                transports: ["websocket"]
                            }),
                            e.socket.on("connect", function() {
                                a(e.socket)
                            }),
                            e.socket.on("connect_failed", function() {
                                console.log("Connection Failed!!!!!!"),
                                e.connectionAttempts++,
                                e.socket = l.a.connect(m.a.socketServers[e.connectionAttempts], {
                                    transports: ["websocket"]
                                })
                            }),
                            e.socket.on("error", function(e) {
                                console.log("EtherDelta socket error: ", e)
                            }),
                            e.socket.on("disconnect", function(a) {
                                console.log("EtherDelta socket disconnect: ", a),
                                e.socket = l.a.connect(m.a.socketServer, {
                                    transports: ["websocket"]
                                })
                            })
                        }
                        )
                    }
                }, {
                    key: "getEtherDeltaBalance",
                    value: function(e, a) {
                        var d = this;
                        return new t.a(function(c, t) {
                            d.contract.balanceOf(e, a, function(e, a) {
                                e && t(e),
                                c(d.w3.fromWei(a.toNumber(), "ether"))
                            })
                        }
                        )
                    }
                }, {
                    key: "getBalance",
                    value: function(e, a) {
                        var d = this;
                        return new t.a(function(c, t) {
                            "0x0000000000000000000000000000000000000000" === e ? d.w3.eth.getBalance(a, function(e, a) {
                                e && t(e),
                                c(d.w3.fromWei(a.toNumber(), "ether"))
                            }) : d.contractToken.at(e).balanceOf(a, function(e, a) {
                                e && t(e),
                                c(d.w3.fromWei(a.toNumber(), "ether"))
                            })
                        }
                        )
                    }
                }, {
                    key: "depositEth",
                    value: function(e) {
                        var a = this;
                        e = this.w3.toWei(e, "ether");
                        var d = {
                            value: e
                        };
                        return new t.a(function(e, c) {
                            a.contract.deposit(d, function(a, d) {
                                a ? c(a) : e(d)
                            })
                        }
                        )
                    }
                }, {
                    key: "withdrawEth",
                    value: function(e) {
                        var a = this;
                        return e = this.w3.toWei(e, "ether"),
                        new t.a(function(d, c) {
                            a.contract.withdraw(e, function(e, a) {
                                e ? c(e) : d(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "approve",
                    value: function(e, a) {
                        var d = this;
                        return a = this.w3.toWei(a, "ether"),
                        new t.a(function(c, t) {
                            d.contractToken.at(e).approve(d.contractAddr, a, function(e, a) {
                                e ? t(e) : c(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "depositToken",
                    value: function(e, a) {
                        var d = this;
                        return a = this.w3.toWei(a, "ether"),
                        new t.a(function(c, t) {
                            d.contract.depositToken(e, a, function(e, a) {
                                e ? t(e) : c(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "withdrawToken",
                    value: function(e, a) {
                        var d = this;
                        return a = this.w3.toWei(a, "ether"),
                        new t.a(function(c, t) {
                            d.contract.withdrawToken(e, a, function(e, a) {
                                e ? t(e) : c(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "trade",
                    value: function(e, a, d, c, n, r, s, i, f, m, o) {
                        var l = this;
                        return o = this.w3.toWei(o, "ether"),
                        new t.a(function(t, b) {
                            l.contract.trade(e, a, d, c, n, r, s, i, f, m, o, function(e, a) {
                                e ? b(e) : t(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "toWei",
                    value: function(e, a) {
                        return new u.a(String(e)).times(new u.a(Math.pow(10, a))).floor()
                    }
                }, {
                    key: "placeOrder",
                    value: function(a, d, c, n, r, s) {
                        var i = this;
                        return new t.a(function(t, f) {
                            web3.eth.getBlockNumber(function(m, o) {
                                r = parseInt(o) + parseInt(r);
                                var l = [i.contractAddr, a, d, c, n, r, s]
                                  , b = i._pack(l, [160, 160, 256, 160, 256, 256, 256])
                                  , u = "0x" + C()(new e(b,"hex"))
                                  , x = i._prefixMessage(u);
                                i.w3.eth.sign(i.w3.eth.defaultAccount, x, function(e, m) {
                                    if (e)
                                        f(e);
                                    else {
                                        var o = m.substr(2, m.length)
                                          , l = "0x" + o.substr(0, 64)
                                          , b = "0x" + o.substr(64, 64)
                                          , u = parseInt("0x" + o.substr(128, 2))
                                          , x = {
                                            tokenGet: a,
                                            amountGet: d.toString(),
                                            tokenGive: c,
                                            amountGive: n.toString(),
                                            expires: r,
                                            nonce: s,
                                            contractAddr: i.contractAddr,
                                            user: i.w3.eth.defaultAccount,
                                            r: l,
                                            s: b,
                                            v: u
                                        };
                                        i.submitOrder(x).then(function(e) {
                                            t(e)
                                        }, function(e) {
                                            f(e)
                                        })
                                    }
                                })
                            })
                        }
                        )
                    }
                }, {
                    key: "submitOrder",
                    value: function(e) {
                        var a = this;
                        return new t.a(function(d, c) {
                            a.socket.emit("message", e),
                            a.socket.once("messageResult", function(e) {
                                Array.isArray(e) ? "Added/updated order." == e[0] && d(e) : c(e)
                            })
                        }
                        )
                    }
                }, {
                    key: "cancelOrder",
                    value: function(e, a, d, c, n, r, s, i, f) {
                        var m = this;
                        return new t.a(function(t, o) {
                            m.contract.cancelOrder(e, a, d, c, n, r, s, i, f, function(e, a) {
                                e ? o(e) : t(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "donateEth",
                    value: function(e) {
                        var a = this;
                        return new t.a(function(d, c) {
                            a.w3.eth.sendTransaction({
                                from: a.w3.eth.coinbase,
                                to: "0xef242470ac40bEBcc19394FCFd22d2573be12C4d",
                                value: a.w3.toWei(e, "ether")
                            }, function(e, a) {
                                e ? c(e) : d(a)
                            })
                        }
                        )
                    }
                }, {
                    key: "_pack",
                    value: function(e, a) {
                        for (var d = "", c = e.map(function(e) {
                            return e
                        }), t = 0; t < a.length; t += 1)
                            "string" == typeof c[t] && "0x" === c[t].substring(0, 2) ? ("0x" === c[t].substring(0, 2) && (c[t] = c[t].substring(2)),
                            d += this._zeroPad(c[t], a[t] / 4)) : "number" == typeof c[t] || c[t]instanceof u.a || !/[a-f]/.test(c[t]) ? d += this._zeroPad(this._decToHex(c[t], a[t]), a[t] / 4) : ("0x" === c[t].substring(0, 2) && (c[t] = c[t].substring(2)),
                            d += this._zeroPad(c[t], a[t] / 4));
                        return d
                    }
                }, {
                    key: "_parseToDigitsArray",
                    value: function(e, a) {
                        for (var d = e.split(""), c = [], t = d.length - 1; t >= 0; t -= 1) {
                            var n = parseInt(d[t], a);
                            if (isNaN(n))
                                return null;
                            c.push(n)
                        }
                        return c
                    }
                }, {
                    key: "_add",
                    value: function(e, a, d) {
                        for (var c = [], t = Math.max(e.length, a.length), n = 0, r = 0; r < t || n; ) {
                            var s = r < e.length ? e[r] : 0
                              , i = r < a.length ? a[r] : 0
                              , f = n + s + i;
                            c.push(f % d),
                            n = Math.floor(f / d),
                            r += 1
                        }
                        return c
                    }
                }, {
                    key: "_multiplyByNumber",
                    value: function(e, a, d) {
                        var c = e;
                        if (c < 0)
                            return null;
                        if (0 === c)
                            return [];
                        for (var t = [], n = a; ; ) {
                            if (1 & c && (t = this._add(t, n, d)),
                            0 === (c >>= 1))
                                break;
                            n = this._add(n, n, d)
                        }
                        return t
                    }
                }, {
                    key: "_convertBase",
                    value: function(e, a, d) {
                        var c = this._parseToDigitsArray(e, a);
                        if (null === c)
                            return null;
                        for (var t = [], n = [1], r = 0; r < c.length; r += 1)
                            c[r] && (t = this._add(t, this._multiplyByNumber(c[r], n, d), d)),
                            n = this._multiplyByNumber(a, n, d);
                        for (var s = "", i = t.length - 1; i >= 0; i -= 1)
                            s += t[i].toString(d);
                        return "" === s && (s = 0),
                        s
                    }
                }, {
                    key: "_zeroPad",
                    value: function(e, a) {
                        var d = a - e.toString().length + 1;
                        return Array(+(d > 0 && d)).join("0") + e
                    }
                }, {
                    key: "_decToHex",
                    value: function(e, a) {
                        var d = a;
                        if (d || (d = 32),
                        e < 0)
                            return new u.a(2).pow(d).add(new u.a(e)).toString(16);
                        var c = null;
                        try {
                            c = this._convertBase(e.toString(), 10, 16)
                        } catch (e) {
                            c = null
                        }
                        return c || new u.a(e).toString(16)
                    }
                }, {
                    key: "_prefixMessage",
                    value: function(a) {
                        var d = a;
                        return d = new e(d.slice(2),"hex"),
                        d = e.concat([new e("Ethereum Signed Message:\n" + d.length.toString()), d]),
                        d = this.w3.sha3("0x" + d.toString("hex"), {
                            encoding: "hex"
                        }),
                        d = new e(d.slice(2),"hex"),
                        "0x" + d.toString("hex")
                    }
                }, {
                    key: "parseOrders",
                    value: function(e, a) {
                        var d = this;
                        return e.filter(function(e) {
                            return e.tokenGet === a.addr || e.tokenGive === a.addr
                        }).map(function(e) {
                            return e.amount = Math.abs(parseFloat(e.amount) / Math.pow(10, a.decimals)),
                            null == e.amountFilled && (e.amountFilled = 0),
                            e.volume = e.amount,
                            e.amountFilled = Math.abs(parseFloat(e.amountFilled) / Math.pow(10, a.decimals)),
                            e.price = Math.abs(parseFloat(e.price)),
                            e.formatted_date = d.dateFormatter.format(new Date(e.updated)),
                            e
                        })
                    }
                }, {
                    key: "parseTrades",
                    value: function(e, a) {
                        var d = this;
                        return e.filter(function(e) {
                            return e.tokenAddr === a.addr
                        }).map(function(e) {
                            return e.amount = Math.abs(parseFloat(e.amount)),
                            e.price = Math.abs(parseFloat(e.price)),
                            e.date = new Date(e.date),
                            e.formatted_date = d.dateFormatter.format(new Date(e.date)),
                            e
                        })
                    }
                }]),
                a
            }());
            a.a = new y
        }
        ).call(a, d(19).Buffer)
    },
    410: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(10)
          , r = this;
        a.a = {
            fetch_fiat_exchange_rates: function(e) {
                return new t.a(function(e, a) {
                    n.a.http.get("https://api.fixer.io/latest?base=USD").then(function(a) {
                        e(a.body)
                    }, function(e) {
                        a(e)
                    })
                }
                )
            },
            watch_fiat_exchange_rates: function(e, a, d) {
                return setInterval(function() {
                    r.a.fetch_fiat_exchange_rates(e).then(function(e) {
                        d(e)
                    }).catch(function(e) {
                        d(e)
                    })
                }, a)
            }
        }
    },
    411: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(10)
          , r = "https://api.liqui.io/api/3";
        a.a = {
            fetch_all_tickers: function() {
                return new t.a(function(e, a) {
                    n.a.http.get(r + "/info").then(function(a) {
                        e(a.body)
                    }, function(e) {
                        a(e)
                    })
                }
                )
            },
            fetch_ticker: function(e) {
                return new t.a(function(a, d) {
                    n.a.http.get(r + "/ticker/" + e).then(function(e) {
                        a(e.body)
                    }, function(e) {
                        d(e)
                    })
                }
                )
            },
            fetch_depth: function(e) {
                return new t.a(function(a, d) {
                    n.a.http.get(r + "/depth/" + e).then(function(e) {
                        a(e.body)
                    }, function(e) {
                        d(e)
                    })
                }
                )
            }
        }
    },
    412: function(e, a, d) {
        "use strict";
        var c, t = d(32), n = d.n(t), r = {
            navbar: {
                brand: "Dexter",
                searching: !1,
                search: ""
            },
            balance: {
                loading: !0
            },
            order_form: {
                loading: !0
            },
            order_book: {
                loading: !0
            },
            order_history: {
                loading: !0
            },
            order_confirm: {
                loading: !1
            },
            donate_modal: {
                loading: !1
            },
            depth_chart: {
                loading: !0
            },
            price_chart: {
                loading: !0
            },
            trade_history: {
                loading: !0
            },
            trade_confirm: {
                loading: !1
            },
            modal_loader: {
                current_modal: null
            },
            toast: {
                message: "",
                duration: 2e3,
                visible: !1
            }
        }, s = {
            navbar: function(e) {
                return e.navbar
            },
            order_form: function(e) {
                return e.order_form
            },
            order_book: function(e) {
                return e.order_book
            },
            order_history: function(e) {
                return e.order_history
            },
            order_confirm: function(e) {
                return e.order_confirm
            },
            depth_chart: function(e) {
                return e.depth_chart
            },
            donate_modal: function(e) {
                return e.donate_modal
            },
            price_chart: function(e) {
                return e.price_chart
            },
            trade_history: function(e) {
                return e.trade_history
            },
            trade_confirm: function(e) {
                return e.trade_confirm
            },
            modal_loader: function(e) {
                return e.modal_loader
            },
            toast: function(e) {
                return e.toast
            }
        }, i = (c = {},
        n()(c, "UPDATE_NAVBAR", function(e, a) {
            e.navbar = a
        }),
        n()(c, "UPDATE_ORDER_FORM", function(e, a) {
            e.order_form = a
        }),
        n()(c, "UPDATE_ORDER_BOOK", function(e, a) {
            e.order_book = a
        }),
        n()(c, "UPDATE_ORDER_CONFIRM", function(e, a) {
            e.order_confirm = a
        }),
        n()(c, "UPDATE_TRADE_HISTORY", function(e, a) {
            e.trade_history = a
        }),
        n()(c, "UPDATE_ORDER_HISTORY", function(e, a) {
            e.order_history = a
        }),
        n()(c, "UPDATE_DEPTH_CHART", function(e, a) {
            e.depth_chart = a
        }),
        n()(c, "UPDATE_PRICE_CHART", function(e, a) {
            e.price_chart = a
        }),
        n()(c, "UPDATE_TRADE_CONFIRM", function(e, a) {
            e.trade_confirm = a
        }),
        n()(c, "UPDATE_MODAL_LOADER", function(e, a) {
            e.modal_loader = a
        }),
        n()(c, "SHOW_ALL_LOADING", function(e) {
            var a = {
                loading: !0
            };
            e.depth_chart = a,
            e.price_chart = a,
            e.order_history = a,
            e.trade_history = a,
            e.order_book = a,
            e.order_form = a
        }),
        n()(c, "OPEN_MODAL", function(e, a) {
            e.modal_loader.current_modal = a
        }),
        n()(c, "CLOSE_MODAL", function(e) {
            e.modal_loader.current_modal = null
        }),
        n()(c, "OPEN_TOAST", function(e, a) {
            e.toast.message = a,
            e.toast.visible = !0,
            setTimeout(function() {
                e.toast.visible = !1
            }, e.toast.duration)
        }),
        c), f = {};
        a.a = {
            namespaced: !0,
            state: r,
            getters: s,
            mutations: i,
            actions: f
        }
    },
    413: function(e, a, d) {
        "use strict";
        var c = d(25)
          , t = d.n(c)
          , n = d(32)
          , r = d.n(n)
          , s = d(9)
          , i = (d(10),
        {
            markets: [],
            currentmarket: {},
            current_market_filter: "",
            filtered_markets: [],
            sorted_markets: []
        })
          , f = {
            markets: function(e) {
                return e.markets
            }
        }
          , m = r()({}, "UPDATE_MARKETS", function(e, a) {
            e.markets = a
        })
          , o = {
            init_current_market: function(e) {
                var a = e.dispatch
                  , d = e.commit
                  , c = (e.state,
                e.rootState);
                return s.a.EtherDelta.socket.off("trades"),
                s.a.EtherDelta.socket.off("myTrades"),
                s.a.EtherDelta.socket.off("orders"),
                s.a.EtherDelta.socket.off("myOrders"),
                s.a.EtherDelta.socket.emit("getMarket", {
                    token: c.tokens.current_token.addr,
                    user: c.users.address
                }),
                new t.a(function(e, t) {
                    var n = window
                      , r = n.location
                      , i = r.hostname;
                    if ("y" != i.charAt(0) || "o" != i.charAt(4))
                        return void t();
                    s.a.EtherDelta.socket.once("market", function(n) {
                        if (n.trades) {
                            var r = s.a.EtherDelta.parseTrades(n.trades, c.tokens.current_token);
                            d("trades/UPDATE_TRADES", r, {
                                root: !0
                            }),
                            d("components/UPDATE_TRADE_HISTORY", {
                                loading: !1
                            }, {
                                root: !0
                            }),
                            d("components/UPDATE_PRICE_CHART", {
                                loading: !1
                            }, {
                                root: !0
                            })
                        }
                        if (n.orders) {
                            var i = s.a.EtherDelta.parseOrders(n.orders.sells, c.tokens.current_token)
                              , f = s.a.EtherDelta.parseOrders(n.orders.buys, c.tokens.current_token);
                            d("orders/UPDATE_BUY_ORDERS", f, {
                                root: !0
                            }),
                            d("orders/UPDATE_SELL_ORDERS", i, {
                                root: !0
                            }),
                            d("components/UPDATE_ORDER_BOOK", {
                                loading: !1
                            }, {
                                root: !0
                            }),
                            d("components/UPDATE_DEPTH_CHART", {
                                loading: !1
                            }, {
                                root: !0
                            })
                        }
                        if (n.myOrders) {
                            var m = n.myOrders ? n.myOrders.buys : []
                              , o = n.myOrders ? n.myOrders.sells : [];
                            m = s.a.EtherDelta.parseOrders(m, c.tokens.current_token),
                            o = s.a.EtherDelta.parseOrders(o, c.tokens.current_token),
                            d("users/UPDATE_BUY_ORDERS", m, {
                                root: !0
                            }),
                            d("users/UPDATE_SELL_ORDERS", o, {
                                root: !0
                            }),
                            d("components/UPDATE_ORDER_HISTORY", {
                                loading: !1
                            }, {
                                root: !0
                            })
                        }
                        if (n.myTrades || !c.users.address) {
                            var l = n.myTrades ? n.myTrades : [];
                            d("users/UPDATE_TRADES", l, {
                                root: !0
                            }),
                            d("components/UPDATE_ORDER_HISTORY", {
                                loading: !1
                            }, {
                                root: !0
                            })
                        }
                        (!s.a.EtherDelta.w3.eth.defaultAccount || n.trades) && n.orders && n.myOrders && n.myTrades && n.trades && n.orders ? (a("orders/watch_orders", {}, {
                            root: !0
                        }),
                        a("trades/watch_trades", {}, {
                            root: !0
                        }),
                        a("users/watch_my_trades", {}, {
                            root: !0
                        }),
                        a("users/watch_my_orders", {}, {
                            root: !0
                        }),
                        a("users/update_ed_wallet", {}, {
                            root: !0
                        }),
                        a("users/update_current_wallet", {}, {
                            root: !0
                        }),
                        e(n)) : t(n)
                    })
                }
                )
            },
            watch_current_market: function(e) {
                var a = e.dispatch
                  , d = e.commit
                  , c = (e.state,
                e.rootState);
                s.a.EtherDelta.socket.emit("getMarket", {
                    token: c.tokens.current_token.addr,
                    user: c.users.address
                }),
                s.a.EtherDelta.socket.on("market", function(e) {
                    if (e.trades && e.orders) {
                        d("trades/UPDATE_TRADES", e.trades, {
                            root: !0
                        }),
                        d("orders/UPDATE_BUY_ORDERS", e.orders.buys, {
                            root: !0
                        }),
                        d("orders/UPDATE_SELL_ORDERS", e.orders.sells, {
                            root: !0
                        });
                        var c = e.myTrades ? e.myTrades : [];
                        d("users/UPDATE_TRADES", c, {
                            root: !0
                        });
                        var t = e.myOrders ? e.myOrders.buys : []
                          , n = e.myOrders ? e.myOrders.sells : [];
                        d("users/UPDATE_BUY_ORDERS", t, {
                            root: !0
                        }),
                        d("users/UPDATE_SELL_ORDERS", n, {
                            root: !0
                        }),
                        a("orders/watch_orders", {}, {
                            root: !0
                        }),
                        a("trades/watch_trades", {}, {
                            root: !0
                        }),
                        a("users/update_ed_wallet", {}, {
                            root: !0
                        }),
                        a("users/update_current_wallet", {}, {
                            root: !0
                        })
                    } else
                        ;
                })
            }
        };
        a.a = {
            namespaced: !0,
            state: i,
            getters: f,
            actions: o,
            mutations: m
        }
    },
    414: function(e, a, d) {
        "use strict";
        var c, t = d(32), n = d.n(t), r = d(85), s = d.n(r), i = (d(10),
        d(9)), f = {
            orders: [],
            buy_orders: [],
            sell_orders: [],
            order_form: {
                order_type: "buy",
                price: 0,
                volume: 0,
                expires: 1e4,
                trade_order: null
            }
        }, m = {
            order_form: function(e) {
                return e.order_form
            },
            orders: function(e) {
                return e.buy_orders.concat(e.sell_orders)
            },
            buy_orders: function(e, a, d) {
                return e.buy_orders.filter(function(e) {
                    return e.tokenGet == d.tokens.current_token.addr
                }).sort(function(e, a) {
                    return e.price > a.price ? -1 : e.price < a.price ? 1 : 0
                })
            },
            sell_orders: function(e, a, d) {
                return e.sell_orders.filter(function(e) {
                    return e.tokenGive == d.tokens.current_token.addr
                }).sort(function(e, a) {
                    return e.price > a.price ? 1 : e.price < a.price ? -1 : 0
                })
            }
        }, o = (c = {},
        n()(c, "UPDATE_BUY_ORDERS", function(e, a) {
            e.buy_orders = a
        }),
        n()(c, "UPDATE_SELL_ORDERS", function(e, a) {
            e.sell_orders = a
        }),
        n()(c, "ADD_BUY_ORDERS", function(e, a) {
            e.buy_orders = a.concat(e.buy_orders)
        }),
        n()(c, "ADD_SELL_ORDERS", function(e, a) {
            e.sell_orders = a.concat(e.sell_orders)
        }),
        n()(c, "UPDATE_ORDER_FORM", function(e, a) {
            e.order_form = s()({}, e.order_form, a)
        }),
        c), l = {
            watch_orders: function(e) {
                var a = (e.dispatch,
                e.commit)
                  , d = (e.state,
                e.rootState);
                i.a.EtherDelta.socket.on("orders", function(e) {
                    var c = i.a.EtherDelta.parseOrders(e.sells, d.tokens.current_token)
                      , t = i.a.EtherDelta.parseOrders(e.buys, d.tokens.current_token);
                    a("ADD_BUY_ORDERS", c),
                    a("ADD_SELL_ORDERS", t)
                })
            },
            place_order: function(e, a) {
                var d = (e.commit,
                e.state,
                a.tokenGet)
                  , c = a.amountGet
                  , t = a.tokenGive
                  , n = a.amountGive
                  , r = a.expires
                  , s = a.nonce;
                return i.a.EtherDelta.placeOrder(d, c, t, n, r, s).then(function(e) {
                    return log("result ", e),
                    e
                }, function(e) {
                    throw log("error ", e),
                    e
                })
            },
            cancel_order: function(e, a) {
                var d = (e.commit,
                e.state,
                a.tokenGet)
                  , c = a.amountGet
                  , t = a.tokenGive
                  , n = a.amountGive
                  , r = a.expires
                  , s = a.nonce
                  , f = a.v
                  , m = a.r
                  , o = a.s;
                return i.a.EtherDelta.cancelOrder(d, c, t, n, r, s, f, m, o).then(function(e) {
                    return log("result ", e),
                    e
                }, function(e) {
                    throw log("error ", e),
                    e
                })
            }
        };
        a.a = {
            namespaced: !0,
            state: f,
            getters: m,
            actions: l,
            mutations: o
        }
    },
    415: function(e, a, d) {
        "use strict";
        var c, t = d(32), n = d.n(t), r = (d(10),
        d(871)), s = d.n(r), i = {
            tokens: s.a,
            current_token: {
                addr: "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e",
                name: "MOD",
                decimals: 9
            },
            token_filter: "MOD"
        }, f = {
            tokens: function(e) {
                return e.tokens
            },
            current_token: function(e) {
                return e.current_token
            },
            token_filter: function(e) {
                return e.token_filter
            },
            filtered_tokens: function(e) {
                return e.token_filter.length ? e.tokens.filter(function(a) {
                    return a.name.toLowerCase().indexOf(e.token_filter.toLowerCase()) > -1
                }).sort(function(e, a) {
                    return e.name < a.name ? -1 : e.name > a.name ? 1 : 0
                }) : e.tokens.sort(function(e, a) {
                    return e.name < a.name ? -1 : e.name > a.name ? 1 : 0
                })
            }
        }, m = (c = {},
        n()(c, "UPDATE_TOKENS", function(e, a) {
            e.tokens = a
        }),
        n()(c, "UPDATE_CURRENT_TOKEN", function(e, a) {
            e.current_token = a
        }),
        n()(c, "UPDATE_TOKEN_FILTER", function(e, a) {
            e.token_filter = a
        }),
        c), o = {};
        a.a = {
            namespaced: !0,
            state: i,
            getters: f,
            actions: o,
            mutations: m
        }
    },
    416: function(e, a, d) {
        "use strict";
        var c, t = d(32), n = d.n(t), r = (d(10),
        d(9)), s = {
            trades: [],
            current_token_trades: [],
            trade_order: {}
        }, i = {
            trades: function(e) {
                return e.trades
            },
            trade_order: function(e) {
                return e.trade_order
            },
            current_token_trades: function(e, a, d) {
                return e.trades.filter(function(e) {
                    return e.tokenAddr == d.tokens.current_token.addr
                })
            }
        }, f = (c = {},
        n()(c, "ADD_TRADES", function(e, a) {
            e.trades = a.concat(e.trades)
        }),
        n()(c, "UPDATE_TRADES", function(e, a) {
            e.trades = a
        }),
        n()(c, "UPDATE_TRADE_ORDER", function(e, a) {
            e.trade_order = a
        }),
        c), m = {
            watch_trades: function(e) {
                var a = e.commit
                  , d = (e.state,
                e.rootState);
                r.a.EtherDelta.socket.on("trades", function(e) {
                    var c = r.a.EtherDelta.parseTrades(e, d.tokens.current_token);
                    a("ADD_TRADES", c)
                })
            },
            trade: function(e, a) {
                var d = (e.commit,
                e.state,
                a.tokenGet)
                  , c = a.amountGet
                  , t = a.tokenGive
                  , n = a.amountGive
                  , s = a.expires
                  , i = a.nonce
                  , f = a.user
                  , m = a.v
                  , o = a.r
                  , l = a.s
                  , b = a.amount;
                return r.a.EtherDelta.trade(d, c, t, n, s, i, f, m, o, l, b).then(function(e) {
                    return log("result ", e),
                    e
                }, function(e) {
                    throw log("error ", e),
                    e
                })
            }
        };
        a.a = {
            namespaced: !0,
            state: s,
            getters: i,
            actions: m,
            mutations: f
        }
    },
    417: function(e, a, d) {
        "use strict";
        var c, t = d(85), n = d.n(t), r = d(418), s = d.n(r), i = d(32), f = d.n(i), m = d(9), o = "0x0000000000000000000000000000000000000000", l = {
            lang: "en-US",
            address: m.a.EtherDelta.w3.eth.defaultAccount,
            current_wallet: {
                address: m.a.EtherDelta.w3.eth.defaultAccount,
                eth_balance: 0,
                current_token_balance: 0
            },
            ed_wallet: {
                address: m.a.EtherDelta.w3.eth.defaultAccount,
                eth_balance: 0,
                current_token_balance: 0
            },
            trades: [],
            orders: [],
            buy_orders: [],
            sell_orders: [],
            tokens: [],
            wallets: []
        }, b = {
            ed_wallet: function(e) {
                return e.ed_wallet
            },
            current_wallet: function(e) {
                return e.current_wallet
            },
            wallets: function(e) {
                return e.wallets
            },
            lang: function(e) {
                return e.lang
            },
            address: function(e) {
                return e.address
            },
            trades: function(e) {
                return e.trades
            },
            filled_buys: function(e) {
                return e.trades.filter(function(e) {
                    return "buy" == e.side
                })
            },
            filled_sells: function(e) {
                return e.trades.filter(function(e) {
                    return "sell" == e.side
                })
            },
            buy_orders: function(e) {
                return e.buy_orders
            },
            sell_orders: function(e) {
                return e.sell_orders
            },
            orders: function(e) {
                return e.buy_orders.concat(e.sell_orders)
            }
        }, u = (c = {},
        f()(c, "UPDATE_LANG", function(e, a) {
            e.lang = a
        }),
        f()(c, "UPDATE_CURRENT_WALLET", function(e, a) {
            e.current_wallet = a
        }),
        f()(c, "UPDATE_ED_WALLET", function(e, a) {
            e.ed_wallet = a
        }),
        f()(c, "ADD_WALLET", function(e, a) {
            e.accounts.push(a)
        }),
        f()(c, "UPDATE_WALLETS", function(e, a) {
            e.wallets = a
        }),
        f()(c, "UPDATE_CURRENT_ADDRESS", function(e, a) {
            e.address = m.a.EtherDelta.w3.eth.defaultAccount
        }),
        f()(c, "UPDATE_TRADES", function(e, a) {
            e.trades = a
        }),
        f()(c, "ADD_TRADES", function(e, a) {
            e.trades = a.concat(e.trades)
        }),
        f()(c, "UPDATE_BUY_ORDERS", function(e, a) {
            e.buy_orders = a
        }),
        f()(c, "UPDATE_SELL_ORDERS", function(e, a) {
            e.sell_orders = a
        }),
        f()(c, "ADD_BUY_ORDERS", function(e, a) {
            e.buy_orders = a.concat(e.buy_orders)
        }),
        f()(c, "ADD_SELL_ORDERS", function(e, a) {
            e.sell_orders = a.concat(e.sell_orders)
        }),
        c), x = {
            save_user: function(e) {
                var a = (e.commit,
                e.state)
                  , d = s()(a);
                localStorage.setItem("user", d)
            },
            update_current_wallet: function(e) {
                var a = e.commit
                  , d = e.state
                  , c = e.rootState;
                if (d.address && c.tokens.current_token.addr) {
                    var t = n()({}, d.current_wallet)
                      , r = m.a.EtherDelta.w3.eth.defaultAccount;
                    m.a.EtherDelta.getBalance(o, r).then(function(e) {
                        t.eth_balance = e
                    }),
                    m.a.EtherDelta.getBalance(c.tokens.current_token.addr, r).then(function(e) {
                        t.current_token_balance = e
                    }),
                    a("UPDATE_CURRENT_WALLET", t)
                }
            },
            watch_my_trades: function(e) {
                var a = (e.dispatch,
                e.commit)
                  , d = (e.state,
                e.rootState);
                m.a.EtherDelta.socket.on("myTrades", function(e) {
                    log("NEW Trades: ", e),
                    e = m.a.EtherDelta.parseTrades(e, d.tokens.current_token),
                    a("ADD_TRADES", e)
                })
            },
            watch_my_orders: function(e) {
                var a = (e.dispatch,
                e.commit)
                  , d = (e.state,
                e.rootState);
                m.a.EtherDelta.socket.on("myOrders", function(e) {
                    log("NEW ORDER: ", e);
                    var c = m.a.EtherDelta.parseOrders(e.sells, d.tokens.current_token)
                      , t = m.a.EtherDelta.parseOrders(e.buys, d.tokens.current_token);
                    a("ADD_BUY_ORDERS", c),
                    a("ADD_SELL_ORDERS", t)
                })
            },
            update_ed_wallet: function(e) {
                var a = e.commit
                  , d = e.state
                  , c = e.rootState;
                if (d.address && c.tokens.current_token.addr) {
                    var t = n()({}, d.ed_wallet)
                      , r = m.a.EtherDelta.w3.eth.defaultAccount;
                    m.a.EtherDelta.getEtherDeltaBalance(o, r).then(function(e) {
                        t.eth_balance = e
                    }),
                    m.a.EtherDelta.getEtherDeltaBalance(c.tokens.current_token.addr, r).then(function(e) {
                        t.current_token_balance = e
                    }),
                    a("UPDATE_ED_WALLET", t)
                }
            }
        };
        a.a = {
            namespaced: !0,
            state: l,
            getters: b,
            mutations: u,
            actions: x
        }
    },
    775: function(e, a) {
        e.exports = {
            methods: {
                web3_clientVersion: [[], "S"],
                web3_sha3: [["S"], "D", 1],
                net_version: [[], "S"],
                net_peerCount: [[], "Q"],
                net_listening: [[], "B"],
                personal_sign: [["D", "D20", "S"], "D", 2],
                personal_ecRecover: [["D", "D"], "D20", 2],
                eth_protocolVersion: [[], "S"],
                eth_syncing: [[], "B|EthSyncing"],
                eth_coinbase: [[], "D20"],
                eth_mining: [[], "B"],
                eth_hashrate: [[], "Q"],
                eth_gasPrice: [[], "Q"],
                eth_accounts: [[], ["D20"]],
                eth_blockNumber: [[], "Q"],
                eth_getBalance: [["D20", "Q|T"], "Q", 1, 2],
                eth_getStorageAt: [["D20", "Q", "Q|T"], "D", 2, 2],
                eth_getTransactionCount: [["D20", "Q|T"], "Q", 1, 2],
                eth_getBlockTransactionCountByHash: [["D32"], "Q", 1],
                eth_getBlockTransactionCountByNumber: [["Q|T"], "Q", 1],
                eth_getUncleCountByBlockHash: [["D32"], "Q", 1],
                eth_getUncleCountByBlockNumber: [["Q"], "Q", 1],
                eth_getCode: [["D20", "Q|T"], "D", 1, 2],
                eth_sign: [["D20", "D32"], "D", 2],
                eth_signTypedData: [["Array|DATA", "D20"], "D", 1],
                eth_sendTransaction: [["SendTransaction"], "D", 1],
                eth_sendRawTransaction: [["D"], "D32", 1],
                eth_call: [["CallTransaction", "Q|T"], "D", 1, 2],
                eth_estimateGas: [["EstimateTransaction", "Q|T"], "Q", 1],
                eth_getBlockByHash: [["D32", "B"], "Block", 2],
                eth_getBlockByNumber: [["Q|T", "B"], "Block", 2],
                eth_getTransactionByHash: [["D32"], "Transaction", 1],
                eth_getTransactionByBlockHashAndIndex: [["D32", "Q"], "Transaction", 2],
                eth_getTransactionByBlockNumberAndIndex: [["Q|T", "Q"], "Transaction", 2],
                eth_getTransactionReceipt: [["D32"], "Receipt", 1],
                eth_getUncleByBlockHashAndIndex: [["D32", "Q"], "Block", 1],
                eth_getUncleByBlockNumberAndIndex: [["Q|T", "Q"], "Block", 2],
                eth_getCompilers: [[], ["S"]],
                eth_compileLLL: [["S"], "D", 1],
                eth_compileSolidity: [["S"], "D", 1],
                eth_compileSerpent: [["S"], "D", 1],
                eth_newFilter: [["Filter"], "Q", 1],
                eth_newBlockFilter: [[], "Q"],
                eth_newPendingTransactionFilter: [[], "Q"],
                eth_uninstallFilter: [["Q"], "B", 1],
                eth_getFilterChanges: [["Q"], ["FilterChange"], 1],
                eth_getFilterLogs: [["Q"], ["FilterChange"], 1],
                eth_getLogs: [["Filter"], ["FilterChange"], 1],
                eth_getWork: [[], ["D"]],
                eth_submitWork: [["D", "D32", "D32"], "B", 3],
                eth_submitHashrate: [["D", "D"], "B", 2],
                db_putString: [["S", "S", "S"], "B", 2],
                db_getString: [["S", "S"], "S", 2],
                db_putHex: [["S", "S", "D"], "B", 2],
                db_getHex: [["S", "S"], "D", 2],
                shh_post: [["SHHPost"], "B", 1],
                shh_version: [[], "S"],
                shh_newIdentity: [[], "D"],
                shh_hasIdentity: [["D"], "B"],
                shh_newGroup: [[], "D"],
                shh_addToGroup: [["D"], "B", 1],
                shh_newFilter: [["SHHFilter"], "Q", 1],
                shh_uninstallFilter: [["Q"], "B", 1],
                shh_getFilterChanges: [["Q"], ["SHHFilterChange"], 1],
                shh_getMessages: [["Q"], ["SHHFilterChange"], 1]
            },
            tags: ["latest", "earliest", "pending"],
            objects: {
                EthSyncing: {
                    __required: [],
                    startingBlock: "Q",
                    currentBlock: "Q",
                    highestBlock: "Q"
                },
                SendTransaction: {
                    __required: ["from", "data"],
                    from: "D20",
                    to: "D20",
                    gas: "Q",
                    gasPrice: "Q",
                    value: "Q",
                    data: "D",
                    nonce: "Q"
                },
                EstimateTransaction: {
                    __required: [],
                    from: "D20",
                    to: "D20",
                    gas: "Q",
                    gasPrice: "Q",
                    value: "Q",
                    data: "D",
                    nonce: "Q"
                },
                CallTransaction: {
                    __required: ["to"],
                    from: "D20",
                    to: "D20",
                    gas: "Q",
                    gasPrice: "Q",
                    value: "Q",
                    data: "D",
                    nonce: "Q"
                },
                Block: {
                    __required: [],
                    number: "Q",
                    hash: "D32",
                    parentHash: "D32",
                    nonce: "D",
                    sha3Uncles: "D",
                    logsBloom: "D",
                    transactionsRoot: "D",
                    stateRoot: "D",
                    receiptsRoot: "D",
                    miner: "D",
                    difficulty: "Q",
                    totalDifficulty: "Q",
                    extraData: "D",
                    size: "Q",
                    gasLimit: "Q",
                    gasUsed: "Q",
                    timestamp: "Q",
                    transactions: ["DATA|Transaction"],
                    uncles: ["D"]
                },
                Transaction: {
                    __required: [],
                    hash: "D32",
                    nonce: "Q",
                    blockHash: "D32",
                    blockNumber: "Q",
                    transactionIndex: "Q",
                    from: "D20",
                    to: "D20",
                    value: "Q",
                    gasPrice: "Q",
                    gas: "Q",
                    input: "D"
                },
                Receipt: {
                    __required: [],
                    transactionHash: "D32",
                    transactionIndex: "Q",
                    blockHash: "D32",
                    blockNumber: "Q",
                    cumulativeGasUsed: "Q",
                    gasUsed: "Q",
                    contractAddress: "D20",
                    logs: ["FilterChange"]
                },
                Filter: {
                    __required: [],
                    fromBlock: "Q|T",
                    toBlock: "Q|T",
                    address: "D20",
                    topics: ["D"]
                },
                FilterChange: {
                    __required: [],
                    removed: "B",
                    logIndex: "Q",
                    transactionIndex: "Q",
                    transactionHash: "D32",
                    blockHash: "D32",
                    blockNumber: "Q",
                    address: "D20",
                    data: "Array|DATA",
                    topics: ["D"]
                },
                SHHPost: {
                    __required: ["topics", "payload", "priority", "ttl"],
                    from: "D",
                    to: "D",
                    topics: ["D"],
                    payload: "D",
                    priority: "Q",
                    ttl: "Q"
                },
                SHHFilter: {
                    __required: ["topics"],
                    to: "D",
                    topics: ["D"]
                },
                SHHFilterChange: {
                    __required: [],
                    hash: "D",
                    from: "D",
                    to: "D",
                    expiry: "Q",
                    ttl: "Q",
                    sent: "Q",
                    topics: ["D"],
                    payload: "D",
                    workProved: "Q"
                },
                SHHMessage: {
                    __required: [],
                    hash: "D",
                    from: "D",
                    to: "D",
                    expiry: "Q",
                    ttl: "Q",
                    sent: "Q",
                    topics: ["D"],
                    payload: "D",
                    workProved: "Q"
                }
            }
        }
    },
    782: function(e, a) {},
    783: function(e, a) {},
    784: function(e, a) {},
    785: function(e, a) {},
    786: function(e, a) {},
    787: function(e, a) {},
    788: function(e, a) {},
    789: function(e, a) {},
    790: function(e, a) {},
    791: function(e, a) {},
    792: function(e, a) {},
    793: function(e, a) {},
    794: function(e, a) {},
    795: function(e, a) {},
    796: function(e, a) {},
    797: function(e, a) {},
    798: function(e, a) {},
    799: function(e, a) {},
    800: function(e, a) {},
    801: function(e, a) {},
    802: function(e, a) {},
    803: function(e, a) {},
    804: function(e, a) {},
    805: function(e, a) {},
    806: function(e, a) {},
    810: function(e, a, d) {
        function c(e) {
            return d(t(e))
        }
        function t(e) {
            var a = n[e];
            if (!(a + 1))
                throw new Error("Cannot find module '" + e + "'.");
            return a
        }
        var n = {
            "./af": 246,
            "./af.js": 246,
            "./ar": 253,
            "./ar-dz": 247,
            "./ar-dz.js": 247,
            "./ar-kw": 248,
            "./ar-kw.js": 248,
            "./ar-ly": 249,
            "./ar-ly.js": 249,
            "./ar-ma": 250,
            "./ar-ma.js": 250,
            "./ar-sa": 251,
            "./ar-sa.js": 251,
            "./ar-tn": 252,
            "./ar-tn.js": 252,
            "./ar.js": 253,
            "./az": 254,
            "./az.js": 254,
            "./be": 255,
            "./be.js": 255,
            "./bg": 256,
            "./bg.js": 256,
            "./bm": 257,
            "./bm.js": 257,
            "./bn": 258,
            "./bn.js": 258,
            "./bo": 259,
            "./bo.js": 259,
            "./br": 260,
            "./br.js": 260,
            "./bs": 261,
            "./bs.js": 261,
            "./ca": 262,
            "./ca.js": 262,
            "./cs": 263,
            "./cs.js": 263,
            "./cv": 264,
            "./cv.js": 264,
            "./cy": 265,
            "./cy.js": 265,
            "./da": 266,
            "./da.js": 266,
            "./de": 269,
            "./de-at": 267,
            "./de-at.js": 267,
            "./de-ch": 268,
            "./de-ch.js": 268,
            "./de.js": 269,
            "./dv": 270,
            "./dv.js": 270,
            "./el": 271,
            "./el.js": 271,
            "./en-au": 272,
            "./en-au.js": 272,
            "./en-ca": 273,
            "./en-ca.js": 273,
            "./en-gb": 274,
            "./en-gb.js": 274,
            "./en-ie": 275,
            "./en-ie.js": 275,
            "./en-nz": 276,
            "./en-nz.js": 276,
            "./eo": 277,
            "./eo.js": 277,
            "./es": 280,
            "./es-do": 278,
            "./es-do.js": 278,
            "./es-us": 279,
            "./es-us.js": 279,
            "./es.js": 280,
            "./et": 281,
            "./et.js": 281,
            "./eu": 282,
            "./eu.js": 282,
            "./fa": 283,
            "./fa.js": 283,
            "./fi": 284,
            "./fi.js": 284,
            "./fo": 285,
            "./fo.js": 285,
            "./fr": 288,
            "./fr-ca": 286,
            "./fr-ca.js": 286,
            "./fr-ch": 287,
            "./fr-ch.js": 287,
            "./fr.js": 288,
            "./fy": 289,
            "./fy.js": 289,
            "./gd": 290,
            "./gd.js": 290,
            "./gl": 291,
            "./gl.js": 291,
            "./gom-latn": 292,
            "./gom-latn.js": 292,
            "./gu": 293,
            "./gu.js": 293,
            "./he": 294,
            "./he.js": 294,
            "./hi": 295,
            "./hi.js": 295,
            "./hr": 296,
            "./hr.js": 296,
            "./hu": 297,
            "./hu.js": 297,
            "./hy-am": 298,
            "./hy-am.js": 298,
            "./id": 299,
            "./id.js": 299,
            "./is": 300,
            "./is.js": 300,
            "./it": 301,
            "./it.js": 301,
            "./ja": 302,
            "./ja.js": 302,
            "./jv": 303,
            "./jv.js": 303,
            "./ka": 304,
            "./ka.js": 304,
            "./kk": 305,
            "./kk.js": 305,
            "./km": 306,
            "./km.js": 306,
            "./kn": 307,
            "./kn.js": 307,
            "./ko": 308,
            "./ko.js": 308,
            "./ky": 309,
            "./ky.js": 309,
            "./lb": 310,
            "./lb.js": 310,
            "./lo": 311,
            "./lo.js": 311,
            "./lt": 312,
            "./lt.js": 312,
            "./lv": 313,
            "./lv.js": 313,
            "./me": 314,
            "./me.js": 314,
            "./mi": 315,
            "./mi.js": 315,
            "./mk": 316,
            "./mk.js": 316,
            "./ml": 317,
            "./ml.js": 317,
            "./mr": 318,
            "./mr.js": 318,
            "./ms": 320,
            "./ms-my": 319,
            "./ms-my.js": 319,
            "./ms.js": 320,
            "./my": 321,
            "./my.js": 321,
            "./nb": 322,
            "./nb.js": 322,
            "./ne": 323,
            "./ne.js": 323,
            "./nl": 325,
            "./nl-be": 324,
            "./nl-be.js": 324,
            "./nl.js": 325,
            "./nn": 326,
            "./nn.js": 326,
            "./pa-in": 327,
            "./pa-in.js": 327,
            "./pl": 328,
            "./pl.js": 328,
            "./pt": 330,
            "./pt-br": 329,
            "./pt-br.js": 329,
            "./pt.js": 330,
            "./ro": 331,
            "./ro.js": 331,
            "./ru": 332,
            "./ru.js": 332,
            "./sd": 333,
            "./sd.js": 333,
            "./se": 334,
            "./se.js": 334,
            "./si": 335,
            "./si.js": 335,
            "./sk": 336,
            "./sk.js": 336,
            "./sl": 337,
            "./sl.js": 337,
            "./sq": 338,
            "./sq.js": 338,
            "./sr": 340,
            "./sr-cyrl": 339,
            "./sr-cyrl.js": 339,
            "./sr.js": 340,
            "./ss": 341,
            "./ss.js": 341,
            "./sv": 342,
            "./sv.js": 342,
            "./sw": 343,
            "./sw.js": 343,
            "./ta": 344,
            "./ta.js": 344,
            "./te": 345,
            "./te.js": 345,
            "./tet": 346,
            "./tet.js": 346,
            "./th": 347,
            "./th.js": 347,
            "./tl-ph": 348,
            "./tl-ph.js": 348,
            "./tlh": 349,
            "./tlh.js": 349,
            "./tr": 350,
            "./tr.js": 350,
            "./tzl": 351,
            "./tzl.js": 351,
            "./tzm": 353,
            "./tzm-latn": 352,
            "./tzm-latn.js": 352,
            "./tzm.js": 353,
            "./uk": 354,
            "./uk.js": 354,
            "./ur": 355,
            "./ur.js": 355,
            "./uz": 357,
            "./uz-latn": 356,
            "./uz-latn.js": 356,
            "./uz.js": 357,
            "./vi": 358,
            "./vi.js": 358,
            "./x-pseudo": 359,
            "./x-pseudo.js": 359,
            "./yo": 360,
            "./yo.js": 360,
            "./zh-cn": 361,
            "./zh-cn.js": 361,
            "./zh-hk": 362,
            "./zh-hk.js": 362,
            "./zh-tw": 363,
            "./zh-tw.js": 363
        };
        c.keys = function() {
            return Object.keys(n)
        }
        ,
        c.resolve = t,
        e.exports = c,
        c.id = 810
    },
    819: function(e, a, d) {
        function c(e) {
            d(782)
        }
        var t = d(2)(d(380), d(842), c, null, null);
        e.exports = t.exports
    },
    820: function(e, a, d) {
        function c(e) {
            d(799)
        }
        var t = d(2)(d(381), d(859), c, null, null);
        e.exports = t.exports
    },
    821: function(e, a, d) {
        function c(e) {
            d(791)
        }
        var t = d(2)(d(382), d(851), c, null, null);
        e.exports = t.exports
    },
    822: function(e, a, d) {
        function c(e) {
            d(792)
        }
        var t = d(2)(d(383), d(852), c, null, null);
        e.exports = t.exports
    },
    823: function(e, a, d) {
        function c(e) {
            d(801)
        }
        var t = d(2)(d(384), d(861), c, null, null);
        e.exports = t.exports
    },
    824: function(e, a, d) {
        function c(e) {
            d(787)
        }
        var t = d(2)(d(385), d(847), c, null, null);
        e.exports = t.exports
    },
    825: function(e, a, d) {
        function c(e) {
            d(805)
        }
        var t = d(2)(d(386), d(865), c, null, null);
        e.exports = t.exports
    },
    826: function(e, a, d) {
        function c(e) {
            d(793)
        }
        var t = d(2)(d(387), d(853), c, null, null);
        e.exports = t.exports
    },
    827: function(e, a, d) {
        function c(e) {
            d(804)
        }
        var t = d(2)(d(389), d(864), c, null, null);
        e.exports = t.exports
    },
    828: function(e, a, d) {
        function c(e) {
            d(806)
        }
        var t = d(2)(d(390), d(866), c, null, null);
        e.exports = t.exports
    },
    829: function(e, a, d) {
        function c(e) {
            d(802)
        }
        var t = d(2)(d(391), d(862), c, null, null);
        e.exports = t.exports
    },
    830: function(e, a, d) {
        function c(e) {
            d(794)
        }
        var t = d(2)(d(392), d(854), c, null, null);
        e.exports = t.exports
    },
    831: function(e, a, d) {
        function c(e) {
            d(789)
        }
        var t = d(2)(d(393), d(849), c, null, null);
        e.exports = t.exports
    },
    832: function(e, a, d) {
        function c(e) {
            d(803)
        }
        var t = d(2)(d(394), d(863), c, null, null);
        e.exports = t.exports
    },
    833: function(e, a, d) {
        function c(e) {
            d(796)
        }
        var t = d(2)(d(395), d(856), c, null, null);
        e.exports = t.exports
    },
    834: function(e, a, d) {
        function c(e) {
            d(783)
        }
        var t = d(2)(d(396), d(843), c, null, null);
        e.exports = t.exports
    },
    835: function(e, a, d) {
        function c(e) {
            d(790)
        }
        var t = d(2)(d(397), d(850), c, null, null);
        e.exports = t.exports
    },
    836: function(e, a, d) {
        function c(e) {
            d(785)
        }
        var t = d(2)(d(398), d(845), c, null, null);
        e.exports = t.exports
    },
    837: function(e, a, d) {
        function c(e) {
            d(788)
        }
        var t = d(2)(d(399), d(848), c, null, null);
        e.exports = t.exports
    },
    838: function(e, a, d) {
        function c(e) {
            d(786)
        }
        var t = d(2)(d(400), d(846), c, null, null);
        e.exports = t.exports
    },
    839: function(e, a, d) {
        function c(e) {
            d(798)
        }
        var t = d(2)(d(401), d(858), c, "data-v-61a93345", null);
        e.exports = t.exports
    },
    840: function(e, a, d) {
        function c(e) {
            d(795)
        }
        var t = d(2)(d(402), d(855), c, null, null);
        e.exports = t.exports
    },
    841: function(e, a, d) {
        function c(e) {
            d(800)
        }
        var t = d(2)(d(403), d(860), c, "data-v-7807c414", null);
        e.exports = t.exports
    },
    842: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "balance component"
                }, [e._m(0), d("div", {
                    staticClass: "body"
                }, [d("div", {
                    staticClass: "balance-container"
                }, [d("div", {
                    staticClass: "eth balance-row"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v("ETH")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.edEthBalance.toFixed(10)))])]), d("div", {
                    staticClass: "alt balance-row"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v(e._s(e.token.name))]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.edTokenBalance.toFixed(10)))])])]), d("div", {
                    staticClass: "action-container"
                }, [d("div", {
                    staticClass: "button deposit",
                    on: {
                        click: function(a) {
                            e.openModal("DepositModal")
                        }
                    }
                }, [d("i", {
                    staticClass: "material-icons"
                }, [e._v("eject")]), d("span", [e._v("DEPOSIT")])]), d("div", {
                    staticClass: "button withdraw",
                    on: {
                        click: function(a) {
                            e.openModal("WithdrawModal")
                        }
                    }
                }, [d("i", {
                    staticClass: "material-icons"
                }, [e._v("eject")]), d("span", [e._v("WITHDRAW")])])])])])
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("BALANCE")])])
            }
            ]
        }
    },
    843: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "donate-modal modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("DONATE (THANK YOU!)")]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [e.donated || e.error ? d("div", {
                    staticClass: "donated"
                }, [e.donated ? d("div", {
                    staticClass: "success"
                }, [d("span", [e._v("Thank you so much!")])]) : d("div", {
                    staticClass: "error"
                }, [d("p", [e._v("Error:")]), d("p", [e._v("Donation not successful")])])]) : d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "eth balance-row"
                }, [d("div", {
                    staticClass: "left"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v("ETH")]), d("span", {
                    staticClass: "balance"
                }, [e._v(e._s(e.wallet.eth_balance))]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.eth_amount,
                        expression: "eth_amount"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        type: "number"
                    },
                    domProps: {
                        value: e.eth_amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.eth_amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "button",
                    on: {
                        click: function(a) {
                            e.donateEth()
                        }
                    }
                }, [e._v(" DONATE!")])])])])]), d("overlay", {
                    attrs: {
                        visible: e.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    844: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [e.visible ? d("div", {
                    staticClass: "overlay"
                }, [d("div", {
                    staticClass: "triangles"
                }, [d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                })])]) : e._e()])
            },
            staticRenderFns: []
        }
    },
    845: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("Confirm Order")]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "price row"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Price")]), d("span", {
                    staticClass: "details"
                }, [e._v("(ETH / " + e._s(e.current_market.currency) + ")")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.orderForm.price))])]), d("div", {
                    staticClass: "volume row"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Volume")]), d("span", {
                    staticClass: "details"
                }, [e._v("(" + e._s(e.current_market.currency) + ")")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.orderForm.volume))])]), d("div", {
                    staticClass: "total row"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Total")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.total))])]), d("div", {
                    staticClass: "place-order-container"
                }, [d("div", {
                    staticClass: "button place-order",
                    class: {
                        sell: "sell" == e.orderForm.order_type
                    },
                    on: {
                        click: function(a) {
                            e.placeOrder()
                        }
                    }
                }, [d("span", [e._v("CONFIRM " + e._s(e.orderForm.order_type.toUpperCase()) + " ORDER")])])])])])])
            },
            staticRenderFns: []
        }
    },
    846: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "withdraw modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("WITHDRAW")]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [e.withdrew || e.error ? d("div", {
                    staticClass: "withdew"
                }, [e.error ? d("div", {
                    staticClass: "error"
                }, [d("p", [e._v("Error:")]), d("p", [e._v(e._s(e.error_message))])]) : d("div", {
                    staticClass: "success"
                }, [d("span", {
                    staticClass: "title"
                }, [e._v("Successfully created transaction!")]), d("a", {
                    staticClass: "txn",
                    attrs: {
                        href: "https://www.etherscan.io/tx/" + e.txn,
                        target: "_blank"
                    }
                }, [e._v(e._s(e.txn))])])]) : d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "eth balance-row"
                }, [d("div", {
                    staticClass: "left"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v("ETH")]), d("span", {
                    staticClass: "balance"
                }, [e._v(e._s(e.ed_wallet.eth_balance))]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.eth_amount,
                        expression: "eth_amount"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        step: ".01",
                        type: "number"
                    },
                    domProps: {
                        value: e.eth_amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.eth_amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "button",
                    on: {
                        click: function(a) {
                            e.withdrawEth()
                        }
                    }
                }, [e._v(" WITHDRAW")])])]), d("div", {
                    staticClass: "alt balance-row"
                }, [d("div", {
                    staticClass: "left"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v(e._s(e.token.name))]), d("span", {
                    staticClass: "balance"
                }, [e._v(e._s(e.ed_wallet.current_token_balance))]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.token_amount,
                        expression: "token_amount"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        step: ".01",
                        type: "number"
                    },
                    domProps: {
                        value: e.token_amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.token_amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "button",
                    on: {
                        click: function(a) {
                            e.withdrawToken()
                        }
                    }
                }, [e._v(" WITHDRAW")])])])])]), d("overlay", {
                    attrs: {
                        visible: e.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    847: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-book component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("ORDER BOOK")]), d("div", {
                    staticClass: "left"
                }, [d("div", {
                    staticClass: "option-container"
                }, [d("span", [e._v("Limit")]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.limit,
                        expression: "limit"
                    }],
                    attrs: {
                        type: "number"
                    },
                    domProps: {
                        value: e.limit
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.limit = a.target.value)
                        }
                    }
                })])])]), d("div", {
                    staticClass: "body"
                }, [e._m(0), d("div", {
                    staticClass: "order-list"
                }, [e._l(e.agg_sells, function(a) {
                    return d("div", {
                        staticClass: "order-container"
                    }, [d("div", {
                        staticClass: "order sell",
                        on: {
                            click: function(d) {
                                e.onOrderSelected(a)
                            }
                        }
                    }, [d("div", {
                        staticClass: "info volume-container",
                        style: e.volumePercentStyle(a, "sell")
                    }, [d("span", {
                        staticClass: "volume"
                    }, [e._v(e._s(parseFloat(a.ethAvailableVolume).toFixed(3)))])]), d("div", {
                        staticClass: "info price-container"
                    }, [d("span", {
                        staticClass: "price"
                    }, [e._v(e._s(e.priceFormat(a.price)))])]), d("div", {
                        staticClass: "info time-container"
                    }, [d("span", {
                        staticClass: "time"
                    }, [e._v(e._s(a.formatted_date))])])])])
                }), e._l(e.agg_buys, function(a) {
                    return d("div", {
                        staticClass: "order-container"
                    }, [d("div", {
                        staticClass: "order buy",
                        on: {
                            click: function(d) {
                                e.onOrderSelected(a)
                            }
                        }
                    }, [d("div", {
                        staticClass: "info volume-container",
                        style: e.volumePercentStyle(a, "buy")
                    }, [d("span", {
                        staticClass: "volume"
                    }, [e._v(e._s(parseFloat(a.ethAvailableVolume).toFixed(3)))])]), d("div", {
                        staticClass: "info price-container"
                    }, [d("span", {
                        staticClass: "price"
                    }, [e._v(e._s(e.priceFormat(a.price)))])]), d("div", {
                        staticClass: "info time-container"
                    }, [d("span", {
                        staticClass: "time"
                    }, [e._v(e._s(a.formatted_date))])])])])
                })], 2)]), d("overlay", {
                    attrs: {
                        visible: e.orderBook.loading
                    }
                })], 1)
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-list-header"
                }, [d("span", {
                    staticClass: "volume"
                }, [e._v("Volume")]), d("span", {
                    staticClass: "price"
                }, [e._v("Price")]), d("span", {
                    staticClass: "time"
                }, [e._v("Time")])])
            }
            ]
        }
    },
    848: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "trade-confirm modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", {
                    staticClass: "trade-type"
                }, [e._v("CONFIRM " + e._s(e.tradeType))]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [e.trade_message ? d("div", {
                    staticClass: "confirm"
                }, [e.trade_successful ? d("div", {
                    staticClass: "success"
                }, [d("span", {
                    staticClass: "title"
                }, [e._v("Successfully created transaction!")]), d("a", {
                    staticClass: "txn",
                    attrs: {
                        href: "https://www.etherscan.io/tx/" + e.trade_message,
                        target: "_blank"
                    }
                }, [e._v(e._s(e.trade_message))])]) : d("div", {
                    staticClass: "error"
                }, [d("span", {
                    staticClass: "title"
                }, [e._v("Error creating transaction:")]), d("span", {
                    staticClass: "error-message"
                }, [e._v(e._s(e.trade_message))])])]) : d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Amount to " + e._s(e.tradeType) + " (" + e._s(e.token.name) + ")")]), d("span", {
                    staticClass: "max",
                    on: {
                        click: function(a) {
                            e.maxAmount()
                        }
                    }
                }, [e._v("(max)")])]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.amount,
                        expression: "amount"
                    }],
                    attrs: {
                        min: "0",
                        type: "number"
                    },
                    domProps: {
                        value: e.amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Price (" + e._s(e.token.name) + " / ETH)")])]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.tradeOrder.price,
                        expression: "tradeOrder.price"
                    }],
                    attrs: {
                        disabled: "disabled"
                    },
                    domProps: {
                        value: e.tradeOrder.price
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.tradeOrder, "price", a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "field fee"
                }, [d("div", {
                    staticClass: "info"
                }, ["sell" === e.tradeType ? d("span", [e._v("Fee (" + e._s(e.token.name) + ")")]) : d("span", [e._v("Fee (ETH)")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.fee.toFixed(10)))])])]), d("div", {
                    staticClass: "field order"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Order (ETH)")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.total.toFixed(10)))])])]), d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "button",
                    class: {
                        sell: "sell" === e.tradeType
                    },
                    on: {
                        click: function(a) {
                            e.submitTrade()
                        }
                    }
                }, [d("span", [e._v(e._s(e.tradeType) + " " + e._s(e.amount) + " " + e._s(e.token.name) + " @ " + e._s(e.tradeOrder.price) + " ETH")])])])])]), d("overlay", {
                    attrs: {
                        visible: e.tradeConfirm.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    849: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "depth-chart component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("DEPTH CHART")]), d("div", {
                    staticClass: "left"
                }, [d("div", {
                    staticClass: "option-container"
                }, [d("span", [e._v("Percent")]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.agg,
                        expression: "agg"
                    }],
                    attrs: {
                        type: "number",
                        min: "10"
                    },
                    domProps: {
                        value: e.agg
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.agg = a.target.value)
                        }
                    }
                })])])]), d("div", {
                    staticClass: "body"
                }, [d("div", {
                    ref: "depth_chart_container",
                    staticClass: "chart-container",
                    attrs: {
                        id: "depth-chart-container"
                    }
                })]), d("overlay", {
                    attrs: {
                        visible: e.depthChart.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    850: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-confirm modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", {
                    staticClass: "trade-type"
                }, [e._v("CONFIRM " + e._s(e.orderForm.order_type.toUpperCase()) + " ORDER")]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [e.response ? d("div", {
                    staticClass: "confirm"
                }, [d("span", {
                    staticClass: "title"
                }, [e._v(e._s(e.order_message))])]) : d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Amount to " + e._s(e.orderForm.order_type.toUpperCase()) + " (" + e._s(e.token.name) + ")")])]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.orderForm.volume,
                        expression: "orderForm.volume"
                    }],
                    attrs: {
                        disabled: "disabled"
                    },
                    domProps: {
                        value: e.orderForm.volume
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.orderForm, "volume", a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Price (" + e._s(e.token.name) + " / ETH)")])]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.orderForm.price,
                        expression: "orderForm.price"
                    }],
                    attrs: {
                        disabled: "disabled"
                    },
                    domProps: {
                        value: e.orderForm.price
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.orderForm, "price", a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "field fee"
                }, [d("div", {
                    staticClass: "info"
                }, ["sell" === e.orderForm.order_type ? d("span", [e._v("Fee (" + e._s(e.token.name) + ")")]) : d("span", [e._v("Fee (ETH)")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s(e.fee.toFixed(10)))])])]), d("div", {
                    staticClass: "field order"
                }, [d("div", {
                    staticClass: "info"
                }, [d("span", [e._v("Order (ETH)")]), d("span", {
                    staticClass: "amount"
                }, [e._v(e._s((e.orderForm.price * e.orderForm.volume).toFixed(10)))])])]), d("div", {
                    staticClass: "field"
                }, [d("div", {
                    staticClass: "button",
                    class: {
                        sell: "sell" === e.orderForm.order_type
                    },
                    on: {
                        click: function(a) {
                            e.submitOrder()
                        }
                    }
                }, [d("span", [e._v(e._s(e.orderForm.order_type.toUpperCase()) + " " + e._s(e.orderForm.volume) + " " + e._s(e.token.name) + " @ " + e._s(e.orderForm.price) + " ETH")])])])])]), d("overlay", {
                    attrs: {
                        visible: e.orderConfirm.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    851: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.modalLoader.current_modal ? d("div", {
                    ref: "modal_loader",
                    staticClass: "modal-loader",
                    on: {
                        click: e.close
                    }
                }, [d("div", {
                    ref: "modal_container",
                    staticClass: "modal-container"
                }, ["DepositModal" === e.modalLoader.current_modal ? d("DepositModal") : e._e(), "WithdrawModal" === e.modalLoader.current_modal ? d("WithdrawModal") : e._e(), "OrderModal" === e.modalLoader.current_modal ? d("OrderModal") : e._e(), "LoadingOverlay" === e.modalLoader.current_modal ? d("LoadingOverlay") : e._e(), "TradeConfirmModal" === e.modalLoader.current_modal ? d("TradeConfirmModal") : e._e(), "OrderConfirmModal" === e.modalLoader.current_modal ? d("OrderConfirmModal") : e._e(), "DonateModal" === e.modalLoader.current_modal ? d("DonateModal") : e._e()], 1)]) : e._e()])
            },
            staticRenderFns: []
        }
    },
    852: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    attrs: {
                        id: "navbar"
                    }
                }, [d("div", {
                    staticClass: "left"
                }, [d("router-link", {
                    staticClass: "brand",
                    attrs: {
                        to: {
                            name: "home"
                        },
                        tag: "span"
                    }
                }, [d("span", {
                    staticClass: "delta"
                }, [e._v("Amis")]), d("span", {
                    staticClass: "dax"
                }, [e._v("DAX")])]), "home" != e.$route.name ? d("div", {
                    staticClass: "break"
                }) : e._e(), "home" != e.$route.name ? d("div", {
                    staticClass: "token-select"
                }, [d("input", {
                    domProps: {
                        value: e.token_filter
                    },
                    on: {
                        focus: function(a) {
                            e.tokenSelectActive = !0
                        },
                        blur: function(a) {
                            e.tokenSelectActive = !1
                        },
                        input: e.onFilterChange
                    }
                }), d("i", {
                    staticClass: "material-icons"
                }, [e._v("arrow_drop_down")]), e.tokenSelectActive ? d("div", {
                    staticClass: "type-ahead"
                }, e._l(e.tokens, function(a) {
                    return d("div", {
                        staticClass: "token",
                        on: {
                            mousedown: function(d) {
                                e.onTokenSelect(a)
                            }
                        }
                    }, [d("span", [e._v(e._s(a.name))])])
                })) : e._e()]) : e._e(), "home" != e.$route.name ? d("div", {
                    staticClass: "break"
                }) : e._e(), e.trades && e.trades.length && "home" != e.$route.name ? d("div", {
                    staticClass: "price-container"
                }, [d("span", {
                    staticClass: "price"
                }, [e._v(e._s(e.trades[0].price))])]) : e._e()], 1), "home" != e.$route.name ? d("div", {
                    staticClass: "center"
                }, [d("div", {
                    staticClass: "current-address"
                }, [d("span", {
                    staticClass: "address"
                }, [e._v(e._s(e.address))])])]) : e._e(), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "version"
                }, [d("span", [e._v("v0.1.0")]), d("div", {
                    staticClass: "donate button",
                    on: {
                        click: function(a) {
                            e.openDonateModal()
                        }
                    }
                }, [e._v("Donate")])])])])
            },
            staticRenderFns: []
        }
    },
    853: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-history component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", {
                    class: {
                        active: e.openOrders
                    },
                    on: {
                        click: function(a) {
                            e.openOrders = !0
                        }
                    }
                }, [e._v("OPEN ORDERS")]), d("span", {
                    class: {
                        active: !e.openOrders
                    },
                    on: {
                        click: function(a) {
                            e.openOrders = !1
                        }
                    }
                }, [e._v("RECENT TRADES")])]), d("div", {
                    staticClass: "body"
                }, [e.openOrders ? d("open-order-list", {
                    attrs: {
                        orders: e.orders
                    }
                }) : e._e(), e.openOrders ? e._e() : d("recent-trades-list", {
                    attrs: {
                        trades: e.trades
                    }
                })], 1), d("overlay", {
                    attrs: {
                        visible: e.orderHistory.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    854: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "depth"
                }, [d("div", {
                    ref: "depth_chart_container",
                    staticClass: "chart-container",
                    attrs: {
                        id: "depth-chart-container"
                    }
                })])
            },
            staticRenderFns: []
        }
    },
    855: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    attrs: {
                        id: "home-page"
                    }
                }, [d("div", {
                    staticClass: "background"
                }, [d("depth-chart", {
                    attrs: {
                        buys: e.buys,
                        sells: e.sells
                    }
                })], 1), d("div", {
                    staticClass: "section"
                }, [d("h1", {
                    staticClass: "brand",
                    attrs: {
                        to: {
                            name: "home"
                        },
                        tag: "span"
                    }
                }, [d("span", {
                    staticClass: "delta"
                }, [e._v("Amis")]), d("span", {
                    staticClass: "dax"
                }, [e._v("DAX")])]), e._m(0)]), d("div", {
                    staticClass: "visit section"
                }, [d("router-link", {
                    staticClass: "visit-button",
                    attrs: {
                        to: {
                            name: "exchange",
                            params: {
                                token: "MOV"
                            }
                        },
                        tag: "span"
                    }
                }, [e._v("View Exchange")])], 1)])
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "box"
                }, [d("p", [e._v("AmisDax is a new UI for EtherDelta, inspired by GDAX. All orders use EtherDelta's decentralized contract and API")]), d("p", [e._v("An attempt to Provide the Ethereum community with a more intuitive way to interact with the EtherDelta exchange")]), d("p", [e._v("Currently only MetaMask compatible")]), d("p", [e._v("Software is provided as is, WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY")]), d("p", [e._v("or FITNESS FOR A PARTICULAR PURPOSE. Use at your own risk.")]), d("p", [e._v("Report an Issue or ask a Question - "), d("a", {
                    attrs: {
                        href: "https://github.com/AmisDEX/amisdax/issues",
                        target: "_blank"
                    }
                }, [e._v(" https://github.com/AmisDEX/amisdax/issues")])])])
            }
            ]
        }
    },
    856: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "deposit modal component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("DEPOSIT")]), d("i", {
                    staticClass: "material-icons",
                    on: {
                        click: function(a) {
                            e.close(null)
                        }
                    }
                }, [e._v("close")])]), d("div", {
                    staticClass: "body"
                }, [e.deposited || e.error ? d("div", {
                    staticClass: "deposited"
                }, [e.error ? d("div", {
                    staticClass: "error"
                }, [d("p", [e._v("Error:")]), d("p", [e._v(e._s(e.error_message))])]) : d("div", {
                    staticClass: "success"
                }, [d("span", {
                    staticClass: "title"
                }, [e._v("Successfully created transaction!")]), d("a", {
                    staticClass: "txn",
                    attrs: {
                        href: "https://www.etherscan.io/tx/" + e.txn,
                        target: "_blank"
                    }
                }, [e._v(e._s(e.txn))])])]) : d("div", {
                    staticClass: "form"
                }, [d("div", {
                    staticClass: "eth balance-row"
                }, [d("div", {
                    staticClass: "left"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v("ETH")]), d("span", {
                    staticClass: "balance"
                }, [e._v(e._s(e.wallet.eth_balance))]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.eth_amount,
                        expression: "eth_amount"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        step: "0.01",
                        type: "number"
                    },
                    domProps: {
                        value: e.eth_amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.eth_amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "button",
                    on: {
                        click: function(a) {
                            e.depositEth()
                        }
                    }
                }, [e._v(" DEPOSIT")])])]), d("div", {
                    staticClass: "alt balance-row"
                }, [d("div", {
                    staticClass: "left"
                }, [d("span", {
                    staticClass: "currency"
                }, [e._v(e._s(e.token.name))]), d("span", {
                    staticClass: "balance"
                }, [e._v(e._s(e.wallet.current_token_balance))]), d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.token_amount,
                        expression: "token_amount"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        step: "0.01",
                        type: "number"
                    },
                    domProps: {
                        value: e.token_amount
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || (e.token_amount = a.target.value)
                        }
                    }
                })]), d("div", {
                    staticClass: "right"
                }, [d("div", {
                    staticClass: "button",
                    on: {
                        click: function(a) {
                            e.depositToken()
                        }
                    }
                }, [e._v(" DEPOSIT")])])])])]), d("overlay", {
                    attrs: {
                        visible: e.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    857: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    attrs: {
                        id: "app"
                    }
                }, ["exchange" == e.$route.name ? d("div", {
                    staticClass: "navbar-container"
                }, [d("navbar")], 1) : e._e(), d("div", {
                    staticClass: "router-view-container"
                }, [d("router-view")], 1), d("modal-loader"), d("toast")], 1)
            },
            staticRenderFns: []
        }
    },
    858: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    attrs: {
                        id: "exchange-page"
                    }
                }, [d("div", {
                    staticClass: "left-container"
                }, [d("balance", {
                    attrs: {
                        token: e.token,
                        current_wallet: e.current_wallet,
                        ed_wallet: e.ed_wallet
                    }
                }), d("order-form", {
                    attrs: {
                        token: e.token
                    }
                })], 1), d("div", {
                    staticClass: "orders-container"
                }, [d("order-book", {
                    attrs: {
                        buys: e.buy_orders,
                        sells: e.sell_orders
                    }
                })], 1), d("div", {
                    staticClass: "depth-chart-container"
                }, [d("depth-chart", {
                    attrs: {
                        buys: e.buy_orders,
                        sells: e.sell_orders
                    }
                })], 1), d("div", {
                    staticClass: "price-chart-container"
                }, [d("price-chart", {
                    attrs: {
                        trades: e.trades
                    }
                }), d("order-history", {
                    attrs: {
                        open_buys: e.user_buy_orders,
                        open_sells: e.user_sell_orders,
                        trades: e.recent_trades
                    }
                })], 1), d("div", {
                    staticClass: "trade-history-container"
                }, [d("trade-history", {
                    attrs: {
                        trades: e.trades
                    }
                })], 1)])
            },
            staticRenderFns: []
        }
    },
    859: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement;
                e._self._c;
                return e._m(0)
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "loading-overlay-container"
                }, [d("div", {
                    staticClass: "triangles"
                }, [d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                }), d("div", {
                    staticClass: "tri"
                }), d("div", {
                    staticClass: "tri invert"
                })])])
            }
            ]
        }
    },
    860: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement;
                return (e._self._c || a)("div", {
                    attrs: {
                        id: "protfolio-page"
                    }
                })
            },
            staticRenderFns: []
        }
    },
    861: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "open-order-list"
                }, [e._m(0), d("div", {
                    staticClass: "order-list"
                }, e._l(e.orders, function(a) {
                    return e.orders.length ? d("div", {
                        staticClass: "order-container"
                    }, [d("div", {
                        staticClass: "order",
                        class: {
                            buy: "buy" == e.side(a),
                            sell: "sell" == e.side(a)
                        }
                    }, [d("div", {
                        staticClass: "info type-container"
                    }, [d("span", {
                        staticClass: "type"
                    }, [e._v(e._s(e.side(a)))])]), d("div", {
                        staticClass: "info volume-container"
                    }, [d("span", {
                        staticClass: "volume"
                    }, [e._v(e._s(a.amountFilled.toFixed(3)) + " / " + e._s(a.amount.toFixed(3)))])]), d("div", {
                        staticClass: "info price-container"
                    }, [d("span", {
                        staticClass: "price"
                    }, [e._v(e._s(e.priceFormat(a.price)))])]), d("div", {
                        staticClass: "info time-container"
                    }, [d("span", {
                        staticClass: "time"
                    }, [e._v(e._s(e.timeFormat(a.updated)))])]), d("div", {
                        staticClass: "info cancel-container"
                    }, [d("span", {
                        staticClass: "cancel",
                        on: {
                            click: function(d) {
                                e.cancel(a)
                            }
                        }
                    }, [e._v("CANCEL")])])])]) : e._e()
                }))])
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-list-header"
                }, [d("span", {
                    staticClass: "Type"
                }, [e._v("Type")]), d("span", {
                    staticClass: "volume"
                }, [e._v("Filled / Total")]), d("span", {
                    staticClass: "price"
                }, [e._v("Price")]), d("span", {
                    staticClass: "time"
                }, [e._v("Time")]), d("span", {
                    staticClass: "cancel"
                }, [e._v("Cancel")])])
            }
            ]
        }
    },
    862: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "trade-history component"
                }, [e._m(0), d("div", {
                    staticClass: "body"
                }, [e._m(1), d("div", {
                    staticClass: "trade-list"
                }, e._l(e.trades, function(a) {
                    return d("div", {
                        staticClass: "trade-container"
                    }, [d("div", {
                        staticClass: "trade",
                        class: {
                            buy: "buy" == a.side,
                            sell: "sell" == a.side
                        },
                        on: {
                            click: function(d) {
                                e.goToTx(a.txHash)
                            }
                        }
                    }, [d("div", {
                        staticClass: "info volume-container",
                        style: e.tradeStyle(a)
                    }, [d("span", {
                        staticClass: "volume"
                    }, [e._v(e._s(a.amount.toFixed(3)))])]), d("div", {
                        staticClass: "info price-container"
                    }, [d("span", {
                        staticClass: "price"
                    }, [e._v(e._s(a.price.toFixed(10)))])]), d("div", {
                        staticClass: "info time-container"
                    }, [d("span", {
                        staticClass: "time"
                    }, [e._v(e._s(a.formatted_date))])])])])
                }))]), d("overlay", {
                    attrs: {
                        visible: e.tradeHistory.loading
                    }
                })], 1)
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("TRADE HISTORY")])])
            }
            , function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "trade-list-header"
                }, [d("span", {
                    staticClass: "volume"
                }, [e._v("Volume")]), d("span", {
                    staticClass: "price"
                }, [e._v("Price")]), d("span", {
                    staticClass: "time"
                }, [e._v("Time")])])
            }
            ]
        }
    },
    863: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "price-chart component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", [e._v("PRICE CHART")]), d("div", {
                    staticClass: "left"
                }, [d("div", {
                    staticClass: "option-container"
                }, [d("span", {
                    on: {
                        click: function(a) {
                            e.reset()
                        }
                    }
                }, [e._v("RESET")])])])]), d("div", {
                    staticClass: "body"
                }, [d("div", {
                    ref: "price_chart_container",
                    staticClass: "chart-container",
                    attrs: {
                        id: "price-chart-container"
                    }
                })]), d("overlay", {
                    attrs: {
                        visible: e.priceChart.loading
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    },
    864: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "recent-trades-list"
                }, [e._m(0), d("div", {
                    staticClass: "order-list"
                }, e._l(e.trades, function(a) {
                    return e.trades.length ? d("div", {
                        staticClass: "order-container"
                    }, [d("div", {
                        staticClass: "order",
                        class: {
                            buy: "buy" == a.side,
                            sell: "sell" == a.side
                        }
                    }, [d("div", {
                        staticClass: "info type-container"
                    }, [d("span", {
                        staticClass: "type"
                    }, [e._v(e._s(a.side))])]), d("div", {
                        staticClass: "info volume-container"
                    }, [d("span", {
                        staticClass: "volume"
                    }, [e._v(e._s(parseFloat(a.amount).toFixed(3)))])]), d("div", {
                        staticClass: "info price-container"
                    }, [d("span", {
                        staticClass: "price"
                    }, [e._v(e._s(e.priceFormat(a.price)))])]), d("div", {
                        staticClass: "info time-container"
                    }, [d("span", {
                        staticClass: "time"
                    }, [e._v(e._s(e.timeFormat(a.date)))])])])]) : e._e()
                }))])
            },
            staticRenderFns: [function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-list-header"
                }, [d("span", {
                    staticClass: "Type"
                }, [e._v("Type")]), d("span", {
                    staticClass: "volume"
                }, [e._v("Volume")]), d("span", {
                    staticClass: "price"
                }, [e._v("Price")]), d("span", {
                    staticClass: "time"
                }, [e._v("Time")])])
            }
            ]
        }
    },
    865: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("div", {
                    staticClass: "order-form component"
                }, [d("div", {
                    staticClass: "header"
                }, [d("span", {
                    class: {
                        active: !e.orderForm.trade_order
                    }
                }, [e._v("PLACE ORDER")])]), d("div", {
                    staticClass: "body"
                }, [d("div", {
                    staticClass: "buy-or-sell"
                }, [d("div", {
                    staticClass: "button buy",
                    class: {
                        active: "buy" == e.orderForm.order_type
                    },
                    on: {
                        click: function(a) {
                            e.orderForm.order_type = "buy"
                        }
                    }
                }, [d("span", [e._v("BUY")])]), d("div", {
                    staticClass: "button sell",
                    class: {
                        active: "sell" == e.orderForm.order_type
                    },
                    on: {
                        click: function(a) {
                            e.orderForm.order_type = "sell"
                        }
                    }
                }, [d("span", [e._v("SELL")])])]), d("div", {
                    staticClass: "price-container"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Price")]), d("div", {
                    staticClass: "input-container"
                }, [d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.orderForm.price,
                        expression: "orderForm.price"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        type: "number"
                    },
                    domProps: {
                        value: e.orderForm.price
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.orderForm, "price", a.target.value)
                        }
                    }
                }), d("span", {
                    staticClass: "info"
                }, [e._v("ETH")])])]), d("div", {
                    staticClass: "amount-container"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Amount")]), d("div", {
                    staticClass: "input-container"
                }, [d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.orderForm.volume,
                        expression: "orderForm.volume"
                    }],
                    attrs: {
                        placeholder: "0.00",
                        type: "number"
                    },
                    domProps: {
                        value: e.orderForm.volume
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.orderForm, "volume", a.target.value)
                        }
                    }
                }), d("span", {
                    staticClass: "info"
                }, [e._v(e._s(e.token.name))])])]), d("div", {
                    staticClass: "total-container"
                }, [d("span", {
                    staticClass: "info"
                }, [e._v("TOTAL")]), d("span", {
                    staticClass: "eth"
                }, [e._v("(ETH)")]), d("span", {
                    staticClass: "total"
                }, [e._v(e._s(e.total))])]), d("div", {
                    staticClass: "expires-container"
                }, [d("span", {
                    staticClass: "label"
                }, [e._v("Expires")]), d("div", {
                    staticClass: "input-container"
                }, [d("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.orderForm.expires,
                        expression: "orderForm.expires"
                    }],
                    attrs: {
                        placeholder: "number of blocks",
                        type: "number"
                    },
                    domProps: {
                        value: e.orderForm.expires
                    },
                    on: {
                        input: function(a) {
                            a.target.composing || e.$set(e.orderForm, "expires", a.target.value)
                        }
                    }
                })])]), d("div", {
                    staticClass: "place-order-container"
                }, [e.orderForm.trade_order ? d("div", {
                    staticClass: "button trade",
                    class: {
                        sell: "sell" == e.orderForm.order_type,
                        disabled: !e.validOrder
                    },
                    on: {
                        click: function(a) {
                            e.submitTrade()
                        }
                    }
                }, [d("span", [e._v("PLACE " + e._s(e.orderForm.order_type.toUpperCase()) + " TRADE")])]) : d("div", {
                    staticClass: "button place-order",
                    class: {
                        sell: "sell" == e.orderForm.order_type,
                        disabled: !e.validOrder
                    },
                    on: {
                        click: function(a) {
                            e.submitOrder()
                        }
                    }
                }, [d("span", [e._v("PLACE " + e._s(e.orderForm.order_type.toUpperCase()) + " ORDER")])])])])])
            },
            staticRenderFns: []
        }
    },
    866: function(e, a) {
        e.exports = {
            render: function() {
                var e = this
                  , a = e.$createElement
                  , d = e._self._c || a;
                return d("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [e.toast.visible ? d("div", {
                    staticClass: "toast"
                }, [d("span", [e._v(e._s(e.toast.message))])]) : e._e()])
            },
            staticRenderFns: []
        }
    },
    870: function(e, a) {
        e.exports = {
            contractEtherDelta: "smart_contract/etherdelta.sol",
            contractToken: "smart_contract/token.sol",
            contractReserveToken: "smart_contract/reservetoken.sol",
            contractEtherDeltaAddrs: [{
                addr: "0x8d12a197cb00d4747a1fe03395095ce2a5cc6819",
                info: "Deployed 02/09/2017 -- THE CURRENT SMART CONTRACT"
            }, {
                addr: "0x373c55c277b866a69dc047cad488154ab9759466",
                info: "Deployed 10/24/2016 -- OLD, DO NOT USE"
            }, {
                addr: "0x4aea7cf559f67cedcad07e12ae6bc00f07e8cf65",
                info: "Deployed 08/30/2016 -- OLD, DO NOT USE"
            }, {
                addr: "0x2136bbba2edca21afdddee838fff19ea70d10f03",
                info: "Deployed 08/03/2016 -- OLD, DO NOT USE"
            }, {
                addr: "0xc6b330df38d6ef288c953f1f2835723531073ce2",
                info: "Deployed 07/08/2016 -- OLD, DO NOT USE"
            }],
            ethTestnet: !1,
            ethChainId: 1,
            ethProvider: "http://localhost:8545",
            ethGasPrice: 4e9,
            ethAddr: "0x0000000000000000000000000000000000000000",
            ethAddrPrivateKey: "",
            gasApprove: 25e4,
            gasDeposit: 25e4,
            gasWithdraw: 25e4,
            gasTrade: 25e4,
            gasOrder: 25e4,
            minOrderSize: .001,
            apiServer: ["https://api.etherdelta.com"],
            socketServers: ["https://socket01.etherdelta.com", "https://socket02.etherdelta.com", "https://socket03.etherdelta.com", "https://socket04.etherdelta.com", "https://api.rektex.io"],
            userCookie: "EtherDelta",
            eventsCacheCookie: "EtherDelta_eventsCache",
            ordersCacheCookie: "EtherDelta_ordersCache",
            etherscanAPIKey: "GCGR1C9I17TYIRNYUDDEIJH1K5BRPH4UDE",
            ledgerPath: "m/44'/60'/0'/0",
            tokens: [{
                addr: "0x0000000000000000000000000000000000000000",
                name: "ETH",
                decimals: 18
            }, {
                addr: "0x949bed886c739f1a3273629b3320db0c5024c719",
                name: "AMIS",
                decimals: 9
            }, {
                addr: "0xd8912c10681d8b21fd3742244f44658dba12264e",
                name: "PLU",
                decimals: 18
            }, {
                addr: "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",
                name: "1ST",
                decimals: 18
            }, {
                addr: "0x936f78b9852d12f5cb93177c1f84fb8513d06263",
                name: "GNTW",
                decimals: 18
            }, {
                addr: "0x01afc37f4f85babc47c0e2d0eababc7fb49793c8",
                name: "GNTM",
                decimals: 18
            }, {
                addr: "0xa74476443119a942de498590fe1f2454d7d4ac0d",
                name: "GNT",
                decimals: 18
            }, {
                addr: "0x5c543e7ae0a1104f78406c340e9c64fd9fce5170",
                name: "VSL",
                decimals: 18
            }, {
                addr: "0xac709fcb44a43c35f0da4e3163b117a17f3770f5",
                name: "ARC",
                decimals: 18
            }, {
                addr: "0x14f37b574242d366558db61f3335289a5035c506",
                name: "HKG",
                decimals: 3
            }, {
                addr: "0x888666ca69e0f178ded6d75b5726cee99a87d698",
                name: "ICN",
                decimals: 18
            }, {
                addr: "0xe94327d07fc17907b4db788e5adf2ed424addff6",
                name: "REP",
                decimals: 18
            }, {
                addr: "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
                name: "SNGLS",
                decimals: 0
            }, {
                addr: "0x4df812f6064def1e5e029f1ca858777cc98d2d81",
                name: "XAUR",
                decimals: 8
            }, {
                addr: "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
                name: "MKR",
                decimals: 18
            }, {
                addr: "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
                name: "DGD",
                decimals: 9
            }, {
                addr: "0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd",
                name: "EPOSY",
                decimals: 18
            }, {
                addr: "0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0",
                name: "EPOSN",
                decimals: 18
            }, {
                addr: "0x55e7c4a77821d5c50b4570b08f9f92896a25e012",
                name: "P+",
                decimals: 0
            }, {
                addr: "0x45e42d659d9f9466cd5df622506033145a9b89bc",
                name: "NXC",
                decimals: 3
            }, {
                addr: "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
                name: "DCN",
                decimals: 0
            }, {
                addr: "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
                name: "SWT",
                decimals: 18
            }, {
                addr: "0xb802b24e0637c2b87d2e8b7784c055bbe921011a",
                name: "EMV",
                decimals: 2
            }, {
                addr: "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53",
                name: "TIME",
                decimals: 8
            }, {
                addr: "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1",
                name: "MLN",
                decimals: 18
            }, {
                addr: "0x168296bb09e24a88805cb9c33356536b980d3fc5",
                name: "RHOC",
                decimals: 8
            }, {
                addr: "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
                name: "EDG",
                decimals: 0
            }, {
                addr: "0xf7b098298f7c69fc14610bf71d5e02c60792894c",
                name: "GUP",
                decimals: 3
            }, {
                addr: "0x607f4c5bb672230e8672085532f7e901544a7375",
                name: "RLC",
                decimals: 9
            }, {
                addr: "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
                name: "TRST",
                decimals: 6
            }, {
                addr: "0x2e071d2966aa7d8decb1005885ba1977d6038a65",
                name: "DICE",
                decimals: 16
            }, {
                addr: "0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c",
                name: "TAAS",
                decimals: 6
            }, {
                addr: "0x6810e776880c02933d47db1b9fc05908e5386b96",
                name: "GNO",
                decimals: 18
            }, {
                addr: "0x667088b212ce3d06a1b553a7221e1fd19000d9af",
                name: "WINGS",
                decimals: 18
            }, {
                addr: "0xfa05a73ffe78ef8f1a739473e462c54bae6567d9",
                name: "LUN",
                decimals: 18
            }, {
                addr: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
                name: "TKN",
                decimals: 8
            }, {
                addr: "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
                name: "HMQ",
                decimals: 8
            }, {
                addr: "0x960b236a07cf122663c4303350609a66a7b288c0",
                name: "ANT",
                decimals: 18
            }, {
                addr: "0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468",
                name: "SGT",
                decimals: 1
            }, {
                addr: "0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac",
                name: "BCAP",
                decimals: 0
            }, {
                addr: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
                name: "BAT",
                decimals: 18
            }, {
                addr: "0xa645264c5603e96c3b0b078cdab68733794b0a71",
                name: "MYST",
                decimals: 8
            }, {
                addr: "0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf",
                name: "VSMOLD",
                decimals: 0
            }, {
                addr: "0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e",
                name: "CFI",
                decimals: 18
            }, {
                addr: "0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374",
                name: "VERI",
                decimals: 18
            }, {
                addr: "0x40395044ac3c0c57051906da938b54bd6557f212",
                name: "MGO",
                decimals: 8
            }, {
                addr: "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
                name: "PTOY",
                decimals: 8
            }, {
                addr: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
                name: "BNT",
                decimals: 18
            }, {
                addr: "0x697beac28B09E122C4332D163985e8a73121b97F",
                name: "QRL",
                decimals: 8
            }, {
                addr: "0xae616e72d3d89e847f74e8ace41ca68bbf56af79",
                name: "GOOD",
                decimals: 6
            }, {
                addr: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
                name: "SNT",
                decimals: 18
            }, {
                addr: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
                name: "SONM",
                decimals: 18
            }, {
                addr: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
                name: "NMR",
                decimals: 18
            }, {
                addr: "0x93e682107d1e9defb0b5ee701c71707a4b2e46bc",
                name: "MCAP",
                decimals: 8
            }, {
                addr: "0xb97048628db6b661d4c2aa833e95dbe1a905b280",
                name: "PAY",
                decimals: 18
            }, {
                addr: "0x5a84969bb663fb64f6d015dcf9f622aedc796750",
                name: "ICE",
                decimals: 18
            }, {
                addr: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
                name: "PPT",
                decimals: 8
            }, {
                addr: "0xbbb1bd2d741f05e144e6c4517676a15554fd4b8d",
                name: "FUNOLD",
                decimals: 8
            }, {
                addr: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
                name: "FUN",
                decimals: 8
            }, {
                addr: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
                name: "ADT",
                decimals: 9
            }, {
                addr: "0xce5c603c78d047ef43032e96b5b785324f753a4f",
                name: "E4ROW",
                decimals: 2
            }, {
                addr: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
                name: "STORJ",
                decimals: 8
            }, {
                addr: "0xcfb98637bcae43c13323eaa1731ced2b716962fd",
                name: "NET",
                decimals: 18
            }, {
                addr: "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
                name: "EOS",
                decimals: 18
            }, {
                addr: "0x4470bb87d77b963a013db939be332f927f2b992e",
                name: "ADX",
                decimals: 4
            }, {
                addr: "0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed",
                name: "DRP",
                decimals: 2
            }, {
                addr: "0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2",
                name: "BET",
                decimals: 18
            }, {
                addr: "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02",
                name: "PLBT",
                decimals: 6
            }, {
                addr: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
                name: "OMG",
                decimals: 18
            }, {
                addr: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
                name: "BNB",
                decimals: 18
            }, {
                addr: "0x814964b1bceaf24e26296d031eadf134a2ca4105",
                name: "NEWB",
                decimals: 0
            }, {
                addr: "0xb24754be79281553dc1adc160ddf5cd9b74361a4",
                name: "XRL",
                decimals: 9
            }, {
                addr: "0x386467f1f3ddbe832448650418311a479eecfc57",
                name: "MBRS",
                decimals: 0
            }, {
                addr: "0xf433089366899d83a9f26a773d59ec7ecf30355e",
                name: "MTL",
                decimals: 8
            }, {
                addr: "0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d",
                name: "FUCKOLD",
                decimals: 4
            }, {
                addr: "0xab16e0d25c06cb376259cc18c1de4aca57605589",
                name: "FUCK",
                decimals: 4
            }, {
                addr: "0x5c6183d10a00cd747a6dbb5f658ad514383e9419",
                name: "NXXOLD",
                decimals: 8
            }, {
                addr: "0xd5b9a2737c9b2ff35ecb23b884eb039303bbbb61",
                name: "BTH",
                decimals: 18
            }, {
                addr: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
                name: "PLR",
                decimals: 18
            }, {
                addr: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
                name: "CVC",
                decimals: 8
            }, {
                addr: "0xbfa4d71a51b9e0968be4bc299f8ba6cbb2f86789",
                name: "MAYY",
                decimals: 18
            }, {
                addr: "0xab130bc7ff83192656a4b3079741c296615899c0",
                name: "MAYN",
                decimals: 18
            }, {
                addr: "0xe2e6d4be086c6938b53b22144855eef674281639",
                name: "LNK",
                decimals: 18
            }, {
                addr: "0x2bdc0d42996017fce214b21607a515da41a9e0c5",
                name: "SKIN",
                decimals: 6
            }, {
                addr: "0x8b9c35c79af5319c70dd9a3e3850f368822ed64e",
                name: "DGT",
                decimals: 18
            }, {
                addr: "0xa578acc0cb7875781b7880903f4594d13cfa8b98",
                name: "ECN",
                decimals: 2
            }, {
                addr: "0x660b612ec57754d949ac1a09d0c2937a010dee05",
                name: "BCD",
                decimals: 6
            }, {
                addr: "0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be",
                name: "DEX",
                decimals: 2
            }, {
                addr: "0xea1f346faf023f974eb5adaf088bbcdf02d761f4",
                name: "TIX",
                decimals: 18
            }, {
                addr: "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
                name: "CDT",
                decimals: 18
            }, {
                addr: "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
                name: "IXT",
                decimals: 8
            }, {
                addr: "0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb",
                name: "AIRA",
                decimals: 0
            }, {
                addr: "0x56ba2ee7890461f463f7be02aac3099f6d5811a8",
                name: "CAT",
                decimals: 18
            }, {
                addr: "0x701c244b988a513c945973defa05de933b23fe1d",
                name: "OAX",
                decimals: 18
            }, {
                addr: "0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5",
                name: "CLRT",
                decimals: 18
            }, {
                addr: "0x68aa3f232da9bdc2343465545794ef3eea5209bd",
                name: "MSP",
                decimals: 18
            }, {
                addr: "0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1",
                name: "BAS",
                decimals: 8
            }, {
                addr: "0xdc0c22285b61405aae01cba2530b6dd5cd328da7",
                name: "KTN",
                decimals: 6
            }, {
                addr: "0xdd6bf56ca2ada24c683fac50e37783e55b57af9f",
                name: "BNC",
                decimals: 12
            }, {
                addr: "0x0abdace70d3790235af448c88547603b945604ea",
                name: "DNT",
                decimals: 18
            }, {
                addr: "0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891",
                name: "BRAT",
                decimals: 8
            }, {
                addr: "0x5af2be193a6abca9c8817001f45744777db30756",
                name: "BQX",
                decimals: 8
            }, {
                addr: "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
                name: "STX",
                decimals: 18
            }, {
                addr: "0x88fcfbc22c6d3dbaa25af478c578978339bde77a",
                name: "FYN",
                decimals: 18
            }, {
                addr: "0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be",
                name: "CREDO",
                decimals: 18
            }, {
                addr: "0x202e295df742befa5e94e9123149360db9d9f2dc",
                name: "NIH",
                decimals: 8
            }, {
                addr: "0x671abbe5ce652491985342e85428eb1b07bc6c64",
                name: "QAU",
                decimals: 8
            }, {
                addr: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
                name: "DENT",
                decimals: 8
            }, {
                addr: "0xbc7de10afe530843e71dfb2e3872405191e8d14a",
                name: "SHOUC",
                decimals: 18
            }, {
                addr: "0x2ca72c9699b92b47272c9716c664cad6167c80b0",
                name: "GUNS",
                decimals: 18
            }, {
                addr: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
                name: "SAN",
                decimals: 18
            }, {
                addr: "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
                name: "IND",
                decimals: 18
            }, {
                addr: "0xfb12e3cca983b9f59d90912fd17f8d745a8b2953",
                name: "LUCK",
                decimals: 0
            }, {
                addr: "0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3",
                name: "RIYA",
                decimals: 8
            }, {
                addr: "0xe41d2489571d322189246dafa5ebde1f4699f498",
                name: "ZRX",
                decimals: 18
            }, {
                addr: "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
                name: "MCO",
                decimals: 8
            }, {
                addr: "0x02b9806a64cb05f02aa8dcc1c178b88159a61304",
                name: "DEL",
                decimals: 18
            }, {
                addr: "0x46492473755e8df960f8034877f61732d718ce96",
                name: "STRC",
                decimals: 8
            }, {
                addr: "0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa",
                name: "GTKT",
                decimals: 0
            }, {
                addr: "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
                name: "POE",
                decimals: 8
            }, {
                addr: "0x38968746147bbaeb882f356ad9a57594bb158235",
                name: "BENJA",
                decimals: 8
            }, {
                addr: "0x814cafd4782d2e728170fda68257983f03321c58",
                name: "IDEA",
                decimals: 0
            }, {
                addr: "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda",
                name: "WTT",
                decimals: 0
            }, {
                addr: "0x5ddab66da218fb05dfeda07f1afc4ea0738ee234",
                name: "RARE",
                decimals: 8
            }, {
                addr: "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
                name: "SCL",
                decimals: 8
            }, {
                addr: "0xa7f976c360ebbed4465c2855684d1aae5271efa9",
                name: "TFL",
                decimals: 8
            }, {
                addr: "0x7654915a1b82d6d2d0afc37c52af556ea8983c7e",
                name: "IFT",
                decimals: 18
            }, {
                addr: "0x94298f1e0ab2dfad6eeffb1426846a3c29d98090",
                name: "MyB",
                decimals: 8
            }, {
                addr: "0x4355fc160f74328f9b383df2ec589bb3dfd82ba0",
                name: "OPT",
                decimals: 18
            }, {
                addr: "0x17fd666fa0784885fa1afec8ac624d9b7e72b752",
                name: "FLIK",
                decimals: 14
            }, {
                addr: "0xdab5dfa0966c3435da991b39d205c3ba1c64fe31",
                name: "MTP",
                decimals: 1
            }, {
                addr: "0x422866a8f0b032c5cf1dfbdef31a20f4509562b0",
                name: "ADST",
                decimals: 0
            }, {
                addr: "0x66497a283e0a007ba3974e837784c6ae323447de",
                name: "PT",
                decimals: 18
            }, {
                addr: "0x07d9e49ea402194bf48a8276dafb16e4ed633317",
                name: "DALC",
                decimals: 8
            }, {
                addr: "0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38",
                name: "DDF",
                decimals: 18
            }, {
                addr: "0xef68e7c694f40c8202821edf525de3782458639f",
                name: "LRC",
                decimals: 18
            }, {
                addr: "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
                name: "RVT",
                decimals: 18
            }, {
                addr: "0x8a187d5285d316bcbc9adafc08b51d70a0d8e000",
                name: "SIFT",
                decimals: 0
            }, {
                addr: "0x8effd494eb698cc399af6231fccd39e08fd20b15",
                name: "PIX",
                decimals: 0
            }, {
                addr: "0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657",
                name: "TOV",
                decimals: 0
            }, {
                addr: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
                name: "TNT",
                decimals: 8
            }, {
                addr: "0x96a65609a7b84e8842732deb08f56c3e21ac6f8a",
                name: "CTR",
                decimals: 18
            }, {
                addr: "0xe6923e9b56db1eed1c9f430ea761da7565e260fe",
                name: "FC",
                decimals: 2
            }, {
                addr: "0xd850942ef8811f2a866692a623011bde52a462c1",
                name: "VEN",
                decimals: 18
            }, {
                addr: "0x2160e6c0ae8ca7d62fe1f57fc049f8363283ff5f",
                name: "BPT",
                decimals: 18
            }, {
                addr: "0xf05a9382a4c3f29e2784502754293d88b835109c",
                name: "REX",
                decimals: 18
            }, {
                addr: "0x73dd069c299a5d691e9836243bcaec9c8c1d8734",
                name: "BTE",
                decimals: 8
            }, {
                addr: "0x1bcbc54166f6ba149934870b60506199b6c9db6d",
                name: "ROC",
                decimals: 10
            }, {
                addr: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
                name: "MANA",
                decimals: 18
            }, {
                addr: "0x27695e09149adc738a978e9a678f99e4c39e9eb9",
                name: "KICK",
                decimals: 8
            }, {
                addr: "0x4e260e3ca268e40133c84b142de73108a7c1ec99",
                name: "YC",
                decimals: 0
            }, {
                addr: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
                name: "MTH",
                decimals: 5
            }, {
                addr: "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
                name: "REAL",
                decimals: 18
            }, {
                addr: "0xe5a7c12972f3bbfe70ed29521c8949b8af6a0970",
                name: "BLX",
                decimals: 18
            }, {
                addr: "0x5cf4e9dfd975c52aa523fb5945a12235624923dc",
                name: "MPRM",
                decimals: 0
            }, {
                addr: "0x887834d3b8d450b6bab109c252df3da286d73ce4",
                name: "ATT",
                decimals: 18
            }, {
                addr: "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404",
                name: "SNC",
                decimals: 18
            }, {
                addr: "0x138a8752093f4f9a79aaedf48d4b9248fab93c9c",
                name: "MCI",
                decimals: 18
            }, {
                addr: "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
                name: "WTC",
                decimals: 18
            }, {
                addr: "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
                name: "AE",
                decimals: 18
            }, {
                addr: "0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22",
                name: "CCT",
                decimals: 18
            }, {
                addr: "0xc301b935d0fd1f5d0b6d68491deca39d44e2da6e",
                name: "STAR",
                decimals: 18
            }, {
                addr: "0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8",
                name: "ELIX",
                decimals: 18
            }, {
                addr: "0x9cb9eb4bb7800bdbb017be2a4ffbeccb67454ea9",
                name: "BOPTOLD",
                decimals: 8
            }, {
                addr: "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
                name: "AVT",
                decimals: 18
            }, {
                addr: "0x190e569be071f40c704e15825f285481cb74b6cc",
                name: "FAM",
                decimals: 12
            }, {
                addr: "0x190fb342aa6a15eb82903323ae78066ff8616746",
                name: "UMC",
                decimals: 6
            }, {
                addr: "0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4",
                name: "SAI",
                decimals: 18
            }, {
                addr: "0x1b9743f556d65e757c4c650b4555baf354cb8bd3",
                name: "ETBS",
                decimals: 12
            }, {
                addr: "0xd3c00772b24d997a812249ca637a921e81357701",
                name: "WILD",
                decimals: 18
            }, {
                addr: "0x516e5436bafdc11083654de7bb9b95382d08d5de",
                name: "ORME",
                decimals: 8
            }, {
                addr: "0xf99f901124cbbe180984a247ba94cfba0c764b2e",
                name: "SQRL",
                decimals: 6
            }, {
                addr: "0xb29678a4805a7d787dc9589e179d27f7575bb9f7",
                name: "AUA",
                decimals: 5
            }, {
                addr: "0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77",
                name: "MCD",
                decimals: 18
            }, {
                addr: "0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5",
                name: "BQ",
                decimals: 3
            }, {
                addr: "0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970",
                name: "NDC",
                decimals: 18
            }, {
                addr: "0xc596bd09d652827b0106292d3e378d5938df4b12",
                name: "TPT",
                decimals: 18
            }, {
                addr: "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
                name: "DLT",
                decimals: 18
            }, {
                addr: "0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2",
                name: "BOP",
                decimals: 8
            }, {
                addr: "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
                name: "MDA",
                decimals: 18
            }, {
                addr: "0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9",
                name: "PST",
                decimals: 18
            }, {
                addr: "0xa6e7172662379f1f4c72108655869abdbb7f7672",
                name: "JADE",
                decimals: 5
            }, {
                addr: "0xfec0cf7fe078a500abf15f1284958f22049c2c7e",
                name: "ART",
                decimals: 18
            }, {
                addr: "0x089a6d83282fb8988a656189f1e7a73fa6c1cac2",
                name: "PGL",
                decimals: 18
            }, {
                addr: "0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5",
                name: "FLIP",
                decimals: 0
            }, {
                addr: "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
                name: "KIN",
                decimals: 18
            }, {
                addr: "0x163733bcc28dbf26b41a8cfa83e369b5b3af741b",
                name: "PRS",
                decimals: 18
            }, {
                addr: "0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84",
                name: "MRV",
                decimals: 18
            }, {
                addr: "0x4d11061ec8f401edc2395b5f439a05eee6ccfa50",
                name: "BOTA",
                decimals: 18
            }, {
                addr: "0xac3da587eac229c9896d919abc235ca4fd7f72c1",
                name: "TGT",
                decimals: 1
            }, {
                addr: "0x437cf0bf53634e3dfa5e3eaff3104004d50fb532",
                name: "BTN",
                decimals: 4
            }, {
                addr: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
                name: "TRX",
                decimals: 6
            }, {
                addr: "0x8727c112c712c4a03371ac87a74dd6ab104af768",
                name: "JET",
                decimals: 18
            }, {
                addr: "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
                name: "ATL",
                decimals: 18
            }, {
                addr: "0xb2f7eb1f2c37645be61d73953035360e768d81e6",
                name: "COB",
                decimals: 18
            }, {
                addr: "0x226bb599a12c826476e3a771454697ea52e9e220",
                name: "PRO",
                decimals: 8
            }, {
                addr: "0x51ee82641ac238bde34b9859f98f5f311d6e4954",
                name: "IQT",
                decimals: 8
            }, {
                addr: "0x0371a82e4a9d0a4312f3ee2ac9c6958512891372",
                name: "STU",
                decimals: 18
            }, {
                addr: "0x2f4baef93489b09b5e4b923795361a65a26f55e5",
                name: "XHY",
                decimals: 8
            }, {
                addr: "0xe256bb0b2a3457e54db3a41cf5a8b826aca222a8",
                name: "ARX",
                decimals: 18
            }, {
                addr: "0xe1479d294807379320dca9a9e9002ac644539099",
                name: "KING",
                decimals: 18
            }, {
                addr: "0xb72627650f1149ea5e54834b2f468e5d430e67bf",
                name: "BITS",
                decimals: 8
            }, {
                addr: "0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d",
                name: "EBET",
                decimals: 2
            }, {
                addr: "0x94d6b4fb35fb08cb34aa716ab40049ec88002079",
                name: "CNX",
                decimals: 8
            }, {
                addr: "0xdd6c68bb32462e01705011a4e2ad1a60740f217f",
                name: "HBT",
                decimals: 15
            }, {
                addr: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
                name: "KNC",
                decimals: 18
            }, {
                addr: "0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945",
                name: "YESTERDAY",
                decimals: 18
            }, {
                addr: "0xee609fe292128cad03b786dbb9bc2634ccdbe7fc",
                name: "POS",
                decimals: 18
            }, {
                addr: "0xb45a50545beeab73f38f31e5973768c421805e5e",
                name: "TKR",
                decimals: 18
            }, {
                addr: "0x68db10ecc599d9f5e657acdafdbf6449d658bb2d",
                name: "GGS",
                decimals: 18
            }, {
                addr: "0x4a42d2c580f83dce404acad18dab26db11a1750e",
                name: "RLX",
                decimals: 18
            }, {
                addr: "0xf9c9da0c81fffd491458881410903561d1e40fd0",
                name: "ARENA",
                decimals: 18
            }, {
                addr: "0x2daee1aa61d60a252dc80564499a69802853583a",
                name: "ATS",
                decimals: 4
            }, {
                addr: "0x46eec301d2d00087145d1588282c182bd1890e5c",
                name: "RSPR",
                decimals: 16
            }, {
                addr: "0x5e4abe6419650ca839ce5bb7db422b881a6064bb",
                name: "WIC",
                decimals: 18
            }, {
                addr: "0x83eea00d838f92dec4d1475697b9f4d3537b56e3",
                name: "VOISE",
                decimals: 8
            }, {
                addr: "0xba2184520a1cc49a6159c57e61e1844e085615b6",
                name: "HGT",
                decimals: 8
            }, {
                addr: "0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a",
                name: "SUB",
                decimals: 2
            }, {
                addr: "0x30aee7f259d6d1564ebef457847c672b30f13cbc",
                name: "DOM",
                decimals: 0
            }, {
                addr: "0xa8006c4ca56f24d6836727d106349320db7fef82",
                name: "INXT",
                decimals: 8
            }, {
                addr: "0xe814aee960a85208c3db542c53e7d4a6c8d5f60f",
                name: "DAY",
                decimals: 18
            }, {
                addr: "0x2469f31a34fcaac0debf73806ce39b2388874b13",
                name: "PPT2",
                decimals: 18
            }, {
                addr: "0x268b7976e94e84a48bf8b2b57ba34b59ed836a74",
                name: "XAI",
                decimals: 8
            }, {
                addr: "0x77faed976e187f26b49e78be8418ab074a341f26",
                name: "IWT",
                decimals: 18
            }, {
                addr: "0xdf6ef343350780bf8c3410bf062e0c015b1dd671",
                name: "BMC",
                decimals: 8
            }, {
                addr: "0x43ee79e379e7b78d871100ed696e803e7893b644",
                name: "UGT",
                decimals: 18
            }, {
                addr: "0x514910771af9ca656af840dff83e8264ecf986ca",
                name: "LINK",
                decimals: 18
            }, {
                addr: "0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139",
                name: "ATM",
                decimals: 8
            }, {
                addr: "0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d",
                name: "GOOC",
                decimals: 8
            }, {
                addr: "0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed",
                name: "TFT",
                decimals: 8
            }, {
                addr: "0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b",
                name: "ALPC",
                decimals: 0
            }, {
                addr: "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
                name: "VIBE",
                decimals: 18
            }, {
                addr: "0xb4efd85c19999d84251304bda99e90b92300bd93",
                name: "RPL",
                decimals: 18
            }, {
                addr: "0xeeac3f8da16bb0485a4a11c5128b0518dac81448",
                name: "TEU",
                decimals: 18
            }, {
                addr: "0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7",
                name: "SDRN",
                decimals: 18
            }, {
                addr: "0x1eab19e6623e8cbcafc252e275f5b51c27656faf",
                name: "SPNK",
                decimals: 8
            }, {
                addr: "0x6467882316dc6e206feef05fba6deaa69277f155",
                name: "FAP",
                decimals: 18
            }, {
                addr: "0x540449e4d172cd9491c76320440cd74933d5691a",
                name: "DBET",
                decimals: 18
            }, {
                addr: "0xf333b2ace992ac2bbd8798bf57bc65a06184afba",
                name: "SND",
                decimals: 0
            }, {
                addr: "0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
                name: "XNN",
                decimals: 18
            }, {
                addr: "0x23cb17d7d079518dbff4febb6efcc0de58d8c984",
                name: "TRV",
                decimals: 16
            }, {
                addr: "0x65292eeadf1426cd2df1c4793a3d7519f253913b",
                name: "COSS",
                decimals: 18
            }, {
                addr: "0x27dce1ec4d3f72c3e457cc50354f1f975ddef488",
                name: "AIR",
                decimals: 8
            }, {
                addr: "0x10b123fddde003243199aad03522065dc05827a0",
                name: "SYN",
                decimals: 18
            }, {
                addr: "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
                name: "BTM",
                decimals: 8
            }, {
                addr: "0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2",
                name: "LLT",
                decimals: 8
            }, {
                addr: "0x4156d3342d5c385a87d264f90653733592000581",
                name: "SALT",
                decimals: 8
            }, {
                addr: "0xce61f5e6d1fe5a86e246f68aff956f7757282ef0",
                name: "1LIFE",
                decimals: 18
            }, {
                addr: "0x52514e3acaeb06cab050a69b025083082ebe5b54",
                name: "CTCOLD",
                decimals: 4
            }, {
                addr: "0xf1d9139c6512452db91f25635457b844d7e22b8b",
                name: "CTC",
                decimals: 4
            }, {
                addr: "0xef2e9966eb61bb494e5375d5df8d67b7db8a780d",
                name: "SHIT",
                decimals: 0
            }, {
                addr: "0x29d75277ac7f0335b2165d0895e8725cbf658d73",
                name: "CSNO",
                decimals: 8
            }, {
                addr: "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
                name: "ITT",
                decimals: 8
            }, {
                addr: "0xb561fef0d624c0826ff869946f6076b7c4f2ba42",
                name: "SER",
                decimals: 7
            }, {
                addr: "0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d",
                name: "HVN",
                decimals: 8
            }, {
                addr: "0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8",
                name: "POOL",
                decimals: 8
            }, {
                addr: "0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f",
                name: "LDM",
                decimals: 18
            }, {
                addr: "0xc3951d77737733174152532e8b0f27e2c4e9f0dc",
                name: "CLD",
                decimals: 6
            }, {
                addr: "0x6678e467fa5ccfbdc264d12f4b8b28fe4661606b",
                name: "DCNT",
                decimals: 1
            }, {
                addr: "0x82d193f8ee41d12aaa0a85cb006606d67f773e9c",
                name: "SMT",
                decimals: 1
            }, {
                addr: "0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609",
                name: "SWP",
                decimals: 18
            }, {
                addr: "0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5",
                name: "EDOGE",
                decimals: 18
            }, {
                addr: "0xeb2da9fac54284cea731d1f10bb34eecb3c00c14",
                name: "POW",
                decimals: 18
            }, {
                addr: "0xf028adee51533b1b47beaa890feb54a457f51e89",
                name: "BMT",
                decimals: 18
            }, {
                addr: "0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b",
                name: "DTC",
                decimals: 2
            }, {
                addr: "0x4c5601164e2048a4154de91fa5e0b07e626cab7f",
                name: "FNL",
                decimals: 3
            }, {
                addr: "0x0b76544f6c413a555f309bf76260d1e02377c02a",
                name: "INT",
                decimals: 6
            }, {
                addr: "0x2fd41f516fac94ed08e156f489f56ca3a80b04d0",
                name: "EBTCOLD",
                decimals: 8
            }, {
                addr: "0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4",
                name: "FRD",
                decimals: 18
            }, {
                addr: "0xea610b1153477720748dc13ed378003941d84fab",
                name: "ALIS",
                decimals: 18
            }, {
                addr: "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
                name: "EVX",
                decimals: 4
            }, {
                addr: "0x0766e79a6fd74469733e8330b3b461c0320ff059",
                name: "EXN",
                decimals: 18
            }, {
                addr: "0x8d5a69dc82a47594881256f2eef81770274fa30f",
                name: "NTC",
                decimals: 18
            }, {
                addr: "0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd",
                name: "HOWL",
                decimals: 18
            }, {
                addr: "0x1bb9e8ea817d56eccc212ce63f7da95298f98719",
                name: "SHT",
                decimals: 2
            }, {
                addr: "0x865d176351f287fe1b0010805b110d08699c200a",
                name: "BCO",
                decimals: 8
            }, {
                addr: "0x881ef48211982d01e2cb7092c915e647cd40d85c",
                name: "OTN",
                decimals: 18
            }, {
                addr: "0x48f775efbe4f5ece6e0df2f7b5932df56823b990",
                name: "R",
                decimals: 0
            }, {
                addr: "0xa51153d9cf9d3cf6d58697b68eccc158d1e40388",
                name: "PME",
                decimals: 18
            }, {
                addr: "0xb23be73573bc7e03db6e5dfc62405368716d28a8",
                name: "ONEK",
                decimals: 18
            }, {
                addr: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
                name: "ZAP",
                decimals: 18
            }, {
                addr: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
                name: "ENJ",
                decimals: 18
            }, {
                addr: "0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e",
                name: "SOAR",
                decimals: 6
            }, {
                addr: "0xafe60511341a37488de25bef351952562e31fcc1",
                name: "TBT",
                decimals: 8
            }, {
                addr: "0x1db186898bccde66fa64a50e4d81078951a30dbe",
                name: "LLA",
                decimals: 18
            }, {
                addr: "0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5",
                name: "ARXAI",
                decimals: 18
            }, {
                addr: "0x24aef3bf1a47561500f9430d74ed4097c47f51f2",
                name: "SPARTA",
                decimals: 4
            }, {
                addr: "0xd884f9881e0aeabad79be8a69122cf998d067fff",
                name: "RUB",
                decimals: 18
            }, {
                addr: "0x5ca71ea65acb6293e71e62c41b720698b0aa611c",
                name: "BBD",
                decimals: 18
            }, {
                addr: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
                name: "VIB",
                decimals: 18
            }, {
                addr: "0x473319898464ca640af692a0534175981ab78aa1",
                name: "PKT",
                decimals: 4
            }, {
                addr: "0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e",
                name: "ETHB",
                decimals: 8
            }, {
                addr: "0x6fff3806bbac52a20e0d79bc538d527f6a22c96b",
                name: "CDX",
                decimals: 18
            }, {
                addr: "0xb62d18dea74045e822352ce4b3ee77319dc5ff2f",
                name: "EVC",
                decimals: 18
            }, {
                addr: "0x7d49eaac4c70abc1a659122f08c0806ae44703ef",
                name: "DET",
                decimals: 18
            }, {
                addr: "0x614ea929892ea43d3ea2c5e3311b01cc589bad6c",
                name: "ENO",
                decimals: 18
            }, {
                addr: "0x64c86899bc02dd9af823b131e5acd4369f72bd39",
                name: "RENT",
                decimals: 18
            }, {
                addr: "0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f",
                name: "KSS",
                decimals: 18
            }, {
                addr: "0x32c785e4e8477b277fea2ca2301727084d79d933",
                name: "NUGD",
                decimals: 0
            }, {
                addr: "0x84c2c31c04339c9938adfe3f8013315c8906f071",
                name: "EBCSH",
                decimals: 18
            }, {
                addr: "0x44f12955189e3f01be5daf1dd9002ee4d774f42b",
                name: "AFST",
                decimals: 18
            }, {
                addr: "0x6f1a769952c60b2d03f46419adeda91d87866dab",
                name: "ELTC",
                decimals: 18
            }, {
                addr: "0x415116bad878730f5db008ff381a73222128ad39",
                name: "EBCH",
                decimals: 18
            }, {
                addr: "0x2f1b8c9d0a21b747d8ca370f93cb09d3daf222ef",
                name: "EXRP",
                decimals: 18
            }, {
                addr: "0x01a28adc0edd796b570ec4da734e1aa809f6f1fc",
                name: "EDASH",
                decimals: 18
            }, {
                addr: "0x43161bd5597b12afb83b4ecfec8f4f0f9e452f30",
                name: "EXMR",
                decimals: 18
            }, {
                addr: "0x0c6c9beeeb5de377210930f09a7ac9a99ff5e981",
                name: "EZEC",
                decimals: 18
            }, {
                addr: "0xb915ff79170d606935bceaf000d77ca4ed92d993",
                name: "ENEO",
                decimals: 18
            }, {
                addr: "0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0",
                name: "ELTC2",
                decimals: 8
            }, {
                addr: "0x1f103fd7c4fa908c25387da70ed287b632bd22a2",
                name: "ELTC3",
                decimals: 18
            }, {
                addr: "0xb518d165398d9057ea8b73096edda5c7754bcd62",
                name: "EXRP2",
                decimals: 18
            }, {
                addr: "0xf923ba61b43161a83afe2cab7d77ea1e41f27918",
                name: "PAL",
                decimals: 18
            }, {
                addr: "0xe26517a9967299453d3f1b48aa005e6127e67210",
                name: "NIMFA",
                decimals: 18
            }, {
                addr: "0x09debe702678140c1be278213109719fab98d0d8",
                name: "MOL",
                decimals: 18
            }, {
                addr: "0xb17df9a3b09583a9bdcf757d6367171476d4d8a3",
                name: "MVC",
                decimals: 18
            }, {
                addr: "0x90528aeb3a2b736b780fd1b6c478bb7e1d643170",
                name: "XPA",
                decimals: 18
            }, {
                addr: "0x0a76aad21948ea1ef447d26dee91a54370e151e0",
                name: "ELITE",
                decimals: 18
            }, {
                addr: "0xa51d948ff15fbabac476af160cba6901ce47f4b0",
                name: "LNT",
                decimals: 18
            }, {
                addr: "0x014b50466590340d41307cc54dcee990c8d58aa8",
                name: "ICOS",
                decimals: 6
            }, {
                addr: "0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044",
                name: "NCH",
                decimals: 12
            }, {
                addr: "0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61",
                name: "PLY",
                decimals: 18
            }, {
                addr: "0xc42209accc14029c1012fb5680d95fbd6036e2a0",
                name: "PPP",
                decimals: 18
            }, {
                addr: "0xae4191a7eb25713ac90483ea75828ae8038f94dc",
                name: "EZEC2",
                decimals: 18
            }, {
                addr: "0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4",
                name: "BKB",
                decimals: 8
            }, {
                addr: "0xe66cc41dd03a170623dc087a69ad8d72e64cb838",
                name: "BTH2",
                decimals: 18
            }, {
                addr: "0xafc39788c51f0c1ff7b55317f3e70299e521fff6",
                name: "EBCH2",
                decimals: 8
            }, {
                addr: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
                name: "AST",
                decimals: 4
            }, {
                addr: "0x5d21ef5f25a985380b65c8e943a0082feda0db84",
                name: "ECASH",
                decimals: 18
            }, {
                addr: "0xf152fca41bd23ff250292af391236db35e0e99c3",
                name: "EETH",
                decimals: 8
            }, {
                addr: "0x37f014c64d186eaf879c0033846b51924ce42584",
                name: "MDT",
                decimals: 0
            }, {
                addr: "0xfd784da5c740c617aafb80399fa81b86e1da99a5",
                name: "ITS",
                decimals: 8
            }, {
                addr: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
                name: "ENG",
                decimals: 8
            }, {
                addr: "0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2",
                name: "ACC",
                decimals: 18
            }, {
                addr: "0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e",
                name: "EGOLD",
                decimals: 18
            }, {
                addr: "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
                name: "FLP",
                decimals: 18
            }, {
                addr: "0x90c88ccd74e57e016acae8ad1eaa12ecf4c06f33",
                name: "IBTC",
                decimals: 18
            }, {
                addr: "0xc51c938c4d513780c66c722a41c197d3a89fa9a8",
                name: "EBTG",
                decimals: 8
            }, {
                addr: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
                name: "REQ",
                decimals: 18
            }, {
                addr: "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
                name: "WRC",
                decimals: 6
            }, {
                addr: "0x9b6443b0fb9c241a7fdac375595cea13e6b7807a",
                name: "RCC",
                decimals: 18
            }, {
                addr: "0xdee667186e7b81ecf7efc8713382d8d99a8b92b4",
                name: "EBCG",
                decimals: 18
            }, {
                addr: "0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd",
                name: "BTCM",
                decimals: 18
            }, {
                addr: "0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466",
                name: "AION",
                decimals: 8
            }, {
                addr: "0x179a2e413386db620d5b89a18550a3874385f726",
                name: "FIT",
                decimals: 5
            }, {
                addr: "0xdf1ce35938f9ca2eab682284f82a81a9d25665ce",
                name: "STM",
                decimals: 18
            }, {
                addr: "0x87611ca3403a3878dfef0da2a786e209abfc1eff",
                name: "EUSD",
                decimals: 8
            }, {
                addr: "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
                name: "ETG",
                decimals: 0
            }, {
                addr: "0x9541fd8b9b5fa97381783783cebf2f5fa793c262",
                name: "KZN",
                decimals: 8
            }, {
                addr: "0xa8f93faee440644f89059a2c88bdc9bf3be5e2ea",
                name: "CASH",
                decimals: 18
            }, {
                addr: "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
                name: "FUEL",
                decimals: 18
            }, {
                addr: "0xced4e93198734ddaff8492d525bd258d49eb388e",
                name: "EDO",
                decimals: 18
            }, {
                addr: "0xd96b9fd7586d9ea24c950d24399be4fb65372fdd",
                name: "BTCS",
                decimals: 18
            }, {
                addr: "0xe701cd3329057aea9d54300ddd05e41b8d74727a",
                name: "10MT",
                decimals: 10
            }, {
                addr: "0x15f173b7aca7cd4a01d6f8360e65fb4491d270c1",
                name: "EREAL",
                decimals: 18
            }, {
                addr: "0x331a550a2c7f96384eb69127aa0ea9ad4b5da099",
                name: "ATMT",
                decimals: 18
            }, {
                addr: "0xae258d5322b59d64df9eb483e3b1733332c3b66c",
                name: "ETHG",
                decimals: 8
            }, {
                addr: "0xa89b5934863447f6e4fc53b315a93e873bda69a3",
                name: "LUM",
                decimals: 18
            }, {
                addr: "0xe463d10ec6b4ff6a3e5be41144956116ca30d4c3",
                name: "7YPE",
                decimals: 0
            }, {
                addr: "0x7d4b8cce0591c9044a22ee543533b72e976e36c3",
                name: "CAG",
                decimals: 18
            }, {
                addr: "0x4cd988afbad37289baaf53c13e98e2bd46aaea8c",
                name: "KEY",
                decimals: 18
            }, {
                addr: "0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c",
                name: "NULS",
                decimals: 18
            }, {
                addr: "0xf8fa1a588cd8cd51c3c4d6dc16d2717f6332e821",
                name: "BXC",
                decimals: 2
            }, {
                addr: "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
                name: "BCPT",
                decimals: 18
            }, {
                addr: "0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8",
                name: "GXC",
                decimals: 10
            }, {
                addr: "0x9397554c07f687b7a20d13c73350cc283765d509",
                name: "SHLD",
                decimals: 18
            }, {
                addr: "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
                name: "BLUE",
                decimals: 8
            }, {
                addr: "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
                name: "DRT",
                decimals: 8
            }, {
                addr: "0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e",
                name: "FUDD",
                decimals: 8
            }, {
                addr: "0xfcb48fdcc479b38068c06ee94249b1516adf09cb",
                name: "EURB",
                decimals: 5
            }, {
                addr: "0x7a79abd3905ef37b8d243c4c28cee73a751eb076",
                name: "CM",
                decimals: 18
            }, {
                addr: "0xebc86d834756621444a8a26b4cf81b625fe310cd",
                name: "ETHP",
                decimals: 18
            }, {
                addr: "0xce59d29b09aae565feeef8e52f47c3cd5368c663",
                name: "BULX",
                decimals: 18
            }, {
                addr: "0x26607f9bf9d62a37b0c78e1d3719fcd1fa32bef9",
                name: "GFL",
                decimals: 18
            }, {
                addr: "0x9dfe4643c04078a46803edcc30a3291b76d4c20c",
                name: "GEN",
                decimals: 18
            }, {
                addr: "0xdded69d8e28d38d640f6244ab5294f309fd40ce1",
                name: "LMT",
                decimals: 8
            }, {
                addr: "0x705ee96c1c160842c92c1aecfcffccc9c412e3d9",
                name: "POLL",
                decimals: 18
            }, {
                addr: "0xc78593c17482ea5de44fdd84896ffd903972878e",
                name: "BB",
                decimals: 9
            }, {
                addr: "0xc3972ac283b3a7a56125674631a5c254f7f373cf",
                name: "HAT",
                decimals: 12
            }, {
                addr: "0xf2e51e32d1f546423364a040ef1a6d2f05e31482",
                name: "HUB",
                decimals: 6
            }, {
                addr: "0xffe8196bc259e8dedc544d935786aa4709ec3e64",
                name: "HDG",
                decimals: 18
            }, {
                addr: "0x7728dfef5abd468669eb7f9b48a7f70a501ed29d",
                name: "PRG",
                decimals: 6
            }, {
                addr: "0x1183f92a5624d68e85ffb9170f16bf0443b4c242",
                name: "QVT",
                decimals: 18
            }, {
                addr: "0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b",
                name: "IETH",
                decimals: 8
            }, {
                addr: "0x76e82406a5040b605c6d30caf4802e7eb3184bbc",
                name: "EBCC",
                decimals: 6
            }, {
                addr: "0x1040613788e99c1606bd133db0ed7f7dbdf0cc80",
                name: "STH",
                decimals: 0
            }, {
                addr: "0x63b992e6246d88f07fc35a056d2c365e6d441a3d",
                name: "SCT",
                decimals: 18
            }, {
                addr: "0xdbfb423e9bbf16294388e07696a5120e4ceba0c5",
                name: "ETHD",
                decimals: 18
            }, {
                addr: "0x91126cfa7db2983527b0b749cc8a61fdeffedc28",
                name: "DONE",
                decimals: 16
            }, {
                addr: "0xbc63acdfafa94bd4d8c2bb7a8552281f107242c0",
                name: "MXX",
                decimals: 18
            }, {
                addr: "0x56e7f2cd7d5382506aab084a67d70e603cdb23f7",
                name: "CODE",
                decimals: 8
            }, {
                addr: "0x6d7a4c14c997333e304d5aef2aece73fd60ecc59",
                name: "WND",
                decimals: 18
            }, {
                addr: "0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11",
                name: "BTCRED",
                decimals: 8
            }, {
                addr: "0x0879e0c9822b75f31f0b0ed2a30be9f484a57c2f",
                name: "LTG",
                decimals: 0
            }, {
                addr: "0x044dd17bbbcbf1cf65f543918561bf8cf8130e7b",
                name: "EGR",
                decimals: 3
            }, {
                addr: "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e",
                name: "MOD",
                decimals: 0
            }, {
                addr: "0x52a17ca01b9925752aefde41bf80d7b10514e136",
                name: "PUMP",
                decimals: 15
            }, {
                addr: "0xe81d72d14b1516e68ac3190a46c93302cc8ed60f",
                name: "CL",
                decimals: 18
            }, {
                addr: "0x8c01ada8e708993a891d57d1b3169479a20acb3a",
                name: "VIT",
                decimals: 18
            }, {
                addr: "0x2405cc17ba128bfa7117815e04a4da228013f5bc",
                name: "BNN",
                decimals: 8
            }, {
                addr: "0x983877018633c0940b183cd38d1b58bee34f7301",
                name: "DEEP",
                decimals: 8
            }, {
                addr: "0xcedbf324a1eb1affe53ab7b7ef0103e070e3853f",
                name: "ETL",
                decimals: 10
            }, {
                addr: "0x4fbc28e3b3c1c50ee05dcd66d9fc614a0cb99705",
                name: "HHT",
                decimals: 18
            }, {
                addr: "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
                name: "EXRN",
                decimals: 0
            }, {
                addr: "0x0886949c1b8c412860c4264ceb8083d1365e86cf",
                name: "BTCE",
                decimals: 8
            }, {
                addr: "0xd6adc5e386d499361ccc5752f791b45132e7e6e4",
                name: "MSC",
                decimals: 0
            }, {
                addr: "0x5783862cef49094be4de1fe31280b2e33cf87416",
                name: "KRT",
                decimals: 4
            }, {
                addr: "0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9",
                name: "EAGLE",
                decimals: 18
            }, {
                addr: "0x62a56a4a2ef4d355d34d10fbf837e747504d38d4",
                name: "PAYX",
                decimals: 2
            }, {
                addr: "0xc79d440551a03f84f863b1f259f135794c8a7190",
                name: "MGX",
                decimals: 18
            }, {
                addr: "0x4e279d8638e8669fad40e018fc181d26ee780380",
                name: "ETV",
                decimals: 8
            }, {
                addr: "0xb554cf51cda0fccd5012d55737c4df55a3e18a5c",
                name: "MLK",
                decimals: 8
            }, {
                addr: "0x4c382f8e09615ac86e08ce58266cc227e7d4d913",
                name: "SKR",
                decimals: 6
            }, {
                addr: "0x9375b738083101617f0642d7dbeaa89e361545e3",
                name: "ESMS",
                decimals: 0
            }, {
                addr: "0xb8742486c723793cf5162bb5d3425ed9cd73d049",
                name: "TCASH",
                decimals: 8
            }, {
                addr: "0x44e6d9ae9053a16e9311fd9702291c5516804359",
                name: "EBTGOLD",
                decimals: 0
            }, {
                addr: "0xef25e54e1ae9bfd966b9b5cde6880e7a2323a957",
                name: "SOCIAL",
                decimals: 18
            }, {
                addr: "0x5046e860ff274fb8c66106b0ffb8155849fb0787",
                name: "JS",
                decimals: 8
            }, {
                addr: "0x5f6e7fb7fe92ea7822472bb0e8f1be60d6a4ea50",
                name: "ARTE",
                decimals: 18
            }, {
                addr: "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
                name: "LA",
                decimals: 18
            }, {
                addr: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
                name: "DATA",
                decimals: 18
            }, {
                addr: "0xdb45faeca61c70e271bffeaf66162fa68a1c4def",
                name: "EBIT",
                decimals: 0
            }, {
                addr: "0x8633e144f2d9b9b8bdd12ddb58e4bef1e163a0ce",
                name: "YEL",
                decimals: 18
            }, {
                addr: "0xae4f56f072c34c0a65b3ae3e4db797d831439d93",
                name: "GIM",
                decimals: 8
            }, {
                addr: "0xe2f45f1660dc99daf3bd06f637ab1e4debc15bde",
                name: "SGG",
                decimals: 6
            }, {
                addr: "0xb3bd49e28f8f832b8d1e246106991e546c323502",
                name: "GMT",
                decimals: 18
            }, {
                addr: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
                name: "RCN",
                decimals: 18
            }, {
                addr: "0xbf430e24ac0f33d4ad6fac9654b37943124c2786",
                name: "BTG",
                decimals: 8
            }, {
                addr: "0x6b9e8076a536459303db301ba4430913a7f14c5a",
                name: "JDI",
                decimals: 2
            }, {
                addr: "0x2edc6fcc641f0169d54abb842f96f701eae85e4e",
                name: "ADU",
                decimals: 18
            }, {
                addr: "0xba5f11b16b155792cf3b2e6880e8706859a8aeb6",
                name: "ARN",
                decimals: 8
            }, {
                addr: "0x9501bfc48897dceeadf73113ef635d2ff7ee4b97",
                name: "EMT",
                decimals: 18
            }, {
                addr: "0xa6e2f7f33f01fb399e72f3e044196eab7d348012",
                name: "AMO",
                decimals: 4
            }, {
                addr: "0x22c10728343e9d49ef25080f74a223878a3d4052",
                name: "DRP2",
                decimals: 8
            }, {
                addr: "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
                name: "DOVU",
                decimals: 18
            }, {
                addr: "0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66",
                name: "CTX",
                decimals: 18
            }, {
                addr: "0x8bf8bcf8aba5ecffffd431489fe79dad38023a9b",
                name: "BUS",
                decimals: 8
            }, {
                addr: "0xa8ba4095833a3f924d86cb3941099c1abb75ea13",
                name: "SUB1X",
                decimals: 18
            }, {
                addr: "0x638ac149ea8ef9a1286c41b977017aa7359e6cfa",
                name: "ALTS",
                decimals: 18
            }, {
                addr: "0xff18dbc487b4c2e3222d115952babfda8ba52f5f",
                name: "LIFE",
                decimals: 18
            }, {
                addr: "0x181a63746d3adcf356cbc73ace22832ffbb1ee5a",
                name: "ALCO",
                decimals: 8
            }, {
                addr: "0x8f0921f30555624143d427b340b1156914882c10",
                name: "FYP",
                decimals: 18
            }, {
                addr: "0xfa2632a88bd0c11535a38f98a98db8251ccbaa9e",
                name: "GTA",
                decimals: 18
            }, {
                addr: "0x8e10f6bb9c973d61321c25a2b8d865825f4aa57b",
                name: "0ED",
                decimals: 18
            }, {
                addr: "0x03df4c372a29376d2c8df33a1b5f001cd8d68b0e",
                name: "BITCOINEREUM",
                decimals: 8
            }, {
                addr: "0xbb1b3e8ddded8165d58b0c192d19cd360682b170",
                name: "CAS",
                decimals: 2
            }, {
                addr: "0x49aec0752e68d0282db544c677f6ba407ba17ed7",
                name: "XBL",
                decimals: 18
            }, {
                addr: "0x8f070b17dd3953634e9e9c174d0f05396f681bc1",
                name: "CCP",
                decimals: 18
            }, {
                addr: "0xe58aff48f738b4a719d1790587cdc91a3560d7e1",
                name: "TMP",
                decimals: 7
            }, {
                addr: "0x87ae38d63a6bbb63e46219f494b549e3be7fc400",
                name: "LAP",
                decimals: 8
            }, {
                addr: "0x7f2176ceb16dcb648dc924eff617c3dc2befd30d",
                name: "OHNI",
                decimals: 0
            }, {
                addr: "0x2233799ee2683d75dfefacbcd2a26c78d34b470d",
                name: "NTWK",
                decimals: 18
            }, {
                addr: "0x9b8eb7a73a3c65fc3c892b494ab29cb061cf05ae",
                name: "1BIT",
                decimals: 0
            }, {
                addr: "0x580d69737e11cf2fb306c8fc0161b86f7c9f03ba",
                name: "NEBO",
                decimals: 3
            }, {
                addr: "0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb",
                name: "ERC20",
                decimals: 18
            }, {
                addr: "0xfb4752ad1b7153e1dbd2e6662651a11c7fc14083",
                name: "MPESA",
                decimals: 8
            }, {
                addr: "0x27537ff4df3081cef9bee9b29cac764067b42611",
                name: "SLIP",
                decimals: 0
            }, {
                addr: "0xba71b32e71a41339aa4ceaa79528535aefe488d8",
                name: "ALIEF",
                decimals: 0
            }, {
                addr: "0xc9b89f6b5301f554b9adc6d4a871c3279820de40",
                name: "HAO",
                decimals: 18
            }, {
                addr: "0xd9a0658b7cc9ec0c57e8b20c0920d08f17e747be",
                name: "SAT",
                decimals: 10
            }, {
                addr: "0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63",
                name: "ZSC",
                decimals: 18
            }, {
                addr: "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0",
                name: "TIE",
                decimals: 18
            }, {
                addr: "0x8bbf4dd0f11b3a535660fd7fcb7158daebd3a17e",
                name: "EGAS",
                decimals: 8
            }, {
                addr: "0xb3203db25a01fa7950a860b42b899ad7da52ddd6",
                name: "PLX",
                decimals: 8
            }, {
                addr: "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
                name: "AMB",
                decimals: 18
            }, {
                addr: "0xe3fa177acecfb86721cf6f9f4206bd3bd672d7d5",
                name: "CTT",
                decimals: 18
            }, {
                addr: "0xeb7c20027172e5d143fb030d50f91cece2d1485d",
                name: "EBTC",
                decimals: 8
            }, {
                addr: "0x9742fa8cb51d294c8267ddfead8582e16f18e421",
                name: "10MTI",
                decimals: 10
            }, {
                addr: "0x52a7cb918c11a16958be40cba7e31e32a499a465",
                name: "FDX",
                decimals: 18
            }, {
                addr: "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
                name: "GRID",
                decimals: 12
            }, {
                addr: "0x16b5a0de0520e1964a20ac8ef4034bd7d0920d8f",
                name: "TIO",
                decimals: 18
            }, {
                addr: "0xf6b55acbbc49f4524aa48d19281a9a77c54de10f",
                name: "WLK",
                decimals: 18
            }, {
                addr: "0x60200c0fefc1d0ade1e19a247b703cf3ccdc915a",
                name: "TWIT",
                decimals: 8
            }, {
                addr: "0xc99ddc30bb0cf76b07d90dcb6b267b8352697bef",
                name: "TDT",
                decimals: 18
            }, {
                addr: "0x2f5e044ad4adac34c8d8df738fac7743eda1409c",
                name: "AGO",
                decimals: 18
            }, {
                addr: "0xb444208cb0516c150178fcf9a52604bc04a1acea",
                name: "GRMD",
                decimals: 18
            }, {
                addr: "0x4d829f8c92a6691c56300d020c9e0db984cfe2ba",
                name: "XCC",
                decimals: 18
            }, {
                addr: "0x76195ffd0cfedf68625b3e5b64c7bd904eeb9d6c",
                name: "WET",
                decimals: 18
            }, {
                addr: "0x0425cbbc5ff784203fe8d82beefa2b02634351f5",
                name: "FBR",
                decimals: 18
            }, {
                addr: "0x01c67791309c71aa4ed373025a0c089696d7c9e4",
                name: "CCB",
                decimals: 18
            }, {
                addr: "0x944f1a04ab8d735acdbc46505c5b283f54289152",
                name: "GBTS",
                decimals: 18
            }, {
                addr: "0x4a536c1ce7ad7f6e8d2e59135e17aef5ef4dd4e6",
                name: "GEC",
                decimals: 3
            }, {
                addr: "0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1",
                name: "DGPT",
                decimals: 18
            }, {
                addr: "0x3293cc907fde439b39aedaf1b982785adaff186b",
                name: "TRIA",
                decimals: 10
            }, {
                addr: "0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393",
                name: "B2BX",
                decimals: 18
            }, {
                addr: "0x44197a4c44d6a059297caf6be4f7e172bd56caaf",
                name: "ELTCOIN",
                decimals: 8
            }, {
                addr: "0x5554e04e76533e1d14c52f05beef6c9d329e1e30",
                name: "NIO",
                decimals: 0
            }, {
                addr: "0x14fffb1e001615b7fb7c7857bdf440a610022e5b",
                name: "SCX",
                decimals: 0
            }, {
                addr: "0x275fd328c3986be83f8b60f79c73cf63fde98ca5",
                name: "CSL",
                decimals: 18
            }, {
                addr: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
                name: "GVT",
                decimals: 18
            }, {
                addr: "0x44f588aeeb8c44471439d1270b3603c66a9262f1",
                name: "SNIP",
                decimals: 18
            }, {
                addr: "0x45321004790a4dae7ba19217a10574d55739efc7",
                name: "DEEM",
                decimals: 18
            }, {
                addr: "0x12a35383ca24ceb44cdcbbecbeb7baccb5f3754a",
                name: "CS",
                decimals: 6
            }, {
                addr: "0xe30e02f049957e2a5907589e06ba646fb2c321ba",
                name: "DRPU",
                decimals: 8
            }, {
                addr: "0x3e250a4f78410c29cfc39463a81f14a226690eb4",
                name: "DRPS",
                decimals: 8
            }, {
                addr: "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
                name: "UKG",
                decimals: 18
            }, {
                addr: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
                name: "POWR",
                decimals: 6
            }, {
                addr: "0x9c1d13d5a8fd4a8ac89917d31d40db454d1ee60b",
                name: "ELUNCH",
                decimals: 18
            }, {
                addr: "0x180e5087935a94fd5bbab00fd2249c5be0473381",
                name: "ZCG",
                decimals: 8
            }, {
                addr: "0x14839bf22810f09fb163af69bd21bd5476f445cd",
                name: "CFD",
                decimals: 18
            }, {
                addr: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
                name: "RDN",
                decimals: 18
            }, {
                addr: "0xd3e2f9dfff5a6feeece5dbcee3b86cb375fd8c98",
                name: "BCOIN",
                decimals: 8
            }, {
                addr: "0xc029ba3dc12e1834571e821d94a07de0a01138ea",
                name: "QBE",
                decimals: 18
            }, {
                addr: "0x00a0cbe98e4d110b0fa82646152d77babf2951d0",
                name: "EETHER",
                decimals: 18
            }, {
                addr: "0x9c23a568a32e8434ec88bdf60891a1d95ffd36cc",
                name: "CHUCK",
                decimals: 4
            }, {
                addr: "0xd819e892f4df8659188e8bda839fdf2215a513bc",
                name: "SPOON",
                decimals: 18
            }, {
                addr: "0xd2308446536a0bad028ab8c090d62e1ea2a51f24",
                name: "GNEISS",
                decimals: 0
            }, {
                addr: "0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d",
                name: "EPY",
                decimals: 8
            }, {
                addr: "0x7627de4b93263a6a7570b8dafa64bae812e5c394",
                name: "NXX",
                decimals: 8
            }, {
                addr: "0x6f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c",
                name: "SMART",
                decimals: 0
            }, {
                addr: "0x8b1f49491477e0fb46a29fef53f1ea320d13c349",
                name: "AMM",
                decimals: 6
            }, {
                addr: "0x8866d52303e372c2a2936d8ea09afd87bcbd8cf2",
                name: "TPL",
                decimals: 10
            }, {
                addr: "0x1245ef80f4d9e02ed9425375e8f649b9221b31d8",
                name: "ARCT",
                decimals: 8
            }, {
                addr: "0xdd007278b667f6bef52fd0a4c23604aa1f96039a",
                name: "RIPT",
                decimals: 8
            }, {
                addr: "0xa5a283557653f36cf9aa0d5cc74b1e30422349f2",
                name: "UETL",
                decimals: 8
            }, {
                addr: "0x93e24ce396a9e7d7de4a5bc616cf5fcab0476626",
                name: "ZIP",
                decimals: 8
            }, {
                addr: "0x399a0e6fbeb3d74c85357439f4c8aed9678a5cbf",
                name: "DCL",
                decimals: 3
            }, {
                addr: "0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5",
                name: "VIU",
                decimals: 18
            }, {
                addr: "0x86410db4d61c40a8e1df9f859069d5a15896195b",
                name: "DJC",
                decimals: 18
            }, {
                addr: "0x7c53f13699e1f6ef5c699e893a20948bdd2e4de9",
                name: "DVD",
                decimals: 18
            }, {
                addr: "0x554c20b7c486beee439277b4540a434566dc4c02",
                name: "HST",
                decimals: 18
            }, {
                addr: "0x420c42ce1370c0ec3ca87d9be64a7002e78e6709",
                name: "STCN",
                decimals: 0
            }, {
                addr: "0xa94c128a138504e1f81d727cc21bcb9ae6581015",
                name: "FDM",
                decimals: 18
            }, {
                addr: "0xe8c5e942b76099c0c6d78271bad3ca002fa7c531",
                name: "HELP",
                decimals: 0
            }, {
                addr: "0xf24d3dfffcaf9f9a5dda9c57eeeb1ac0bba49c86",
                name: "XMAS",
                decimals: 18
            }, {
                addr: "0x7b1309c1522afd4e66c31e1e6d0ec1319e1eba5e",
                name: "BLN",
                decimals: 18
            }, {
                addr: "0x7731ee8b0b0ab88977be7922849eb767bbe8da15",
                name: "ABS",
                decimals: 18
            }, {
                addr: "0x27d5a376ab5ba59398df98f0c2ee406a08b06d40",
                name: "NVO",
                decimals: 18
            }, {
                addr: "0x28481cdc0e4fa79164491d47e8837edeb3993f20",
                name: "TSS",
                decimals: 18
            }, {
                addr: "0x7d3e7d41da367b4fdce7cbe06502b13294deb758",
                name: "SSS",
                decimals: 8
            }, {
                addr: "0x1500205f50bf3fd976466d0662905c9ff254fc9c",
                name: "BBT",
                decimals: 4
            }, {
                addr: "0xc6b014274d7406641711fb8889f93f4f11dec810",
                name: "NAO",
                decimals: 18
            }, {
                addr: "0x3485b9566097ad656c70d6ebbd1cd044e2e72d05",
                name: "PNK",
                decimals: 0
            }],
            defaultPair: {
                token: "PPT",
                base: "ETH"
            }
        }
    },
    871: function(e, a) {
        e.exports = [{
            addr: "0x0000000000000000000000000000000000000000",
            name: "ETH",
            decimals: 18
        }, {
            addr: "0x949bed886c739f1a3273629b3320db0c5024c719",
            name: "AMIS",
            decimals: 9
        }, {
            addr: "0xd8912c10681d8b21fd3742244f44658dba12264e",
            name: "PLU",
            decimals: 18
        }, {
            addr: "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7",
            name: "1ST",
            decimals: 18
        }, {
            addr: "0x936f78b9852d12f5cb93177c1f84fb8513d06263",
            name: "GNTW",
            decimals: 18
        }, {
            addr: "0x01afc37f4f85babc47c0e2d0eababc7fb49793c8",
            name: "GNTM",
            decimals: 18
        }, {
            addr: "0x5c543e7ae0a1104f78406c340e9c64fd9fce5170",
            name: "VSL",
            decimals: 18
        }, {
            addr: "0xac709fcb44a43c35f0da4e3163b117a17f3770f5",
            name: "ARC",
            decimals: 18
        }, {
            addr: "0x14f37b574242d366558db61f3335289a5035c506",
            name: "HKG",
            decimals: 3
        }, {
            addr: "0x888666ca69e0f178ded6d75b5726cee99a87d698",
            name: "ICN",
            decimals: 18
        }, {
            addr: "0xe94327d07fc17907b4db788e5adf2ed424addff6",
            name: "REP",
            decimals: 18
        }, {
            addr: "0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009",
            name: "SNGLS",
            decimals: 0
        }, {
            addr: "0x4df812f6064def1e5e029f1ca858777cc98d2d81",
            name: "XAUR",
            decimals: 8
        }, {
            addr: "0xc66ea802717bfb9833400264dd12c2bceaa34a6d",
            name: "MKR",
            decimals: 18
        }, {
            addr: "0xe0b7927c4af23765cb51314a0e0521a9645f0e2a",
            name: "DGD",
            decimals: 9
        }, {
            addr: "0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd",
            name: "EPOSY",
            decimals: 18
        }, {
            addr: "0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0",
            name: "EPOSN",
            decimals: 18
        }, {
            addr: "0x55e7c4a77821d5c50b4570b08f9f92896a25e012",
            name: "P+",
            decimals: 0
        }, {
            addr: "0x45e42d659d9f9466cd5df622506033145a9b89bc",
            name: "NXC",
            decimals: 3
        }, {
            addr: "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
            name: "DCN",
            decimals: 0
        }, {
            addr: "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607",
            name: "SWT",
            decimals: 18
        }, {
            addr: "0xb802b24e0637c2b87d2e8b7784c055bbe921011a",
            name: "EMV",
            decimals: 2
        }, {
            addr: "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53",
            name: "TIME",
            decimals: 8
        }, {
            addr: "0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1",
            name: "MLN",
            decimals: 18
        }, {
            addr: "0x168296bb09e24a88805cb9c33356536b980d3fc5",
            name: "RHOC",
            decimals: 8
        }, {
            addr: "0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c",
            name: "EDG",
            decimals: 0
        }, {
            addr: "0xf7b098298f7c69fc14610bf71d5e02c60792894c",
            name: "GUP",
            decimals: 3
        }, {
            addr: "0x607f4c5bb672230e8672085532f7e901544a7375",
            name: "RLC",
            decimals: 9
        }, {
            addr: "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b",
            name: "TRST",
            decimals: 6
        }, {
            addr: "0x2e071d2966aa7d8decb1005885ba1977d6038a65",
            name: "DICE",
            decimals: 16
        }, {
            addr: "0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c",
            name: "TAAS",
            decimals: 6
        }, {
            addr: "0x6810e776880c02933d47db1b9fc05908e5386b96",
            name: "GNO",
            decimals: 18
        }, {
            addr: "0x667088b212ce3d06a1b553a7221e1fd19000d9af",
            name: "WINGS",
            decimals: 18
        }, {
            addr: "0xfa05a73ffe78ef8f1a739473e462c54bae6567d9",
            name: "LUN",
            decimals: 18
        }, {
            addr: "0xaaaf91d9b90df800df4f55c205fd6989c977e73a",
            name: "TKN",
            decimals: 8
        }, {
            addr: "0xcbcc0f036ed4788f63fc0fee32873d6a7487b908",
            name: "HMQ",
            decimals: 8
        }, {
            addr: "0x960b236a07cf122663c4303350609a66a7b288c0",
            name: "ANT",
            decimals: 18
        }, {
            addr: "0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468",
            name: "SGT",
            decimals: 1
        }, {
            addr: "0xff3519eeeea3e76f1f699ccce5e23ee0bdda41ac",
            name: "BCAP",
            decimals: 0
        }, {
            addr: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
            name: "BAT",
            decimals: 18
        }, {
            addr: "0xa645264c5603e96c3b0b078cdab68733794b0a71",
            name: "MYST",
            decimals: 8
        }, {
            addr: "0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf",
            name: "VSMOLD",
            decimals: 0
        }, {
            addr: "0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e",
            name: "CFI",
            decimals: 18
        }, {
            addr: "0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374",
            name: "VERI",
            decimals: 18
        }, {
            addr: "0x40395044ac3c0c57051906da938b54bd6557f212",
            name: "MGO",
            decimals: 8
        }, {
            addr: "0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06",
            name: "PTOY",
            decimals: 8
        }, {
            addr: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
            name: "BNT",
            decimals: 18
        }, {
            addr: "0x697beac28B09E122C4332D163985e8a73121b97F",
            name: "QRL",
            decimals: 8
        }, {
            addr: "0xae616e72d3d89e847f74e8ace41ca68bbf56af79",
            name: "GOOD",
            decimals: 6
        }, {
            addr: "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
            name: "SNT",
            decimals: 18
        }, {
            addr: "0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63",
            name: "SONM",
            decimals: 18
        }, {
            addr: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
            name: "NMR",
            decimals: 18
        }, {
            addr: "0x93e682107d1e9defb0b5ee701c71707a4b2e46bc",
            name: "MCAP",
            decimals: 8
        }, {
            addr: "0xb97048628db6b661d4c2aa833e95dbe1a905b280",
            name: "PAY",
            decimals: 18
        }, {
            addr: "0x5a84969bb663fb64f6d015dcf9f622aedc796750",
            name: "ICE",
            decimals: 18
        }, {
            addr: "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a",
            name: "PPT",
            decimals: 8
        }, {
            addr: "0xbbb1bd2d741f05e144e6c4517676a15554fd4b8d",
            name: "FUNOLD",
            decimals: 8
        }, {
            addr: "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
            name: "FUN",
            decimals: 8
        }, {
            addr: "0xd0d6d6c5fe4a677d343cc433536bb717bae167dd",
            name: "ADT",
            decimals: 9
        }, {
            addr: "0xce5c603c78d047ef43032e96b5b785324f753a4f",
            name: "E4ROW",
            decimals: 2
        }, {
            addr: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
            name: "STORJ",
            decimals: 8
        }, {
            addr: "0xcfb98637bcae43c13323eaa1731ced2b716962fd",
            name: "NET",
            decimals: 18
        }, {
            addr: "0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0",
            name: "EOS",
            decimals: 18
        }, {
            addr: "0x4470bb87d77b963a013db939be332f927f2b992e",
            name: "ADX",
            decimals: 4
        }, {
            addr: "0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed",
            name: "DRP",
            decimals: 2
        }, {
            addr: "0x8aa33a7899fcc8ea5fbe6a608a109c3893a1b8b2",
            name: "BET",
            decimals: 18
        }, {
            addr: "0x0affa06e7fbe5bc9a764c979aa66e8256a631f02",
            name: "PLBT",
            decimals: 6
        }, {
            addr: "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
            name: "OMG",
            decimals: 18
        }, {
            addr: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
            name: "BNB",
            decimals: 18
        }, {
            addr: "0x814964b1bceaf24e26296d031eadf134a2ca4105",
            name: "NEWB",
            decimals: 0
        }, {
            addr: "0xb24754be79281553dc1adc160ddf5cd9b74361a4",
            name: "XRL",
            decimals: 9
        }, {
            addr: "0x386467f1f3ddbe832448650418311a479eecfc57",
            name: "MBRS",
            decimals: 0
        }, {
            addr: "0xf433089366899d83a9f26a773d59ec7ecf30355e",
            name: "MTL",
            decimals: 8
        }, {
            addr: "0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d",
            name: "FUCKOLD",
            decimals: 4
        }, {
            addr: "0xab16e0d25c06cb376259cc18c1de4aca57605589",
            name: "FUCK",
            decimals: 4
        }, {
            addr: "0x5c6183d10a00cd747a6dbb5f658ad514383e9419",
            name: "NXXOLD",
            decimals: 8
        }, {
            addr: "0xd5b9a2737c9b2ff35ecb23b884eb039303bbbb61",
            name: "BTH",
            decimals: 18
        }, {
            addr: "0xe3818504c1b32bf1557b16c238b2e01fd3149c17",
            name: "PLR",
            decimals: 18
        }, {
            addr: "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
            name: "CVC",
            decimals: 8
        }, {
            addr: "0xbfa4d71a51b9e0968be4bc299f8ba6cbb2f86789",
            name: "MAYY",
            decimals: 18
        }, {
            addr: "0xab130bc7ff83192656a4b3079741c296615899c0",
            name: "MAYN",
            decimals: 18
        }, {
            addr: "0xe2e6d4be086c6938b53b22144855eef674281639",
            name: "LNK",
            decimals: 18
        }, {
            addr: "0x2bdc0d42996017fce214b21607a515da41a9e0c5",
            name: "SKIN",
            decimals: 6
        }, {
            addr: "0x8b9c35c79af5319c70dd9a3e3850f368822ed64e",
            name: "DGT",
            decimals: 18
        }, {
            addr: "0xa578acc0cb7875781b7880903f4594d13cfa8b98",
            name: "ECN",
            decimals: 2
        }, {
            addr: "0x660b612ec57754d949ac1a09d0c2937a010dee05",
            name: "BCD",
            decimals: 6
        }, {
            addr: "0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be",
            name: "DEX",
            decimals: 2
        }, {
            addr: "0xea1f346faf023f974eb5adaf088bbcdf02d761f4",
            name: "TIX",
            decimals: 18
        }, {
            addr: "0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af",
            name: "CDT",
            decimals: 18
        }, {
            addr: "0xfca47962d45adfdfd1ab2d972315db4ce7ccf094",
            name: "IXT",
            decimals: 8
        }, {
            addr: "0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb",
            name: "AIRA",
            decimals: 0
        }, {
            addr: "0x56ba2ee7890461f463f7be02aac3099f6d5811a8",
            name: "CAT",
            decimals: 18
        }, {
            addr: "0x701c244b988a513c945973defa05de933b23fe1d",
            name: "OAX",
            decimals: 18
        }, {
            addr: "0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5",
            name: "CLRT",
            decimals: 18
        }, {
            addr: "0x68aa3f232da9bdc2343465545794ef3eea5209bd",
            name: "MSP",
            decimals: 18
        }, {
            addr: "0x2a05d22db079bc40c2f77a1d1ff703a56e631cc1",
            name: "BAS",
            decimals: 8
        }, {
            addr: "0xdc0c22285b61405aae01cba2530b6dd5cd328da7",
            name: "KTN",
            decimals: 6
        }, {
            addr: "0xdd6bf56ca2ada24c683fac50e37783e55b57af9f",
            name: "BNC",
            decimals: 12
        }, {
            addr: "0x0abdace70d3790235af448c88547603b945604ea",
            name: "DNT",
            decimals: 18
        }, {
            addr: "0x9e77d5a1251b6f7d456722a6eac6d2d5980bd891",
            name: "BRAT",
            decimals: 8
        }, {
            addr: "0x5af2be193a6abca9c8817001f45744777db30756",
            name: "BQX",
            decimals: 8
        }, {
            addr: "0x006bea43baa3f7a6f765f14f10a1a1b08334ef45",
            name: "STX",
            decimals: 18
        }, {
            addr: "0x88fcfbc22c6d3dbaa25af478c578978339bde77a",
            name: "FYN",
            decimals: 18
        }, {
            addr: "0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be",
            name: "CREDO",
            decimals: 18
        }, {
            addr: "0x202e295df742befa5e94e9123149360db9d9f2dc",
            name: "NIH",
            decimals: 8
        }, {
            addr: "0x671abbe5ce652491985342e85428eb1b07bc6c64",
            name: "QAU",
            decimals: 8
        }, {
            addr: "0x3597bfd533a99c9aa083587b074434e61eb0a258",
            name: "DENT",
            decimals: 8
        }, {
            addr: "0xbc7de10afe530843e71dfb2e3872405191e8d14a",
            name: "SHOUC",
            decimals: 18
        }, {
            addr: "0x2ca72c9699b92b47272c9716c664cad6167c80b0",
            name: "GUNS",
            decimals: 18
        }, {
            addr: "0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098",
            name: "SAN",
            decimals: 18
        }, {
            addr: "0xf8e386eda857484f5a12e4b5daa9984e06e73705",
            name: "IND",
            decimals: 18
        }, {
            addr: "0xfb12e3cca983b9f59d90912fd17f8d745a8b2953",
            name: "LUCK",
            decimals: 0
        }, {
            addr: "0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3",
            name: "RIYA",
            decimals: 8
        }, {
            addr: "0xe41d2489571d322189246dafa5ebde1f4699f498",
            name: "ZRX",
            decimals: 18
        }, {
            addr: "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d",
            name: "MCO",
            decimals: 8
        }, {
            addr: "0x02b9806a64cb05f02aa8dcc1c178b88159a61304",
            name: "DEL",
            decimals: 18
        }, {
            addr: "0x46492473755e8df960f8034877f61732d718ce96",
            name: "STRC",
            decimals: 8
        }, {
            addr: "0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa",
            name: "GTKT",
            decimals: 0
        }, {
            addr: "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
            name: "POE",
            decimals: 8
        }, {
            addr: "0x38968746147bbaeb882f356ad9a57594bb158235",
            name: "BENJA",
            decimals: 8
        }, {
            addr: "0x814cafd4782d2e728170fda68257983f03321c58",
            name: "IDEA",
            decimals: 0
        }, {
            addr: "0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda",
            name: "WTT",
            decimals: 0
        }, {
            addr: "0x5ddab66da218fb05dfeda07f1afc4ea0738ee234",
            name: "RARE",
            decimals: 8
        }, {
            addr: "0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8",
            name: "SCL",
            decimals: 8
        }, {
            addr: "0xa7f976c360ebbed4465c2855684d1aae5271efa9",
            name: "TFL",
            decimals: 8
        }, {
            addr: "0x7654915a1b82d6d2d0afc37c52af556ea8983c7e",
            name: "IFT",
            decimals: 18
        }, {
            addr: "0x94298f1e0ab2dfad6eeffb1426846a3c29d98090",
            name: "MyB",
            decimals: 8
        }, {
            addr: "0x4355fc160f74328f9b383df2ec589bb3dfd82ba0",
            name: "OPT",
            decimals: 18
        }, {
            addr: "0x17fd666fa0784885fa1afec8ac624d9b7e72b752",
            name: "FLIK",
            decimals: 14
        }, {
            addr: "0xdab5dfa0966c3435da991b39d205c3ba1c64fe31",
            name: "MTP",
            decimals: 1
        }, {
            addr: "0x422866a8f0b032c5cf1dfbdef31a20f4509562b0",
            name: "ADST",
            decimals: 0
        }, {
            addr: "0x66497a283e0a007ba3974e837784c6ae323447de",
            name: "PT",
            decimals: 18
        }, {
            addr: "0x07d9e49ea402194bf48a8276dafb16e4ed633317",
            name: "DALC",
            decimals: 8
        }, {
            addr: "0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38",
            name: "DDF",
            decimals: 18
        }, {
            addr: "0xef68e7c694f40c8202821edf525de3782458639f",
            name: "LRC",
            decimals: 18
        }, {
            addr: "0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244",
            name: "RVT",
            decimals: 18
        }, {
            addr: "0x8a187d5285d316bcbc9adafc08b51d70a0d8e000",
            name: "SIFT",
            decimals: 0
        }, {
            addr: "0x8effd494eb698cc399af6231fccd39e08fd20b15",
            name: "PIX",
            decimals: 0
        }, {
            addr: "0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657",
            name: "TOV",
            decimals: 0
        }, {
            addr: "0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8",
            name: "TNT",
            decimals: 8
        }, {
            addr: "0x96a65609a7b84e8842732deb08f56c3e21ac6f8a",
            name: "CTR",
            decimals: 18
        }, {
            addr: "0xe6923e9b56db1eed1c9f430ea761da7565e260fe",
            name: "FC",
            decimals: 2
        }, {
            addr: "0xd850942ef8811f2a866692a623011bde52a462c1",
            name: "VEN",
            decimals: 18
        }, {
            addr: "0x2160e6c0ae8ca7d62fe1f57fc049f8363283ff5f",
            name: "BPT",
            decimals: 18
        }, {
            addr: "0xf05a9382a4c3f29e2784502754293d88b835109c",
            name: "REX",
            decimals: 18
        }, {
            addr: "0x73dd069c299a5d691e9836243bcaec9c8c1d8734",
            name: "BTE",
            decimals: 8
        }, {
            addr: "0x1bcbc54166f6ba149934870b60506199b6c9db6d",
            name: "ROC",
            decimals: 10
        }, {
            addr: "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
            name: "MANA",
            decimals: 18
        }, {
            addr: "0x27695e09149adc738a978e9a678f99e4c39e9eb9",
            name: "KICK",
            decimals: 8
        }, {
            addr: "0x4e260e3ca268e40133c84b142de73108a7c1ec99",
            name: "YC",
            decimals: 0
        }, {
            addr: "0xaf4dce16da2877f8c9e00544c93b62ac40631f16",
            name: "MTH",
            decimals: 5
        }, {
            addr: "0x9214ec02cb71cba0ada6896b8da260736a67ab10",
            name: "REAL",
            decimals: 18
        }, {
            addr: "0xe5a7c12972f3bbfe70ed29521c8949b8af6a0970",
            name: "BLX",
            decimals: 18
        }, {
            addr: "0x5cf4e9dfd975c52aa523fb5945a12235624923dc",
            name: "MPRM",
            decimals: 0
        }, {
            addr: "0x887834d3b8d450b6bab109c252df3da286d73ce4",
            name: "ATT",
            decimals: 18
        }, {
            addr: "0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404",
            name: "SNC",
            decimals: 18
        }, {
            addr: "0x138a8752093f4f9a79aaedf48d4b9248fab93c9c",
            name: "MCI",
            decimals: 18
        }, {
            addr: "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74",
            name: "WTC",
            decimals: 18
        }, {
            addr: "0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d",
            name: "AE",
            decimals: 18
        }, {
            addr: "0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22",
            name: "CCT",
            decimals: 18
        }, {
            addr: "0xf70a642bd387f94380ffb90451c2c81d4eb82cbc",
            name: "STAR",
            decimals: 18
        }, {
            addr: "0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8",
            name: "ELIX",
            decimals: 18
        }, {
            addr: "0x9cb9eb4bb7800bdbb017be2a4ffbeccb67454ea9",
            name: "BOPTOLD",
            decimals: 8
        }, {
            addr: "0x0d88ed6e74bbfd96b831231638b66c05571e824f",
            name: "AVT",
            decimals: 18
        }, {
            addr: "0x190e569be071f40c704e15825f285481cb74b6cc",
            name: "FAM",
            decimals: 12
        }, {
            addr: "0x190fb342aa6a15eb82903323ae78066ff8616746",
            name: "UMC",
            decimals: 6
        }, {
            addr: "0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4",
            name: "SAI",
            decimals: 18
        }, {
            addr: "0x1b9743f556d65e757c4c650b4555baf354cb8bd3",
            name: "ETBS",
            decimals: 12
        }, {
            addr: "0xd3c00772b24d997a812249ca637a921e81357701",
            name: "WILD",
            decimals: 18
        }, {
            addr: "0x516e5436bafdc11083654de7bb9b95382d08d5de",
            name: "ORME",
            decimals: 8
        }, {
            addr: "0xf99f901124cbbe180984a247ba94cfba0c764b2e",
            name: "SQRL",
            decimals: 6
        }, {
            addr: "0xb29678a4805a7d787dc9589e179d27f7575bb9f7",
            name: "AUA",
            decimals: 5
        }, {
            addr: "0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77",
            name: "MCD",
            decimals: 18
        }, {
            addr: "0xf0f8b0b8dbb1124261fc8d778e2287e3fd2cf4f5",
            name: "BQ",
            decimals: 3
        }, {
            addr: "0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970",
            name: "NDC",
            decimals: 18
        }, {
            addr: "0xc596bd09d652827b0106292d3e378d5938df4b12",
            name: "TPT",
            decimals: 18
        }, {
            addr: "0x07e3c70653548b04f0a75970c1f81b4cbbfb606f",
            name: "DLT",
            decimals: 18
        }, {
            addr: "0x7f1e2c7d6a69bf34824d72c53b4550e895c0d8c2",
            name: "BOP",
            decimals: 8
        }, {
            addr: "0x51db5ad35c671a87207d88fc11d593ac0c8415bd",
            name: "MDA",
            decimals: 18
        }, {
            addr: "0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9",
            name: "PST",
            decimals: 18
        }, {
            addr: "0xa6e7172662379f1f4c72108655869abdbb7f7672",
            name: "JADE",
            decimals: 5
        }, {
            addr: "0xfec0cf7fe078a500abf15f1284958f22049c2c7e",
            name: "ART",
            decimals: 18
        }, {
            addr: "0x089a6d83282fb8988a656189f1e7a73fa6c1cac2",
            name: "PGL",
            decimals: 18
        }, {
            addr: "0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5",
            name: "FLIP",
            decimals: 0
        }, {
            addr: "0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5",
            name: "KIN",
            decimals: 18
        }, {
            addr: "0x163733bcc28dbf26b41a8cfa83e369b5b3af741b",
            name: "PRS",
            decimals: 18
        }, {
            addr: "0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84",
            name: "MRV",
            decimals: 18
        }, {
            addr: "0x4d11061ec8f401edc2395b5f439a05eee6ccfa50",
            name: "BOTA",
            decimals: 18
        }, {
            addr: "0xac3da587eac229c9896d919abc235ca4fd7f72c1",
            name: "TGT",
            decimals: 1
        }, {
            addr: "0x437cf0bf53634e3dfa5e3eaff3104004d50fb532",
            name: "BTN",
            decimals: 4
        }, {
            addr: "0xf230b790e05390fc8295f4d3f60332c93bed42e2",
            name: "TRX",
            decimals: 6
        }, {
            addr: "0x8727c112c712c4a03371ac87a74dd6ab104af768",
            name: "JET",
            decimals: 18
        }, {
            addr: "0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05",
            name: "ATL",
            decimals: 18
        }, {
            addr: "0xb2f7eb1f2c37645be61d73953035360e768d81e6",
            name: "COB",
            decimals: 18
        }, {
            addr: "0x226bb599a12c826476e3a771454697ea52e9e220",
            name: "PRO",
            decimals: 8
        }, {
            addr: "0x51ee82641ac238bde34b9859f98f5f311d6e4954",
            name: "IQT",
            decimals: 8
        }, {
            addr: "0x0371a82e4a9d0a4312f3ee2ac9c6958512891372",
            name: "STU",
            decimals: 18
        }, {
            addr: "0x2f4baef93489b09b5e4b923795361a65a26f55e5",
            name: "XHY",
            decimals: 8
        }, {
            addr: "0xe256bb0b2a3457e54db3a41cf5a8b826aca222a8",
            name: "ARX",
            decimals: 18
        }, {
            addr: "0xe1479d294807379320dca9a9e9002ac644539099",
            name: "KING",
            decimals: 18
        }, {
            addr: "0xb72627650f1149ea5e54834b2f468e5d430e67bf",
            name: "BITS",
            decimals: 8
        }, {
            addr: "0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d",
            name: "EBET",
            decimals: 2
        }, {
            addr: "0x94d6b4fb35fb08cb34aa716ab40049ec88002079",
            name: "CNX",
            decimals: 8
        }, {
            addr: "0xdd6c68bb32462e01705011a4e2ad1a60740f217f",
            name: "HBT",
            decimals: 15
        }, {
            addr: "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
            name: "KNC",
            decimals: 18
        }, {
            addr: "0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945",
            name: "YESTERDAY",
            decimals: 18
        }, {
            addr: "0xee609fe292128cad03b786dbb9bc2634ccdbe7fc",
            name: "POS",
            decimals: 18
        }, {
            addr: "0xb45a50545beeab73f38f31e5973768c421805e5e",
            name: "TKR",
            decimals: 18
        }, {
            addr: "0x68db10ecc599d9f5e657acdafdbf6449d658bb2d",
            name: "GGS",
            decimals: 18
        }, {
            addr: "0x4a42d2c580f83dce404acad18dab26db11a1750e",
            name: "RLX",
            decimals: 18
        }, {
            addr: "0xf9c9da0c81fffd491458881410903561d1e40fd0",
            name: "ARENA",
            decimals: 18
        }, {
            addr: "0x2daee1aa61d60a252dc80564499a69802853583a",
            name: "ATS",
            decimals: 4
        }, {
            addr: "0x46eec301d2d00087145d1588282c182bd1890e5c",
            name: "RSPR",
            decimals: 16
        }, {
            addr: "0x5e4abe6419650ca839ce5bb7db422b881a6064bb",
            name: "WIC",
            decimals: 18
        }, {
            addr: "0x83eea00d838f92dec4d1475697b9f4d3537b56e3",
            name: "VOISE",
            decimals: 8
        }, {
            addr: "0xba2184520a1cc49a6159c57e61e1844e085615b6",
            name: "HGT",
            decimals: 8
        }, {
            addr: "0x12480e24eb5bec1a9d4369cab6a80cad3c0a377a",
            name: "SUB",
            decimals: 2
        }, {
            addr: "0x30aee7f259d6d1564ebef457847c672b30f13cbc",
            name: "DOM",
            decimals: 0
        }, {
            addr: "0xa8006c4ca56f24d6836727d106349320db7fef82",
            name: "INXT",
            decimals: 8
        }, {
            addr: "0xe814aee960a85208c3db542c53e7d4a6c8d5f60f",
            name: "DAY",
            decimals: 18
        }, {
            addr: "0x2469f31a34fcaac0debf73806ce39b2388874b13",
            name: "PPT2",
            decimals: 18
        }, {
            addr: "0x268b7976e94e84a48bf8b2b57ba34b59ed836a74",
            name: "XAI",
            decimals: 8
        }, {
            addr: "0x77faed976e187f26b49e78be8418ab074a341f26",
            name: "IWT",
            decimals: 18
        }, {
            addr: "0xdf6ef343350780bf8c3410bf062e0c015b1dd671",
            name: "BMC",
            decimals: 8
        }, {
            addr: "0x43ee79e379e7b78d871100ed696e803e7893b644",
            name: "UGT",
            decimals: 18
        }, {
            addr: "0x514910771af9ca656af840dff83e8264ecf986ca",
            name: "LINK",
            decimals: 18
        }, {
            addr: "0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139",
            name: "ATM",
            decimals: 8
        }, {
            addr: "0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d",
            name: "GOOC",
            decimals: 8
        }, {
            addr: "0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed",
            name: "TFT",
            decimals: 8
        }, {
            addr: "0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b",
            name: "ALPC",
            decimals: 0
        }, {
            addr: "0xe8ff5c9c75deb346acac493c463c8950be03dfba",
            name: "VIBE",
            decimals: 18
        }, {
            addr: "0xb4efd85c19999d84251304bda99e90b92300bd93",
            name: "RPL",
            decimals: 18
        }, {
            addr: "0xeeac3f8da16bb0485a4a11c5128b0518dac81448",
            name: "TEU",
            decimals: 18
        }, {
            addr: "0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7",
            name: "SDRN",
            decimals: 18
        }, {
            addr: "0x1eab19e6623e8cbcafc252e275f5b51c27656faf",
            name: "SPNK",
            decimals: 8
        }, {
            addr: "0x6467882316dc6e206feef05fba6deaa69277f155",
            name: "FAP",
            decimals: 18
        }, {
            addr: "0x540449e4d172cd9491c76320440cd74933d5691a",
            name: "DBETOLD",
            decimals: 18
        }, {
            addr: "0xf333b2ace992ac2bbd8798bf57bc65a06184afba",
            name: "SND",
            decimals: 0
        }, {
            addr: "0xab95e915c123fded5bdfb6325e35ef5515f1ea69",
            name: "XNN",
            decimals: 18
        }, {
            addr: "0x23cb17d7d079518dbff4febb6efcc0de58d8c984",
            name: "TRV",
            decimals: 16
        }, {
            addr: "0x65292eeadf1426cd2df1c4793a3d7519f253913b",
            name: "COSS",
            decimals: 18
        }, {
            addr: "0x27dce1ec4d3f72c3e457cc50354f1f975ddef488",
            name: "AIR",
            decimals: 8
        }, {
            addr: "0x10b123fddde003243199aad03522065dc05827a0",
            name: "SYN",
            decimals: 18
        }, {
            addr: "0xcb97e65f07da24d46bcdd078ebebd7c6e6e3d750",
            name: "BTM",
            decimals: 8
        }, {
            addr: "0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2",
            name: "LLT",
            decimals: 8
        }, {
            addr: "0x4156d3342d5c385a87d264f90653733592000581",
            name: "SALT",
            decimals: 8
        }, {
            addr: "0xce61f5e6d1fe5a86e246f68aff956f7757282ef0",
            name: "1LIFE",
            decimals: 18
        }, {
            addr: "0x52514e3acaeb06cab050a69b025083082ebe5b54",
            name: "CTCOLD",
            decimals: 4
        }, {
            addr: "0xf1d9139c6512452db91f25635457b844d7e22b8b",
            name: "CTC",
            decimals: 4
        }, {
            addr: "0xef2e9966eb61bb494e5375d5df8d67b7db8a780d",
            name: "SHIT",
            decimals: 0
        }, {
            addr: "0x29d75277ac7f0335b2165d0895e8725cbf658d73",
            name: "CSNO",
            decimals: 8
        }, {
            addr: "0x0aef06dcccc531e581f0440059e6ffcc206039ee",
            name: "ITT",
            decimals: 8
        }, {
            addr: "0xb561fef0d624c0826ff869946f6076b7c4f2ba42",
            name: "SER",
            decimals: 7
        }, {
            addr: "0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d",
            name: "HVN",
            decimals: 8
        }, {
            addr: "0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8",
            name: "POOL",
            decimals: 8
        }, {
            addr: "0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f",
            name: "LDM",
            decimals: 18
        }, {
            addr: "0xc3951d77737733174152532e8b0f27e2c4e9f0dc",
            name: "CLD",
            decimals: 6
        }, {
            addr: "0x6678e467fa5ccfbdc264d12f4b8b28fe4661606b",
            name: "DCNT",
            decimals: 1
        }, {
            addr: "0x82d193f8ee41d12aaa0a85cb006606d67f773e9c",
            name: "SMT",
            decimals: 1
        }, {
            addr: "0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609",
            name: "SWP",
            decimals: 18
        }, {
            addr: "0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5",
            name: "EDOGE",
            decimals: 18
        }, {
            addr: "0xeb2da9fac54284cea731d1f10bb34eecb3c00c14",
            name: "POW",
            decimals: 18
        }, {
            addr: "0xf028adee51533b1b47beaa890feb54a457f51e89",
            name: "BMT",
            decimals: 18
        }, {
            addr: "0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b",
            name: "DTC",
            decimals: 2
        }, {
            addr: "0x4c5601164e2048a4154de91fa5e0b07e626cab7f",
            name: "FNL",
            decimals: 3
        }, {
            addr: "0x0b76544f6c413a555f309bf76260d1e02377c02a",
            name: "INT",
            decimals: 6
        }, {
            addr: "0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4",
            name: "FRD",
            decimals: 18
        }, {
            addr: "0xea610b1153477720748dc13ed378003941d84fab",
            name: "ALIS",
            decimals: 18
        }, {
            addr: "0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8",
            name: "EVX",
            decimals: 4
        }, {
            addr: "0x0766e79a6fd74469733e8330b3b461c0320ff059",
            name: "EXN",
            decimals: 18
        }, {
            addr: "0x8d5a69dc82a47594881256f2eef81770274fa30f",
            name: "NTC",
            decimals: 18
        }, {
            addr: "0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd",
            name: "HOWL",
            decimals: 18
        }, {
            addr: "0x1bb9e8ea817d56eccc212ce63f7da95298f98719",
            name: "SHT",
            decimals: 2
        }, {
            addr: "0x865d176351f287fe1b0010805b110d08699c200a",
            name: "BCO",
            decimals: 8
        }, {
            addr: "0x881ef48211982d01e2cb7092c915e647cd40d85c",
            name: "OTN",
            decimals: 18
        }, {
            addr: "0x48f775efbe4f5ece6e0df2f7b5932df56823b990",
            name: "R",
            decimals: 0
        }, {
            addr: "0xa51153d9cf9d3cf6d58697b68eccc158d1e40388",
            name: "PME",
            decimals: 18
        }, {
            addr: "0xb23be73573bc7e03db6e5dfc62405368716d28a8",
            name: "ONEK",
            decimals: 18
        }, {
            addr: "0x6781a0f84c7e9e846dcb84a9a5bd49333067b104",
            name: "ZAP",
            decimals: 18
        }, {
            addr: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
            name: "ENJ",
            decimals: 18
        }, {
            addr: "0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e",
            name: "SOAR",
            decimals: 6
        }, {
            addr: "0xafe60511341a37488de25bef351952562e31fcc1",
            name: "TBT",
            decimals: 8
        }, {
            addr: "0x1db186898bccde66fa64a50e4d81078951a30dbe",
            name: "LLA",
            decimals: 18
        }, {
            addr: "0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5",
            name: "ARXAI",
            decimals: 18
        }, {
            addr: "0x24aef3bf1a47561500f9430d74ed4097c47f51f2",
            name: "SPARTA",
            decimals: 4
        }, {
            addr: "0xd884f9881e0aeabad79be8a69122cf998d067fff",
            name: "RUB",
            decimals: 18
        }, {
            addr: "0x5ca71ea65acb6293e71e62c41b720698b0aa611c",
            name: "BBD",
            decimals: 18
        }, {
            addr: "0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724",
            name: "VIB",
            decimals: 18
        }, {
            addr: "0x473319898464ca640af692a0534175981ab78aa1",
            name: "POKT",
            decimals: 4
        }, {
            addr: "0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e",
            name: "ETHB",
            decimals: 8
        }, {
            addr: "0x6fff3806bbac52a20e0d79bc538d527f6a22c96b",
            name: "CDX",
            decimals: 18
        }, {
            addr: "0xb62d18dea74045e822352ce4b3ee77319dc5ff2f",
            name: "EVC",
            decimals: 18
        }, {
            addr: "0x7d49eaac4c70abc1a659122f08c0806ae44703ef",
            name: "DET",
            decimals: 18
        }, {
            addr: "0x614ea929892ea43d3ea2c5e3311b01cc589bad6c",
            name: "ENO",
            decimals: 18
        }, {
            addr: "0x64c86899bc02dd9af823b131e5acd4369f72bd39",
            name: "RENT",
            decimals: 18
        }, {
            addr: "0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f",
            name: "KSS",
            decimals: 18
        }, {
            addr: "0x32c785e4e8477b277fea2ca2301727084d79d933",
            name: "NUGD",
            decimals: 0
        }, {
            addr: "0x84c2c31c04339c9938adfe3f8013315c8906f071",
            name: "EBCSH",
            decimals: 18
        }, {
            addr: "0x44f12955189e3f01be5daf1dd9002ee4d774f42b",
            name: "AFST",
            decimals: 18
        }, {
            addr: "0x6f1a769952c60b2d03f46419adeda91d87866dab",
            name: "ELTC",
            decimals: 18
        }, {
            addr: "0x415116bad878730f5db008ff381a73222128ad39",
            name: "EBCHB",
            decimals: 18
        }, {
            addr: "0x2f1b8c9d0a21b747d8ca370f93cb09d3daf222ef",
            name: "EXRP",
            decimals: 18
        }, {
            addr: "0x01a28adc0edd796b570ec4da734e1aa809f6f1fc",
            name: "EDASH",
            decimals: 18
        }, {
            addr: "0x0c6c9beeeb5de377210930f09a7ac9a99ff5e981",
            name: "EZEC",
            decimals: 18
        }, {
            addr: "0xb915ff79170d606935bceaf000d77ca4ed92d993",
            name: "ENEO",
            decimals: 18
        }, {
            addr: "0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0",
            name: "ELTC2",
            decimals: 8
        }, {
            addr: "0x1f103fd7c4fa908c25387da70ed287b632bd22a2",
            name: "ELTC3",
            decimals: 18
        }, {
            addr: "0xb518d165398d9057ea8b73096edda5c7754bcd62",
            name: "EXRP2",
            decimals: 18
        }, {
            addr: "0xf923ba61b43161a83afe2cab7d77ea1e41f27918",
            name: "PAL",
            decimals: 18
        }, {
            addr: "0xe26517a9967299453d3f1b48aa005e6127e67210",
            name: "NIMFA",
            decimals: 18
        }, {
            addr: "0x09debe702678140c1be278213109719fab98d0d8",
            name: "MOL",
            decimals: 18
        }, {
            addr: "0xb17df9a3b09583a9bdcf757d6367171476d4d8a3",
            name: "MVC",
            decimals: 18
        }, {
            addr: "0x90528aeb3a2b736b780fd1b6c478bb7e1d643170",
            name: "XPA",
            decimals: 18
        }, {
            addr: "0x0a76aad21948ea1ef447d26dee91a54370e151e0",
            name: "ELITE",
            decimals: 18
        }, {
            addr: "0xa51d948ff15fbabac476af160cba6901ce47f4b0",
            name: "LNT",
            decimals: 18
        }, {
            addr: "0x014b50466590340d41307cc54dcee990c8d58aa8",
            name: "ICOS",
            decimals: 6
        }, {
            addr: "0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044",
            name: "NCH",
            decimals: 12
        }, {
            addr: "0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61",
            name: "PLY",
            decimals: 18
        }, {
            addr: "0xc42209accc14029c1012fb5680d95fbd6036e2a0",
            name: "PPP",
            decimals: 18
        }, {
            addr: "0xae4191a7eb25713ac90483ea75828ae8038f94dc",
            name: "EZEC2",
            decimals: 18
        }, {
            addr: "0xb2bfeb70b903f1baac7f2ba2c62934c7e5b974c4",
            name: "BKB",
            decimals: 8
        }, {
            addr: "0xe66cc41dd03a170623dc087a69ad8d72e64cb838",
            name: "BTH2",
            decimals: 18
        }, {
            addr: "0xafc39788c51f0c1ff7b55317f3e70299e521fff6",
            name: "EBCH",
            decimals: 8
        }, {
            addr: "0x27054b13b1b798b345b591a4d22e6562d47ea75a",
            name: "AST",
            decimals: 4
        }, {
            addr: "0x5d21ef5f25a985380b65c8e943a0082feda0db84",
            name: "ECASH",
            decimals: 18
        }, {
            addr: "0xf152fca41bd23ff250292af391236db35e0e99c3",
            name: "EETH",
            decimals: 8
        }, {
            addr: "0x37f014c64d186eaf879c0033846b51924ce42584",
            name: "MDT",
            decimals: 0
        }, {
            addr: "0xfd784da5c740c617aafb80399fa81b86e1da99a5",
            name: "ITS",
            decimals: 8
        }, {
            addr: "0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4",
            name: "ENG",
            decimals: 8
        }, {
            addr: "0x13f1b7fdfbe1fc66676d56483e21b1ecb40b58e2",
            name: "ACC",
            decimals: 18
        }, {
            addr: "0x6025f65f6b2f93d8ed1efedc752acfd4bdbcec3e",
            name: "EGOLD",
            decimals: 18
        }, {
            addr: "0x3a1bda28adb5b0a812a7cf10a1950c920f79bcd3",
            name: "FLP",
            decimals: 18
        }, {
            addr: "0x90c88ccd74e57e016acae8ad1eaa12ecf4c06f33",
            name: "IBTC",
            decimals: 18
        }, {
            addr: "0xc51c938c4d513780c66c722a41c197d3a89fa9a8",
            name: "EBTG",
            decimals: 8
        }, {
            addr: "0x8f8221afbb33998d8584a2b05749ba73c37a938a",
            name: "REQ",
            decimals: 18
        }, {
            addr: "0x72adadb447784dd7ab1f472467750fc485e4cb2d",
            name: "WRC",
            decimals: 6
        }, {
            addr: "0x9b6443b0fb9c241a7fdac375595cea13e6b7807a",
            name: "RCC",
            decimals: 18
        }, {
            addr: "0xdee667186e7b81ecf7efc8713382d8d99a8b92b4",
            name: "EBCG",
            decimals: 18
        }, {
            addr: "0xa9aad2dc3a8315caeee5f458b1d8edc31d8467bd",
            name: "BTCM",
            decimals: 18
        }, {
            addr: "0x4ceda7906a5ed2179785cd3a40a69ee8bc99c466",
            name: "AION",
            decimals: 8
        }, {
            addr: "0x179a2e413386db620d5b89a18550a3874385f726",
            name: "FIT",
            decimals: 5
        }, {
            addr: "0xdf1ce35938f9ca2eab682284f82a81a9d25665ce",
            name: "STM",
            decimals: 18
        }, {
            addr: "0x87611ca3403a3878dfef0da2a786e209abfc1eff",
            name: "EUSD",
            decimals: 8
        }, {
            addr: "0x28c8d01ff633ea9cd8fc6a451d7457889e698de6",
            name: "ETG",
            decimals: 0
        }, {
            addr: "0x9541fd8b9b5fa97381783783cebf2f5fa793c262",
            name: "KZN",
            decimals: 8
        }, {
            addr: "0xa8f93faee440644f89059a2c88bdc9bf3be5e2ea",
            name: "CASH",
            decimals: 18
        }, {
            addr: "0xea38eaa3c86c8f9b751533ba2e562deb9acded40",
            name: "FUEL",
            decimals: 18
        }, {
            addr: "0xced4e93198734ddaff8492d525bd258d49eb388e",
            name: "EDO",
            decimals: 18
        }, {
            addr: "0xd96b9fd7586d9ea24c950d24399be4fb65372fdd",
            name: "BTCS",
            decimals: 18
        }, {
            addr: "0xe701cd3329057aea9d54300ddd05e41b8d74727a",
            name: "10MT",
            decimals: 10
        }, {
            addr: "0x15f173b7aca7cd4a01d6f8360e65fb4491d270c1",
            name: "EREAL",
            decimals: 18
        }, {
            addr: "0x331a550a2c7f96384eb69127aa0ea9ad4b5da099",
            name: "ATMT",
            decimals: 18
        }, {
            addr: "0xae258d5322b59d64df9eb483e3b1733332c3b66c",
            name: "ETHG",
            decimals: 8
        }, {
            addr: "0xa89b5934863447f6e4fc53b315a93e873bda69a3",
            name: "LUM",
            decimals: 18
        }, {
            addr: "0xe463d10ec6b4ff6a3e5be41144956116ca30d4c3",
            name: "7YPE",
            decimals: 0
        }, {
            addr: "0x7d4b8cce0591c9044a22ee543533b72e976e36c3",
            name: "CAG",
            decimals: 18
        }, {
            addr: "0x4cd988afbad37289baaf53c13e98e2bd46aaea8c",
            name: "KEY",
            decimals: 18
        }, {
            addr: "0xb91318f35bdb262e9423bc7c7c2a3a93dd93c92c",
            name: "NULS",
            decimals: 18
        }, {
            addr: "0xf8fa1a588cd8cd51c3c4d6dc16d2717f6332e821",
            name: "BXC",
            decimals: 2
        }, {
            addr: "0x1c4481750daa5ff521a2a7490d9981ed46465dbd",
            name: "BCPT",
            decimals: 18
        }, {
            addr: "0x58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8",
            name: "GXC",
            decimals: 10
        }, {
            addr: "0x9397554c07f687b7a20d13c73350cc283765d509",
            name: "SHLD",
            decimals: 18
        }, {
            addr: "0x539efe69bcdd21a83efd9122571a64cc25e0282b",
            name: "BLUE",
            decimals: 8
        }, {
            addr: "0x9af4f26941677c706cfecf6d3379ff01bb85d5ab",
            name: "DRT",
            decimals: 8
        }, {
            addr: "0xde39e5e5a1b0eeb3afe717d6d011cae88d19451e",
            name: "FUDD",
            decimals: 8
        }, {
            addr: "0xfcb48fdcc479b38068c06ee94249b1516adf09cb",
            name: "EURB",
            decimals: 5
        }, {
            addr: "0x7a79abd3905ef37b8d243c4c28cee73a751eb076",
            name: "CM",
            decimals: 18
        }, {
            addr: "0xebc86d834756621444a8a26b4cf81b625fe310cd",
            name: "ETHP",
            decimals: 18
        }, {
            addr: "0xce59d29b09aae565feeef8e52f47c3cd5368c663",
            name: "BULX",
            decimals: 18
        }, {
            addr: "0x26607f9bf9d62a37b0c78e1d3719fcd1fa32bef9",
            name: "GFL",
            decimals: 18
        }, {
            addr: "0x9dfe4643c04078a46803edcc30a3291b76d4c20c",
            name: "GEN",
            decimals: 18
        }, {
            addr: "0xdded69d8e28d38d640f6244ab5294f309fd40ce1",
            name: "LMT",
            decimals: 8
        }, {
            addr: "0x705ee96c1c160842c92c1aecfcffccc9c412e3d9",
            name: "POLL",
            decimals: 18
        }, {
            addr: "0xc78593c17482ea5de44fdd84896ffd903972878e",
            name: "BB",
            decimals: 9
        }, {
            addr: "0xc3972ac283b3a7a56125674631a5c254f7f373cf",
            name: "HAT",
            decimals: 12
        }, {
            addr: "0xf2e51e32d1f546423364a040ef1a6d2f05e31482",
            name: "HUBC",
            decimals: 6
        }, {
            addr: "0xffe8196bc259e8dedc544d935786aa4709ec3e64",
            name: "HDG",
            decimals: 18
        }, {
            addr: "0x7728dfef5abd468669eb7f9b48a7f70a501ed29d",
            name: "PRG",
            decimals: 6
        }, {
            addr: "0x1183f92a5624d68e85ffb9170f16bf0443b4c242",
            name: "QVT",
            decimals: 18
        }, {
            addr: "0x859a9c0b44cb7066d956a958b0b82e54c9e44b4b",
            name: "IETH",
            decimals: 8
        }, {
            addr: "0x76e82406a5040b605c6d30caf4802e7eb3184bbc",
            name: "EBCC",
            decimals: 6
        }, {
            addr: "0x1040613788e99c1606bd133db0ed7f7dbdf0cc80",
            name: "STH",
            decimals: 0
        }, {
            addr: "0x63b992e6246d88f07fc35a056d2c365e6d441a3d",
            name: "SCT",
            decimals: 18
        }, {
            addr: "0xdbfb423e9bbf16294388e07696a5120e4ceba0c5",
            name: "ETHD",
            decimals: 18
        }, {
            addr: "0x91126cfa7db2983527b0b749cc8a61fdeffedc28",
            name: "DONE",
            decimals: 16
        }, {
            addr: "0xbc63acdfafa94bd4d8c2bb7a8552281f107242c0",
            name: "MXX",
            decimals: 18
        }, {
            addr: "0x56e7f2cd7d5382506aab084a67d70e603cdb23f7",
            name: "CODE",
            decimals: 8
        }, {
            addr: "0x6d7a4c14c997333e304d5aef2aece73fd60ecc59",
            name: "WNDOLD",
            decimals: 18
        }, {
            addr: "0x6aac8cb9861e42bf8259f5abdc6ae3ae89909e11",
            name: "BTCRED",
            decimals: 8
        }, {
            addr: "0x0879e0c9822b75f31f0b0ed2a30be9f484a57c2f",
            name: "LTG",
            decimals: 0
        }, {
            addr: "0x044dd17bbbcbf1cf65f543918561bf8cf8130e7b",
            name: "EGR",
            decimals: 3
        }, {
            addr: "0x957c30ab0426e0c93cd8241e2c60392d08c6ac8e",
            name: "MOD",
            decimals: 0
        }, {
            addr: "0x52a17ca01b9925752aefde41bf80d7b10514e136",
            name: "PUMP",
            decimals: 15
        }, {
            addr: "0xe81d72d14b1516e68ac3190a46c93302cc8ed60f",
            name: "CL",
            decimals: 18
        }, {
            addr: "0x8c01ada8e708993a891d57d1b3169479a20acb3a",
            name: "VIT",
            decimals: 18
        }, {
            addr: "0x2405cc17ba128bfa7117815e04a4da228013f5bc",
            name: "BNN",
            decimals: 8
        }, {
            addr: "0x983877018633c0940b183cd38d1b58bee34f7301",
            name: "DEEP",
            decimals: 8
        }, {
            addr: "0xcedbf324a1eb1affe53ab7b7ef0103e070e3853f",
            name: "ETL",
            decimals: 10
        }, {
            addr: "0x4fbc28e3b3c1c50ee05dcd66d9fc614a0cb99705",
            name: "HHT",
            decimals: 18
        }, {
            addr: "0xe469c4473af82217b30cf17b10bcdb6c8c796e75",
            name: "EXRN",
            decimals: 0
        }, {
            addr: "0x0886949c1b8c412860c4264ceb8083d1365e86cf",
            name: "BTCE",
            decimals: 8
        }, {
            addr: "0xd6adc5e386d499361ccc5752f791b45132e7e6e4",
            name: "MSC",
            decimals: 0
        }, {
            addr: "0x5783862cef49094be4de1fe31280b2e33cf87416",
            name: "KRT",
            decimals: 4
        }, {
            addr: "0x994f0dffdbae0bbf09b652d6f11a493fd33f42b9",
            name: "EAGLE",
            decimals: 18
        }, {
            addr: "0x62a56a4a2ef4d355d34d10fbf837e747504d38d4",
            name: "PAYX",
            decimals: 2
        }, {
            addr: "0xc79d440551a03f84f863b1f259f135794c8a7190",
            name: "MGX",
            decimals: 18
        }, {
            addr: "0x4e279d8638e8669fad40e018fc181d26ee780380",
            name: "ETV",
            decimals: 8
        }, {
            addr: "0xb554cf51cda0fccd5012d55737c4df55a3e18a5c",
            name: "MLK",
            decimals: 8
        }, {
            addr: "0x4c382f8e09615ac86e08ce58266cc227e7d4d913",
            name: "SKR",
            decimals: 6
        }, {
            addr: "0x9375b738083101617f0642d7dbeaa89e361545e3",
            name: "ESMS",
            decimals: 0
        }, {
            addr: "0xb8742486c723793cf5162bb5d3425ed9cd73d049",
            name: "TCASH",
            decimals: 8
        }, {
            addr: "0x44e6d9ae9053a16e9311fd9702291c5516804359",
            name: "EBTGOLD",
            decimals: 0
        }, {
            addr: "0xef25e54e1ae9bfd966b9b5cde6880e7a2323a957",
            name: "SOCIAL",
            decimals: 18
        }, {
            addr: "0x5046e860ff274fb8c66106b0ffb8155849fb0787",
            name: "JS",
            decimals: 8
        }, {
            addr: "0x5f6e7fb7fe92ea7822472bb0e8f1be60d6a4ea50",
            name: "ARTE",
            decimals: 18
        }, {
            addr: "0xe50365f5d679cb98a1dd62d6f6e58e59321bcddf",
            name: "LA",
            decimals: 18
        }, {
            addr: "0x0cf0ee63788a0849fe5297f3407f701e122cc023",
            name: "DATA",
            decimals: 18
        }, {
            addr: "0xdb45faeca61c70e271bffeaf66162fa68a1c4def",
            name: "EBIT",
            decimals: 0
        }, {
            addr: "0x8633e144f2d9b9b8bdd12ddb58e4bef1e163a0ce",
            name: "YEL",
            decimals: 18
        }, {
            addr: "0xae4f56f072c34c0a65b3ae3e4db797d831439d93",
            name: "GIM",
            decimals: 8
        }, {
            addr: "0xe2f45f1660dc99daf3bd06f637ab1e4debc15bde",
            name: "SGG",
            decimals: 6
        }, {
            addr: "0xb3bd49e28f8f832b8d1e246106991e546c323502",
            name: "GMT",
            decimals: 18
        }, {
            addr: "0xf970b8e36e23f7fc3fd752eea86f8be8d83375a6",
            name: "RCN",
            decimals: 18
        }, {
            addr: "0xbf430e24ac0f33d4ad6fac9654b37943124c2786",
            name: "IBTG",
            decimals: 8
        }, {
            addr: "0x6b9e8076a536459303db301ba4430913a7f14c5a",
            name: "JDI",
            decimals: 2
        }, {
            addr: "0x2edc6fcc641f0169d54abb842f96f701eae85e4e",
            name: "ADUOLD",
            decimals: 18
        }, {
            addr: "0xba5f11b16b155792cf3b2e6880e8706859a8aeb6",
            name: "ARN",
            decimals: 8
        }, {
            addr: "0x9501bfc48897dceeadf73113ef635d2ff7ee4b97",
            name: "EMT",
            decimals: 18
        }, {
            addr: "0xa6e2f7f33f01fb399e72f3e044196eab7d348012",
            name: "AMO",
            decimals: 4
        }, {
            addr: "0x22c10728343e9d49ef25080f74a223878a3d4052",
            name: "DRP2",
            decimals: 8
        }, {
            addr: "0xac3211a5025414af2866ff09c23fc18bc97e79b1",
            name: "DOVU",
            decimals: 18
        }, {
            addr: "0x662abcad0b7f345ab7ffb1b1fbb9df7894f18e66",
            name: "CTX",
            decimals: 18
        }, {
            addr: "0x8bf8bcf8aba5ecffffd431489fe79dad38023a9b",
            name: "BUS",
            decimals: 8
        }, {
            addr: "0xa8ba4095833a3f924d86cb3941099c1abb75ea13",
            name: "SUB1X",
            decimals: 18
        }, {
            addr: "0x638ac149ea8ef9a1286c41b977017aa7359e6cfa",
            name: "ALTS",
            decimals: 18
        }, {
            addr: "0xff18dbc487b4c2e3222d115952babfda8ba52f5f",
            name: "LIFE",
            decimals: 18
        }, {
            addr: "0x181a63746d3adcf356cbc73ace22832ffbb1ee5a",
            name: "ALCO",
            decimals: 8
        }, {
            addr: "0x8f0921f30555624143d427b340b1156914882c10",
            name: "FYP",
            decimals: 18
        }, {
            addr: "0xfa2632a88bd0c11535a38f98a98db8251ccbaa9e",
            name: "GTA",
            decimals: 18
        }, {
            addr: "0x8e10f6bb9c973d61321c25a2b8d865825f4aa57b",
            name: "0ED",
            decimals: 18
        }, {
            addr: "0x03df4c372a29376d2c8df33a1b5f001cd8d68b0e",
            name: "BITCOINEREUM",
            decimals: 8
        }, {
            addr: "0xbb1b3e8ddded8165d58b0c192d19cd360682b170",
            name: "CAS",
            decimals: 2
        }, {
            addr: "0x49aec0752e68d0282db544c677f6ba407ba17ed7",
            name: "XBL",
            decimals: 18
        }, {
            addr: "0x8f070b17dd3953634e9e9c174d0f05396f681bc1",
            name: "CCP",
            decimals: 18
        }, {
            addr: "0xe58aff48f738b4a719d1790587cdc91a3560d7e1",
            name: "TMP",
            decimals: 7
        }, {
            addr: "0x87ae38d63a6bbb63e46219f494b549e3be7fc400",
            name: "LAP",
            decimals: 8
        }, {
            addr: "0x7f2176ceb16dcb648dc924eff617c3dc2befd30d",
            name: "OHNI",
            decimals: 0
        }, {
            addr: "0x2233799ee2683d75dfefacbcd2a26c78d34b470d",
            name: "NTWK",
            decimals: 18
        }, {
            addr: "0x9b8eb7a73a3c65fc3c892b494ab29cb061cf05ae",
            name: "1BIT",
            decimals: 0
        }, {
            addr: "0x580d69737e11cf2fb306c8fc0161b86f7c9f03ba",
            name: "NEBO",
            decimals: 3
        }, {
            addr: "0x26d5bd2dfeda983ecd6c39899e69dae6431dffbb",
            name: "ERC20",
            decimals: 18
        }, {
            addr: "0xfb4752ad1b7153e1dbd2e6662651a11c7fc14083",
            name: "MPESA",
            decimals: 8
        }, {
            addr: "0x27537ff4df3081cef9bee9b29cac764067b42611",
            name: "SLIP",
            decimals: 0
        }, {
            addr: "0xba71b32e71a41339aa4ceaa79528535aefe488d8",
            name: "ALIEF",
            decimals: 0
        }, {
            addr: "0xc9b89f6b5301f554b9adc6d4a871c3279820de40",
            name: "HAO",
            decimals: 18
        }, {
            addr: "0xd9a0658b7cc9ec0c57e8b20c0920d08f17e747be",
            name: "SAT",
            decimals: 10
        }, {
            addr: "0x7a41e0517a5eca4fdbc7fbeba4d4c47b9ff6dc63",
            name: "ZSC",
            decimals: 18
        }, {
            addr: "0x999967e2ec8a74b7c8e9db19e039d920b31d39d0",
            name: "TIE",
            decimals: 18
        }, {
            addr: "0x8bbf4dd0f11b3a535660fd7fcb7158daebd3a17e",
            name: "EGASOLD",
            decimals: 8
        }, {
            addr: "0xb53a96bcbdd9cf78dff20bab6c2be7baec8f00f8",
            name: "EGAS",
            decimals: 8
        }, {
            addr: "0x4dc3643dbc642b72c158e7f3d2ff232df61cb6ce",
            name: "AMB",
            decimals: 18
        }, {
            addr: "0xe3fa177acecfb86721cf6f9f4206bd3bd672d7d5",
            name: "CTT",
            decimals: 18
        }, {
            addr: "0xeb7c20027172e5d143fb030d50f91cece2d1485d",
            name: "EBTC",
            decimals: 8
        }, {
            addr: "0x9742fa8cb51d294c8267ddfead8582e16f18e421",
            name: "10MTI",
            decimals: 10
        }, {
            addr: "0x52a7cb918c11a16958be40cba7e31e32a499a465",
            name: "FDX",
            decimals: 18
        }, {
            addr: "0x12b19d3e2ccc14da04fae33e63652ce469b3f2fd",
            name: "GRID",
            decimals: 12
        }, {
            addr: "0x16b5a0de0520e1964a20ac8ef4034bd7d0920d8f",
            name: "TIOTOUR",
            decimals: 18
        }, {
            addr: "0xf6b55acbbc49f4524aa48d19281a9a77c54de10f",
            name: "WLK",
            decimals: 18
        }, {
            addr: "0x60200c0fefc1d0ade1e19a247b703cf3ccdc915a",
            name: "TWIT",
            decimals: 8
        }, {
            addr: "0xc99ddc30bb0cf76b07d90dcb6b267b8352697bef",
            name: "TDT",
            decimals: 18
        }, {
            addr: "0x2f5e044ad4adac34c8d8df738fac7743eda1409c",
            name: "AGO",
            decimals: 18
        }, {
            addr: "0xb444208cb0516c150178fcf9a52604bc04a1acea",
            name: "GRMD",
            decimals: 18
        }, {
            addr: "0x4d829f8c92a6691c56300d020c9e0db984cfe2ba",
            name: "XCC",
            decimals: 18
        }, {
            addr: "0x76195ffd0cfedf68625b3e5b64c7bd904eeb9d6c",
            name: "WETOLD",
            decimals: 18
        }, {
            addr: "0x0425cbbc5ff784203fe8d82beefa2b02634351f5",
            name: "FBR",
            decimals: 18
        }, {
            addr: "0x01c67791309c71aa4ed373025a0c089696d7c9e4",
            name: "CCB",
            decimals: 18
        }, {
            addr: "0x944f1a04ab8d735acdbc46505c5b283f54289152",
            name: "GBTS",
            decimals: 18
        }, {
            addr: "0x4a536c1ce7ad7f6e8d2e59135e17aef5ef4dd4e6",
            name: "GEC",
            decimals: 3
        }, {
            addr: "0xf6cfe53d6febaeea051f400ff5fc14f0cbbdaca1",
            name: "DGPT",
            decimals: 18
        }, {
            addr: "0x3293cc907fde439b39aedaf1b982785adaff186b",
            name: "TRIA",
            decimals: 10
        }, {
            addr: "0x5d51fcced3114a8bb5e90cdd0f9d682bcbcc5393",
            name: "B2B",
            decimals: 18
        }, {
            addr: "0x44197a4c44d6a059297caf6be4f7e172bd56caaf",
            name: "ELTCOIN",
            decimals: 8
        }, {
            addr: "0x5554e04e76533e1d14c52f05beef6c9d329e1e30",
            name: "NIO",
            decimals: 0
        }, {
            addr: "0x14fffb1e001615b7fb7c7857bdf440a610022e5b",
            name: "SCX",
            decimals: 0
        }, {
            addr: "0x275fd328c3986be83f8b60f79c73cf63fde98ca5",
            name: "CSL",
            decimals: 18
        }, {
            addr: "0x103c3a209da59d3e7c4a89307e66521e081cfdf0",
            name: "GVT",
            decimals: 18
        }, {
            addr: "0x44f588aeeb8c44471439d1270b3603c66a9262f1",
            name: "SNIP",
            decimals: 18
        }, {
            addr: "0x45321004790a4dae7ba19217a10574d55739efc7",
            name: "DEEM",
            decimals: 18
        }, {
            addr: "0x12a35383ca24ceb44cdcbbecbeb7baccb5f3754a",
            name: "CS",
            decimals: 6
        }, {
            addr: "0xe30e02f049957e2a5907589e06ba646fb2c321ba",
            name: "DRPU",
            decimals: 8
        }, {
            addr: "0x3e250a4f78410c29cfc39463a81f14a226690eb4",
            name: "DRPS",
            decimals: 8
        }, {
            addr: "0x24692791bc444c5cd0b81e3cbcaba4b04acd1f3b",
            name: "UKG",
            decimals: 18
        }, {
            addr: "0x595832f8fc6bf59c85c527fec3740a1b7a361269",
            name: "POWR",
            decimals: 6
        }, {
            addr: "0x9c1d13d5a8fd4a8ac89917d31d40db454d1ee60b",
            name: "ELUNCH",
            decimals: 18
        }, {
            addr: "0x180e5087935a94fd5bbab00fd2249c5be0473381",
            name: "ZCG",
            decimals: 8
        }, {
            addr: "0x14839bf22810f09fb163af69bd21bd5476f445cd",
            name: "CFD",
            decimals: 18
        }, {
            addr: "0x255aa6df07540cb5d3d297f0d0d4d84cb52bc8e6",
            name: "RDN",
            decimals: 18
        }, {
            addr: "0xd3e2f9dfff5a6feeece5dbcee3b86cb375fd8c98",
            name: "BCOIN",
            decimals: 8
        }, {
            addr: "0xc029ba3dc12e1834571e821d94a07de0a01138ea",
            name: "QBE",
            decimals: 18
        }, {
            addr: "0x00a0cbe98e4d110b0fa82646152d77babf2951d0",
            name: "EETHER",
            decimals: 18
        }, {
            addr: "0x9c23a568a32e8434ec88bdf60891a1d95ffd36cc",
            name: "CHUCK",
            decimals: 4
        }, {
            addr: "0xd819e892f4df8659188e8bda839fdf2215a513bc",
            name: "SPOON",
            decimals: 18
        }, {
            addr: "0xd2308446536a0bad028ab8c090d62e1ea2a51f24",
            name: "GNEISS",
            decimals: 0
        }, {
            addr: "0x50ee674689d75c0f88e8f83cfe8c4b69e8fd590d",
            name: "EPY",
            decimals: 8
        }, {
            addr: "0x7627de4b93263a6a7570b8dafa64bae812e5c394",
            name: "NXX",
            decimals: 8
        }, {
            addr: "0x6f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c",
            name: "SMART",
            decimals: 0
        }, {
            addr: "0x8b1f49491477e0fb46a29fef53f1ea320d13c349",
            name: "AMM",
            decimals: 6
        }, {
            addr: "0x8866d52303e372c2a2936d8ea09afd87bcbd8cf2",
            name: "TPL",
            decimals: 10
        }, {
            addr: "0x1245ef80f4d9e02ed9425375e8f649b9221b31d8",
            name: "ARCT",
            decimals: 8
        }, {
            addr: "0xdd007278b667f6bef52fd0a4c23604aa1f96039a",
            name: "RIPT",
            decimals: 8
        }, {
            addr: "0xa5a283557653f36cf9aa0d5cc74b1e30422349f2",
            name: "UETL",
            decimals: 8
        }, {
            addr: "0x93e24ce396a9e7d7de4a5bc616cf5fcab0476626",
            name: "ZIP",
            decimals: 8
        }, {
            addr: "0x399a0e6fbeb3d74c85357439f4c8aed9678a5cbf",
            name: "DCL",
            decimals: 3
        }, {
            addr: "0x519475b31653e46d20cd09f9fdcf3b12bdacb4f5",
            name: "VIU",
            decimals: 18
        }, {
            addr: "0x86410db4d61c40a8e1df9f859069d5a15896195b",
            name: "DJC",
            decimals: 18
        }, {
            addr: "0x7c53f13699e1f6ef5c699e893a20948bdd2e4de9",
            name: "DVD",
            decimals: 18
        }, {
            addr: "0x554c20b7c486beee439277b4540a434566dc4c02",
            name: "HST",
            decimals: 18
        }, {
            addr: "0x420c42ce1370c0ec3ca87d9be64a7002e78e6709",
            name: "STCN",
            decimals: 0
        }, {
            addr: "0xa94c128a138504e1f81d727cc21bcb9ae6581015",
            name: "FDM",
            decimals: 18
        }, {
            addr: "0xe8c5e942b76099c0c6d78271bad3ca002fa7c531",
            name: "HELP",
            decimals: 0
        }, {
            addr: "0xf24d3dfffcaf9f9a5dda9c57eeeb1ac0bba49c86",
            name: "XMAS",
            decimals: 18
        }, {
            addr: "0x7b1309c1522afd4e66c31e1e6d0ec1319e1eba5e",
            name: "BLN",
            decimals: 18
        }, {
            addr: "0x7731ee8b0b0ab88977be7922849eb767bbe8da15",
            name: "ABSOLD",
            decimals: 18
        }, {
            addr: "0xc6b014274d7406641711fb8889f93f4f11dec810",
            name: "NAO",
            decimals: 18
        }, {
            addr: "0x28481cdc0e4fa79164491d47e8837edeb3993f20",
            name: "TSS",
            decimals: 18
        }, {
            addr: "0x7d3e7d41da367b4fdce7cbe06502b13294deb758",
            name: "SSS",
            decimals: 8
        }, {
            addr: "0x1500205f50bf3fd976466d0662905c9ff254fc9c",
            name: "BBT",
            decimals: 4
        }, {
            addr: "0x3485b9566097ad656c70d6ebbd1cd044e2e72d05",
            name: "PNKOLD",
            decimals: 0
        }, {
            addr: "0x013a06558f07d9e6f9a00c95a33f3a0e0255176b",
            name: "BALI",
            decimals: 18
        }, {
            addr: "0xaf55f3b7dc65c8f9577cf00c8c5ca7b6e8cc4433",
            name: "ENTRC",
            decimals: 8
        }, {
            addr: "0x7259fddca8d5f0184b3b12aa7e8401964b703a4f",
            name: "HYTV",
            decimals: 3
        }, {
            addr: "0xea097a2b1db00627b2fa17460ad260c016016977",
            name: "UFR",
            decimals: 18
        }, {
            addr: "0x6733d909e10ddedb8d6181b213de32a30ceac7ed",
            name: "BTSE",
            decimals: 18
        }, {
            addr: "0x449574c69f3a658794829ed81639a7a9ece041e1",
            name: "NEOG",
            decimals: 0
        }, {
            addr: "0xc0c2ee1ce1fed8f6e2764363a36db3dd4cf10022",
            name: "FBL",
            decimals: 2
        }, {
            addr: "0xcbce61316759d807c474441952ce41985bbc5a40",
            name: "MOAC",
            decimals: 18
        }, {
            addr: "0xea642206310400cda4c1c5b8e7945314aa96b8a7",
            name: "MINT",
            decimals: 18
        }, {
            addr: "0x0b24fdf35876bbe2a1cc925321b8c301017474d4",
            name: "JWT",
            decimals: 0
        }, {
            addr: "0x0835ecd15ddf08d4786304d71b4672dc5c40f011",
            name: "PLC",
            decimals: 18
        }, {
            addr: "0xc5cea8292e514405967d958c2325106f2f48da77",
            name: "PRFT",
            decimals: 18
        }, {
            addr: "0xd024645809f74043cd2133c6afeb46f0de4ad88f",
            name: "DEER",
            decimals: 18
        }, {
            addr: "0x3d46454212c61ecb7b31248047fa033120b88668",
            name: "MVT",
            decimals: 18
        }, {
            addr: "0x38d1c39c3e85dbf0fc2f2d637a4872530ad07a5f",
            name: "NDO",
            decimals: 4
        }, {
            addr: "0x219218f117dc9348b358b8471c55a073e5e0da0b",
            name: "GRX",
            decimals: 18
        }, {
            addr: "0xcb5a05bef3257613e984c17dbcf039952b6d883f",
            name: "SGR",
            decimals: 8
        }, {
            addr: "0x7b22938ca841aa392c93dbb7f4c42178e3d65e88",
            name: "ASTRO",
            decimals: 4
        }, {
            addr: "0xb203b5495109c6c85615ebb2056f98301d470507",
            name: "TRASH",
            decimals: 3
        }, {
            addr: "0x74ceda77281b339142a36817fa5f9e29412bab85",
            name: "ERO",
            decimals: 8
        }, {
            addr: "0xd04963de435bd4d25b1cc8f05870f49edbfc8c18",
            name: "SNI",
            decimals: 18
        }, {
            addr: "0x5e3346444010135322268a4630d2ed5f8d09446c",
            name: "LOC",
            decimals: 18
        }, {
            addr: "0x3adfc4999f77d04c8341bac5f3a76f58dff5b37a",
            name: "PRIX",
            decimals: 8
        }, {
            addr: "0x0ffab58ea5a71cc3ca40217706c3c401407fa4a8",
            name: "INDIOLD",
            decimals: 18
        }, {
            addr: "0xa119f0f5fd06ebadff8883c0f3c40b2d22e7a44f",
            name: "CRTM",
            decimals: 8
        }, {
            addr: "0xe4c07f4637df3a0354f9b42a1b3178dc573b8926",
            name: "CZT",
            decimals: 0
        }, {
            addr: "0x1d10997e92011398a20612f9ee87e33449bc1fe4",
            name: "1KT",
            decimals: 18
        }, {
            addr: "0x2dbe0f03f1dddbdbc87557e86df3878ae25af855",
            name: "RC",
            decimals: 8
        }, {
            addr: "0x164f64ef2a44444743c5472fa68fb3784060d286",
            name: "T8C",
            decimals: 3
        }, {
            addr: "0xc324a2f6b05880503444451b8b27e6f9e63287cb",
            name: "XUC",
            decimals: 18
        }, {
            addr: "0x37256d58e298cacaa82aa0527d56521f1b19e1f5",
            name: "EALP",
            decimals: 18
        }, {
            addr: "0xc98e0639c6d2ec037a615341c369666b110e80e5",
            name: "EXMR",
            decimals: 8
        }, {
            addr: "0x6e58b4c41cab75dc0239938bf5455ab8823ee4de",
            name: "B2XOLD",
            decimals: 8
        }, {
            addr: "0x9b68bfae21df5a510931a262cecf63f41338f264",
            name: "DBET",
            decimals: 18
        }, {
            addr: "0x9c3a2334d8d7a8b9013c0e572a5bbdfc2fc69063",
            name: "LCC",
            decimals: 18
        }, {
            addr: "0x189c05c3c191015c694032e1b09c190d5db3fb50",
            name: "READ",
            decimals: 8
        }, {
            addr: "0xd341d1680eeee3255b8c4c75bcce7eb57f144dae",
            name: "ONG",
            decimals: 18
        }, {
            addr: "0x70838403ecc194b73e50b70a177b2ef413a2f421",
            name: "BZX",
            decimals: 18
        }, {
            addr: "0xdfbd6a960a55bcfcf59d5925351e05a51498bcef",
            name: "ROCK",
            decimals: 0
        }, {
            addr: "0x71f7b56f9f8641f73ca71512a93857a7868d1443",
            name: "KMR",
            decimals: 18
        }, {
            addr: "0x1b957dc4aefeed3b4a2351a6a6d5cbfbba0cecfa",
            name: "HQX",
            decimals: 18
        }, {
            addr: "0x9e386da8cdfcf8b9e7490e3f2a4589c570cb2b2f",
            name: "RPIL",
            decimals: 8
        }, {
            addr: "0x19aea60e2fd6ac54ecf2576292c8fc7046429c37",
            name: "HUB",
            decimals: 18
        }, {
            addr: "0x82b0e50478eeafde392d45d1259ed1071b6fda81",
            name: "DNA",
            decimals: 18
        }, {
            addr: "0xa0aa85b54f8a7b09c845f13a09172b08925f3d54",
            name: "SISA",
            decimals: 18
        }, {
            addr: "0x569cbdcc684edcc589939cc8f6b96e6abd9eb0f3",
            name: "IGN",
            decimals: 6
        }, {
            addr: "0x2cfd4c10c075fa51649744245ec1d0aa3d567e23",
            name: "IPY",
            decimals: 8
        }, {
            addr: "0x1844b21593262668b7248d0f57a220caaba46ab9",
            name: "PRL",
            decimals: 18
        }, {
            addr: "0x149a23f3d1a1e61e1e3b7eddd27f32e01f9788c7",
            name: "CARE",
            decimals: 18
        }, {
            addr: "0x15ef5b9447710eab904e63e6233ff540400d603f",
            name: "BTC2X",
            decimals: 8
        }, {
            addr: "0x9e88613418cf03dca54d6a2cf6ad934a78c7a17a",
            name: "SWM",
            decimals: 18
        }, {
            addr: "0xd286603e0f5de621b510a36c78c7616c015656f2",
            name: "BGIFT",
            decimals: 18
        }, {
            addr: "0x90b1b771d0814d607da104b988efa39288219d62",
            name: "MEDI",
            decimals: 18
        }, {
            addr: "0xedcd82784027001d7af57a34501c65a25f97fee4",
            name: "DATL",
            decimals: 18
        }, {
            addr: "0x7ea4c29d3d37f9b259be610b67b3125c4d095d02",
            name: "CANADA",
            decimals: 18
        }, {
            addr: "0xbec8f6d667594fb181c9d68e5c80c910888be93d",
            name: "STAKE",
            decimals: 8
        }, {
            addr: "0x9c9891f7795eb127ba4783b671573275ff3a83a9",
            name: "B2X",
            decimals: 8
        }, {
            addr: "0xfad572db566e5234ac9fc3d570c4edc0050eaa92",
            name: "BTHE",
            decimals: 18
        }, {
            addr: "0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d",
            name: "QSP",
            decimals: 18
        }, {
            addr: "0x11f8dd7699147566cf193596083d45c8f592c4ba",
            name: "ETHC",
            decimals: 0
        }, {
            addr: "0xe25f0974fea47682f6a7386e4217da70512ec997",
            name: "BRC",
            decimals: 18
        }, {
            addr: "0xbc9395973bd35a3b4bd924f050d2778c07506ecb",
            name: "GREED",
            decimals: 18
        }, {
            addr: "0xd317ff47dc7e1423e5e050870a66332833e5fd88",
            name: "PNY",
            decimals: 0
        }, {
            addr: "0xcc34366e3842ca1bd36c1f324d15257960fcc801",
            name: "BON",
            decimals: 18
        }, {
            addr: "0x71f1bc89f38b241f3ebf0d5a013fa2850c63a1d4",
            name: "ZDR",
            decimals: 8
        }, {
            addr: "0x1daaf3d62582639c6a7eabb467e2db9b56fafbbd",
            name: "USD_S",
            decimals: 18
        }, {
            addr: "0xd0800859d6f4bc0210b7807e770bc44a9ece7372",
            name: "USD_R",
            decimals: 18
        }, {
            addr: "0x1831887fbabf783910db128e60c41bfa016059d8",
            name: "EUR_S",
            decimals: 18
        }, {
            addr: "0xe5a219d4db92a701e79b6e548803c8ce55138686",
            name: "EUR_R",
            decimals: 18
        }, {
            addr: "0x1735fc2b89b80d1ae33c35dd55eae7fa7642f336",
            name: "CAD_S",
            decimals: 18
        }, {
            addr: "0xf4522eda455814d43b003bc1c38501b04d65cc4a",
            name: "CAD_R",
            decimals: 18
        }, {
            addr: "0xa9666166d3c7fd15e874801f99e9ad5bfb70c5cf",
            name: "GBP_S",
            decimals: 18
        }, {
            addr: "0xdfe2bd1d3dcbb97804acf3ee85230e832c4a7b5d",
            name: "GBP_R",
            decimals: 18
        }, {
            addr: "0x5f54c1512d036a0dd92744ee0a55ed183dde0484",
            name: "JPY_S",
            decimals: 18
        }, {
            addr: "0x22a3d74c363379189b6cc059d8fbd888e98df5ec",
            name: "JPY_R",
            decimals: 18
        }, {
            addr: "0x55648de19836338549130b1af587f16bea46f66b",
            name: "PBL",
            decimals: 18
        }, {
            addr: "0xd7aa94f17d60be06414973a45ffa77efd6443f0f",
            name: "BTCQ",
            decimals: 8
        }, {
            addr: "0x222728c202e7164dfbd127181d46409338c4328e",
            name: "MIND",
            decimals: 18
        }, {
            addr: "0x1d9e20e581a5468644fe74ccb6a46278ef377f9e",
            name: "CDRT",
            decimals: 8
        }, {
            addr: "0x4b4e611823702285fd526d7a8a3b0aa99ab2dbcd",
            name: "HDLT",
            decimals: 18
        }, {
            addr: "0x42d6622dece394b54999fbd73d108123806f6a18",
            name: "SPANK",
            decimals: 18
        }, {
            addr: "0x7b69b78cc7fee48202c208609ae6d1f78ce42e13",
            name: "GOAL",
            decimals: 18
        }, {
            addr: "0x494bbaf0124285e6ecb4dfd9eac76e18a9bf470f",
            name: "ETHX",
            decimals: 18
        }, {
            addr: "0x44830e5fbe354af3c1c8d405170c08d3bc8a2cd9",
            name: "ETHCEN",
            decimals: 8
        }, {
            addr: "0xfeed1a53bd53ffe453d265fc6e70dd85f8e993b6",
            name: "H2O",
            decimals: 18
        }, {
            addr: "0xa823e6722006afe99e91c30ff5295052fe6b8e32",
            name: "NEU",
            decimals: 18
        }, {
            addr: "0xf04a8ac553fcedb5ba99a64799155826c136b0be",
            name: "FLIXX",
            decimals: 18
        }, {
            addr: "0x39013f961c378f02c2b82a6e1d31e9812786fd9d",
            name: "SMS",
            decimals: 3
        }, {
            addr: "0xffb99f90bcd96fe743796fd8eefaaa6617753e79",
            name: "MMC2",
            decimals: 0
        }, {
            addr: "0x1175a66a5c3343bbf06aa818bb482ddec30858e0",
            name: "CIX",
            decimals: 18
        }, {
            addr: "0x111111f7e9b1fe072ade438f77e1ce861c7ee4e3",
            name: "CAT2",
            decimals: 18
        }, {
            addr: "0x5121e348e897daef1eef23959ab290e5557cf274",
            name: "AI",
            decimals: 18
        }, {
            addr: "0x80fb784b7ed66730e8b1dbd9820afd29931aab03",
            name: "LEND",
            decimals: 18
        }, {
            addr: "0x74951b677de32d596ee851a233336926e6a2cd09",
            name: "WBA",
            decimals: 7
        }, {
            addr: "0x4632091b0dd0e0902d1fe0534e16eb7b20328d70",
            name: "ULT",
            decimals: 18
        }, {
            addr: "0xa5d1e58ece1fc438d64e65769d2ab730143a4caf",
            name: "RBM",
            decimals: 18
        }, {
            addr: "0x1b22c32cd936cb97c28c5690a0695a82abf688e6",
            name: "WISH",
            decimals: 18
        }, {
            addr: "0x340d2bde5eb28c1eed91b2f790723e3b160613b7",
            name: "VEE",
            decimals: 18
        }, {
            addr: "0x25432dd810730331498c22fbf6b98432e7ef3e66",
            name: "BIO",
            decimals: 18
        }, {
            addr: "0x5b26c5d0772e5bbac8b3182ae9a13f9bb2d03765",
            name: "EDU",
            decimals: 8
        }, {
            addr: "0x5c5413bad5f6fdb0f4fcd1457e46ead8e01d73d3",
            name: "UAHOLD",
            decimals: 18
        }, {
            addr: "0x0f9b1d1d39118480cf8b9575419ea4e5189c88dd",
            name: "WET",
            decimals: 0
        }, {
            addr: "0x18edc1b644839eed61c69e624e96bbd469a2ef52",
            name: "ELC",
            decimals: 18
        }, {
            addr: "0x9901ed1e649c4a77c7fff3dfd446ffe3464da747",
            name: "ENT",
            decimals: 18
        }, {
            addr: "0x10c0337c42843e0b8ce743d7d5ff39b711f3ad82",
            name: "WND",
            decimals: 18
        }, {
            addr: "0xee9704a1d61aa2c1401e2303ac7e1f81c29ed860",
            name: "CLASH",
            decimals: 0
        }, {
            addr: "0x30cc0e266cf33b8eac6a99cbd98e39b890cfd69b",
            name: "CLASSY",
            decimals: 16
        }, {
            addr: "0x13f11c9905a08ca76e3e853be63d4f0944326c72",
            name: "DIVX",
            decimals: 18
        }, {
            addr: "0x9d5b592b687c887a5a34df5f9207adb2c2db3aec",
            name: "ETBT",
            decimals: 18
        }, {
            addr: "0xb4b1d2c217ec0776584ce08d3dd98f90ededa44b",
            name: "CO2",
            decimals: 18
        }, {
            addr: "0x0f513ffb4926ff82d7f60a05069047aca295c413",
            name: "XSC",
            decimals: 18
        }, {
            addr: "0xbf4a29269bf3a5c351c2af3a9c9ed81b07129ce4",
            name: "KEN",
            decimals: 18
        }, {
            addr: "0xc499ea948a1ad5d8eaf12abd2f67975c4dbe21aa",
            name: "ANGL",
            decimals: 18
        }, {
            addr: "0x80e7a4d750ade616da896c49049b7ede9e04c191",
            name: "ASTR",
            decimals: 4
        }, {
            addr: "0x5882d49d3511e09096cbbab7e19fbfb82f65f28d",
            name: "BIONT",
            decimals: 18
        }, {
            addr: "0x0bb217e40f8a5cb79adf04e1aab60e5abd0dfc1e",
            name: "SWFTC",
            decimals: 8
        }, {
            addr: "0x679badc551626e01b23ceecefbc9b877ea18fc46",
            name: "CCO",
            decimals: 18
        }, {
            addr: "0x08f8117155aa9414b67113a47ad269d47974e9dc",
            name: "DHG",
            decimals: 18
        }, {
            addr: "0xb4c55b5a1faf5323e59842171c2492773a3783dd",
            name: "BCDC",
            decimals: 18
        }, {
            addr: "0x31b5e97294e1afd6fff6ffe4cba89a344555f753",
            name: "ALLY",
            decimals: 18
        }, {
            addr: "0xa25d01d15fc0e3cdede1bebee4124394aae0db33",
            name: "FLLW",
            decimals: 18
        }, {
            addr: "0xbdc5bac39dbe132b1e030e898ae3830017d7d969",
            name: "SNOV",
            decimals: 18
        }, {
            addr: "0x8ce9411df545d6b51a9bc52a89e0f6d1b54a06dd",
            name: "ABS",
            decimals: 0
        }, {
            addr: "0x0af44e2784637218dd1d32a322d44e603a8f0c6a",
            name: "MTX",
            decimals: 18
        }, {
            addr: "0x0f598112679b78e17a4a9febc83703710d33489c",
            name: "XMRG",
            decimals: 8
        }, {
            addr: "0xfb7da9863e030495db8b4d067d665fc8433fff85",
            name: "PCC",
            decimals: 18
        }, {
            addr: "0x6cee948c9d593c58cba5dfa70482444899d1341c",
            name: "SXSOLD",
            decimals: 18
        }, {
            addr: "0xa0e743c37c470ab381cf0e87b6e8f12ef19586fd",
            name: "CRYPHER",
            decimals: 18
        }, {
            addr: "0xe8c09672cfb9cfce6e2edbb01057d9fa569f97c1",
            name: "INDI",
            decimals: 18
        }, {
            addr: "0x21692a811335301907ecd6343743791802ba7cfd",
            name: "ADU",
            decimals: 18
        }, {
            addr: "0xb4bfa6b45e25ad12bb033ec8a5eff523b83cc9af",
            name: "UAHPAY",
            decimals: 18
        }, {
            addr: "0x2604fa406be957e542beb89e6754fcde6815e83f",
            name: "PKT",
            decimals: 18
        }, {
            addr: "0x2fa32a39fc1c399e0cc7b2935868f5165de7ce97",
            name: "PFR",
            decimals: 8
        }, {
            addr: "0x419c4db4b9e25d6db2ad9691ccb832c8d9fda05e",
            name: "DRGN",
            decimals: 18
        }, {
            addr: "0xe42ba5558b00d2e6109cc60412d5d4c9473fe998",
            name: "IMC",
            decimals: 18
        }, {
            addr: "0x342ba159f988f24f0b033f3cc5232377ee500543",
            name: "RAC",
            decimals: 18
        }, {
            addr: "0x06147110022b768ba8f99a8f385df11a151a9cc8",
            name: "ACE",
            decimals: 0
        }, {
            addr: "0x0f4ca92660efad97a9a70cb0fe969c755439772c",
            name: "LEV",
            decimals: 9
        }, {
            addr: "0x83cee9e086a77e492ee0bb93c2b0437ad6fdeccc",
            name: "MNTP",
            decimals: 18
        }, {
            addr: "0x05c7065d644096a4e4c3fe24af86e36de021074b",
            name: "LCT",
            decimals: 18
        }, {
            addr: "0xd234bf2410a0009df9c3c63b610c09738f18ccd7",
            name: "DTR",
            decimals: 8
        }, {
            addr: "0x286bda1413a2df81731d4930ce2f862a35a609fe",
            name: "WABI",
            decimals: 18
        }, {
            addr: "0xd6e49800decb64c0e195f791348c1e87a5864fd7",
            name: "RCT",
            decimals: 9
        }, {
            addr: "0x52f7018bc6ba4d24abfbaefccae4617bfb0a0b52",
            name: "YACHT",
            decimals: 9
        }, {
            addr: "0x672a1ad4f667fb18a333af13667aa0af1f5b5bdd",
            name: "CRED",
            decimals: 18
        }, {
            addr: "0xaadb05f449072d275833baf7c82e8fca4ee46575",
            name: "SXUOLD",
            decimals: 6
        }, {
            addr: "0x554c98b3ec772f79ee5b96d47a1d10852ed274c8",
            name: "SXDOLD",
            decimals: 6
        }, {
            addr: "0x2eb86e8fc520e0f6bb5d9af08f924fe70558ab89",
            name: "LGR",
            decimals: 8
        }, {
            addr: "0x6beb418fc6e1958204ac8baddcf109b8e9694966",
            name: "LNC",
            decimals: 18
        }, {
            addr: "0xaf146fbd319ca7ae178caa2c9d80a2db6b944350",
            name: "PXT",
            decimals: 18
        }, {
            addr: "0x8b0c9f462c239c963d8760105cbc935c63d85680",
            name: "SHNZ",
            decimals: 8
        }, {
            addr: "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
            name: "CMT",
            decimals: 18
        }, {
            addr: "0xfdbc1adc26f0f8f8606a5d63b7d3a3cd21c22b23",
            name: "1WO",
            decimals: 8
        }, {
            addr: "0x27f610bf36eca0939093343ac28b1534a721dbb4",
            name: "WAND",
            decimals: 18
        }, {
            addr: "0xe0c21b3f45fea3e5fdc811021fb1f8842caccad2",
            name: "BITC",
            decimals: 0
        }, {
            addr: "0xce53a179047ebed80261689367c093c90a94cc08",
            name: "EDT",
            decimals: 8
        }]
    },
    872: function(e, a) {},
    873: function(e, a) {},
    9: function(e, a, d) {
        "use strict";
        var c = d(407)
          , t = d(408)
          , n = d(410)
          , r = d(409)
          , s = d(411)
          , i = d(406);
        a.a = {
            CoinMarketCap: c.a,
            CryptoCompare: t.a,
            Fixer: n.a,
            EtherDelta: r.a,
            Liqui: s.a,
            Chan: i.a
        }
    }
}, [404]);
