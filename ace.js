(window['webpackJsonp'] = window['webpackJsonp'] || [
]).push([['chunk-524ace69'],
    {
        4779: function (f, e, a) {
            'use strict';
            a('7502')
        },
        '4aba': function (f, e, a) {
            'use strict';
            a.r(e);
            var t = function () {
                    var f = this,
                        e = f.$createElement,
                        a = f._self._c || e;
                    return a('div', {
                        staticClass: 'container'
                    }, [
                        a('el-dialog', {
                            attrs: {
                                width: f.isPc ? '600px' : 'auto',
                                title: f.$t('createToken.success'),
                                visible: f.isShowTokenCreateSuccessDialog
                            },
                            on: {
                                'update:visible': function (e) {
                                    f.isShowTokenCreateSuccessDialog = e
                                }
                            }
                        }, [
                            a('p', [
                                f._v(f._s(f.$t('createToken.tokenaddress')))
                            ]),
                            a('el-tag', [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: f.blockTxurl + '/token/' + f.createTokenAddress
                                    }
                                }, [
                                    f._v(f._s(f.createTokenAddress))
                                ])
                            ]),
                            a('div', {
                                staticClass: 'dialog-footer',
                                attrs: {
                                    slot: 'footer'
                                },
                                slot: 'footer'
                            }, [
                                a('el-button', {
                                    attrs: {
                                        type: 'primary'
                                    },
                                    on: {
                                        click: function (e) {
                                            f.isShowTokenCreateSuccessDialog = !1
                                        }
                                    }
                                }, [
                                    f._v(f._s(f.$t('createToken.confirm')))
                                ])
                            ], 1)
                        ], 1),
                        a('el-dialog', {
                            attrs: {
                                width: f.isPc ? '600px' : 'auto',
                                title: f.$t('createToken.ido_success'),
                                visible: f.isShowIdoCreateSuccessDialog
                            },
                            on: {
                                'update:visible': function (e) {
                                    f.isShowIdoCreateSuccessDialog = e
                                }
                            }
                        }, [
                            a('p', [
                                f._v(f._s(f.$t('createToken.idoaddress')) + ': '),
                                a('el-tag', [
                                    f._v(f._s(f.createTokenAddress))
                                ])
                            ], 1),
                            a('div', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: 1 === f.idoForm.idoType,
                                        expression: 'idoForm.idoType === 1'
                                    }
                                ]
                            }, [
                                a('el-tag', [
                                    a('a', {
                                        attrs: {
                                            target: '_blank',
                                            href: 'https://cointool.app/ido/exchange?menu=1&contact=1&address=' + f.createTokenAddress + '&c=' + f.chainId
                                        }
                                    }, [
                                        f._v(f._s(f.createTokenAddress))
                                    ])
                                ]),
                                a('p', [
                                    f._v('Please send '),
                                    a('el-tag', {
                                        attrs: {
                                            type: 'danger'
                                        }
                                    }, [
                                        f._v(' ' + f._s(f.totalToken))
                                    ]),
                                    f._v(' tokens to the Ido contract address,For claim after Ido')
                                ], 1)
                            ], 1),
                            a('div', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: 2 === f.idoForm.idoType,
                                        expression: 'idoForm.idoType === 2'
                                    }
                                ]
                            }, [
                                a('p', [
                                    f._v('Please send '),
                                    a('el-tag', {
                                        attrs: {
                                            type: 'danger'
                                        }
                                    }, [
                                        f._v(' ' + f._s(f.totalToken))
                                    ]),
                                    f._v(' tokens to the Ido contract address,Used for IDO sending to users')
                                ], 1),
                                a('p', [
                                    f._v('Send ' + f._s(f.symbol) + ' to IDO contract address ，Get instant tokens')
                                ])
                            ]),
                            a('div', {
                                staticClass: 'dialog-footer',
                                attrs: {
                                    slot: 'footer'
                                },
                                slot: 'footer'
                            }, [
                                a('el-button', {
                                    attrs: {
                                        type: 'primary'
                                    },
                                    on: {
                                        click: function (e) {
                                            f.isShowIdoCreateSuccessDialog = !1
                                        }
                                    }
                                }, [
                                    f._v(f._s(f.$t('createToken.confirm')))
                                ])
                            ], 1)
                        ]),
                        'zh' !== f.language && 'zh-CN' !== f.navigatorLanguage || 'development' === f.NODE_ENV ? a('Card', {
                            attrs: {
                                icon: f.route_icon,
                                title: f.route_title,
                                desc: f.$t('createToken.pageDesc'),
                                'create-type': f.activeTabs
                            }
                        }, [
                            a('CreateTokenTab', {
                                staticStyle: {
                                    margin: '40px 0'
                                },
                                attrs: {
                                    list: f.tabsList,
                                    active: f.activeTabs
                                },
                                on: {
                                    onChangeCreateTokenActive: f.onChangeCreateTokenActive
                                }
                            }),
                            a('TokenForm', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: 0 === f.activeTabs,
                                        expression: 'activeTabs === 0'
                                    }
                                ],
                                ref: 'TokenForm',
                                attrs: {
                                    form: f.form,
                                    loading: f.loading
                                },
                                on: {
                                    onCreate: f.onCreateToken
                                }
                            }),
                            a('IdoForm', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: 1 === f.activeTabs,
                                        expression: 'activeTabs === 1'
                                    }
                                ],
                                attrs: {
                                    form: f.idoForm,
                                    loading: f.loading
                                },
                                on: {
                                    onCreate: f.onCreateIDO
                                }
                            }),
                            a('el-card', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: f.txList.length > 0,
                                        expression: 'txList.length > 0'
                                    }
                                ],
                                staticClass: 'box-card',
                                staticStyle: {
                                    'margin-top': '40px'
                                }
                            }, [
                                a('DealList', {
                                    attrs: {
                                        list: f.txList,
                                        'block-txurl': f.blockTxurl
                                    }
                                }),
                                a('el-alert', {
                                    directives: [
                                        {
                                            name: 'show',
                                            rawName: 'v-show',
                                            value: f.tx_status,
                                            expression: 'tx_status'
                                        }
                                    ],
                                    staticClass: 'tips',
                                    attrs: {
                                        title: f.$t('createToken.success'),
                                        type: 'success',
                                        closable: !1
                                    }
                                })
                            ], 1)
                        ], 1) : a('div', {
                            staticClass: 'tips_err'
                        }, [
                            a('p', [
                                f._v('CoinTool不提供任何技术支持！')
                            ]),
                            a('p', [
                                f._v('已关闭创建代币功能，请勿用于违法活动!')
                            ])
                        ])
                    ], 1)
                },
                n = [
                ],
                b = a('4833'),
                s = a('efe2'),
                i = (a('6a61'), a('dfe9'), a('7479'), a('4a32'), a('a9b5'), a('37de'), a('1e34'), a('52c1')),
                r = {
                    zh: {
                        createToken: {
                            tokenaddress: '代币地址',
                            idoaddress: 'IDO地址',
                            tokenaddress_tip: '您的代币合约地址，不是你的私人地址!',
                            rate_tip: '1 {a} 获得 N 个代币',
                            cap_tip: '总共募集{a}的数量',
                            uplimit_tip: '每个用户{a}兑换额度上限，0 无限制',
                            startTime_tip: 'IDO启动时间',
                            endDays_tip: 'IDO总共持续天数',
                            lockDays_tip: 'IDO结束后，Claim 锁定天数，0 不锁定',
                            adminAddress_tip: '用于管理IDO合约和接收募集代币',
                            rate: '兑换比例',
                            cap: '募集总量({a})',
                            no_null: '不能为空!',
                            idoType: '领取类型',
                            idoType1: '手动领取',
                            idoType2: '自动发送',
                            idoType_tip1: '需要用户手动在页面Claim领取',
                            idoType_tip2: '用户发送{a}到IDO合约，将会自动发送Token给用户',
                            Idoalert2: 'Token小数必须准确!',
                            uplimit: '最大额度',
                            startTime: '启动时间',
                            endDays: '募集天数',
                            lockDays: '锁定天数',
                            adminAddress: '管理员地址',
                            tokenName: '代币名称',
                            tokenNameValidate: '请输入代币名称',
                            symbol: '缩写符号',
                            symbolValidate: '请输入缩写符号',
                            initialSupply: '发行数量',
                            initialSupplyValidate: '请输入发行数量',
                            decimals: '小数位数(1-18)',
                            decimalsValidate: '请输入小数位数',
                            config: '其他配置',
                            createBtn: '立即创建',
                            alert: '创建成功后会自动把代币转入创建者地址中',
                            tipsAgainPhone: '如DAPP无反应请断开后重新连接!',
                            success: '代币创建成功，请前往区块浏览器或钱包查看！',
                            ido_success: 'IDO创建成功，请前往区块浏览器或钱包查看！',
                            pageDesc: '简单、快速、便捷',
                            confirm: '确定',
                            config_0: '可销毁',
                            config_1: '可增发',
                            config_2: '可暂停',
                            config_3: '提取以太',
                            config_4: '提取代币',
                            config_5: '黑名单',
                            config0_tips: '可销毁发行数量',
                            config1_tips: '可增发发行数量',
                            config2_tips: '暂停所有地址的转账等操作',
                            config5_tips: '可添加某个地址为黑名单，限制转账操作',
                            transactionFee: '手续费比例',
                            transactionFee_tips: '所有交易收取指定比例手续费(税)，<br>将会发送到指定地址!0为不收取!',
                            burnFee: '销毁比例',
                            burnFee_tips: '所有交易燃烧指定比例代币，总量减小，0为不燃烧!',
                            Deflationary: '通货紧缩',
                            Deflationary_tips: '所有交易收取手续费和燃烧代币',
                            transactionFeeAddress: '手续费接收地址',
                            transactionFeeAddress_tips: '手续费接收地址，请设置为你有权限控制的地址!注意:此地址不会被收取费用和燃烧Token',
                            DeflationaryV2: '通货紧缩V2',
                            DeflationaryV2_tips: '所有交易收取手续费返还给所有持仓用户和燃烧代币和收取手续费',
                            charityFee: '代币持有人',
                            charityFee_tips: '所有交易收取指定比例手续费返还给代币持有人',
                            AutomaticLP: ' 自动LP',
                            AutomaticLP_tips: '每笔交易都会自动给LP增加流动性。',
                            maxamount: '转账最大数量',
                            maxamount_tips: '每笔交易必须小于此数量，管理员不受限制',
                            Idoalert: '创建成功后会自动生成IDO链接，在IDO面板中查看',
                            sellswapamount: '自动LP数量',
                            sellswapamount_tips: '每次自动添加流动性的数量',
                            lpswap: 'LP SWAP',
                            lpswap_tips: '自动添加LP的去中心化交易所',
                            createTab1: '创建代币',
                            createTab2: 'IDO创建',
                            advancedSettings: '高级功能'
                        }
                    },
                    en: {
                        createToken: {
                            tokenaddress: 'Token Address',
                            idoaddress: 'IDO Address',
                            tokenaddress_tip: 'Your token contract address, not your personal address!',
                            rate_tip: '1 {a} Get N Token',
                            cap_tip: 'Total number of {a} sale',
                            uplimit_tip: 'Each user {a} exchange limit, 0 unlimited',
                            startTime_tip: 'Ido start time',
                            endDays_tip: 'Ido total sale days',
                            lockDays_tip: 'After Ido, claim is locked for days, 0 is not locked',
                            adminAddress_tip: 'Used to manage Ido contracts and receive raised tokens',
                            rate: 'Rate',
                            cap: 'To raise({a})',
                            uplimit: 'Max. contribution',
                            no_null: 'Cannot be empty!',
                            startTime: 'Start time',
                            endDays: 'Sale Days',
                            lockDays: 'Lock Days',
                            adminAddress: 'Admin address',
                            tokenName: 'Token Name',
                            tokenNameValidate: 'Please enter token name',
                            symbol: 'Symbol',
                            symbolValidate: 'Please enter symbol',
                            initialSupply: 'Initial Supply',
                            initialSupplyValidate: 'Please enter initial supply',
                            decimals: 'Decimals(1-18)',
                            decimalsValidate: 'Please enter decimals',
                            config: 'Other Config',
                            Idoalert: 'After the creation is successful, an IDO link will be automatically generated, and you can view it in the IDO panel',
                            createBtn: 'Create Token',
                            alert: 'It only takes 10 seconds to create successfully, without manual intervention, the token will be automatically transferred to the address of the creator/owner after the creation is successful. The token does not have any copyright, it is automatically deployed to the main network and verified!',
                            tipsAgainPhone: 'If the DAPP does not respond, please disconnect and reconnect!',
                            success: 'Token created successfully, please go to the block browser or wallet to check!',
                            ido_success: 'IDO created successfully, please go to the block browser or wallet to check!',
                            pageDesc: 'Simple, Fast, Convenient',
                            idoType: 'Type of claim',
                            idoType1: 'Manual claim',
                            idoType2: 'Auto distribution',
                            idoType_tip1: 'You need to claim it manually on the claim page',
                            idoType_tip2: 'the user sends {a} to the Ido contract,Get instant tokens',
                            Idoalert2: 'Token decimal It has to be accurate，Block browser check!',
                            confirm: 'Confirm',
                            config_0: 'Can Burn',
                            config_1: 'Can Mint',
                            config_2: 'Can Pause',
                            config_3: 'Extract Eth',
                            config_4: 'Extract Token',
                            config_5: 'Blacklist',
                            transactionFee: 'transaction fee',
                            transactionFee_tips: 'All Transactions:n% transaction fee applied <br> and send to appoint address automatically! 0 off!',
                            burnFee: 'Burn fee',
                            burnFee_tips: 'All Transactions:n% will be burnt，Can reduce supply!0 off!',
                            Deflationary: 'Deflation',
                            Deflationary_tips: 'every transaction charges transaction fees and burns tokens',
                            transactionFeeAddress: 'Receive address',
                            charityFee: 'distributed to holders',
                            charityFee_tips: 'All Transactions: n% transaction fee applied and distributed to holders automatically!',
                            transactionFeeAddress_tips: 'The Receive address of the transaction fee,<br> please set it to an address <br> that you have permission to control!<br>Note: this address will not be charged and Burn Token',
                            config0_tips: 'This check specifies whether your tokens can be burned to decrease the supply.',
                            config1_tips: 'Minting specifies the opposite, whether more tokens can be created to increase the initial supply.',
                            config2_tips: 'This check specifies whether your token and all associated operations can be halted and resumed whenever needed. This pausing operation can be used in case of a software vulnerability or a malicious attack. Be aware that enabling pausing gives authority to whoever is allowed to pause or unpause, such as the creator of the token, and this central authority may not suit certain use cases.',
                            config5_tips: 'Accounts can also be blacklisted if they act malicius. Depending on the use case, it may be better for some tokens to have this feature turned off. Similar to the pausing feature, enabling blacklists causes central authority, which may not suit certain use cases.',
                            AutomaticLP: ' Automatic LP',
                            AutomaticLP_tips: 'Every trade contributes towards automatically generating liquidity that goes into pools used by exchanges',
                            maxamount: 'Transfers MAX Amount',
                            maxamount_tips: 'Each transaction must be less than this Amount, the admin is not limited',
                            sellswapamount: 'Automatic LP Amount',
                            sellswapamount_tips: 'Automatically add the amount of liquidity，the admin is not limited',
                            lpswap: 'LP SWAP',
                            lpswap_tips: 'Decentralized exchange that automatically adds LP',
                            createTab1: 'Create Token',
                            createTab2: 'IDO Create',
                            advancedSettings: 'Advanced settings'
                        }
                    }
                },
                o = a('a835'),
                d = a('4e2c'),
                c = a('12f9'),
                p = a('7691'),
                u = function () {
                    var f = this,
                        e = f.$createElement,
                        a = f._self._c || e;
                    return a('el-form', {
                        ref: 'form',
                        staticClass: 'form',
                        attrs: {
                            'label-position': f.isPc ? 'left' : 'top',
                            rules: f.rules,
                            model: f.form,
                            'label-suffix': ':',
                            'label-width': '160px'
                        }
                    }, [
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.tokenName'),
                                prop: 'tokenName'
                            }
                        }, [
                            a('el-input', {
                                attrs: {
                                    placeholder: 'e.g. Good Luck Token'
                                },
                                model: {
                                    value: f.form.tokenName,
                                    callback: function (e) {
                                        f.$set(f.form, 'tokenName', e)
                                    },
                                    expression: 'form.tokenName'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.symbol'),
                                prop: 'symbol'
                            }
                        }, [
                            a('el-input', {
                                attrs: {
                                    placeholder: 'e.g. GLT'
                                },
                                model: {
                                    value: f.form.symbol,
                                    callback: function (e) {
                                        f.$set(f.form, 'symbol', e)
                                    },
                                    expression: 'form.symbol'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.initialSupply'),
                                prop: 'initialSupply'
                            }
                        }, [
                            a('el-input-number', {
                                staticClass: 'inputNum',
                                style: 'width:' + (f.isPc ? '50%' : '70%'),
                                attrs: {
                                    min: 1
                                },
                                nativeOn: {
                                    keyup: function (e) {
                                        f.initialSupplyTipsNumber = e.target.value
                                    }
                                },
                                model: {
                                    value: f.form.initialSupply,
                                    callback: function (e) {
                                        f.$set(f.form, 'initialSupply', e)
                                    },
                                    expression: 'form.initialSupply'
                                }
                            }),
                            f.initialSupplyTipsNumber >= 0 ? a('span', {
                                staticClass: 'initialSupplyTips'
                            }, [
                                f._v(' ≈ ' + f._s(f._f('numberFormatter') (f.initialSupplyTipsNumber, 2)))
                            ]) : f._e()
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.decimals'),
                                prop: 'decimals'
                            }
                        }, [
                            a('el-input-number', {
                                staticClass: 'inputNum',
                                style: 'width:' + (f.isPc ? '50%' : '70%'),
                                attrs: {
                                    min: 1,
                                    max: 18
                                },
                                model: {
                                    value: f.form.decimals,
                                    callback: function (e) {
                                        f.$set(f.form, 'decimals', e)
                                    },
                                    expression: 'form.decimals'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: '',
                                prop: 'isAF'
                            }
                        }, [
                            a('el-switch', {
                                staticStyle: {
                                    display: 'block'
                                },
                                attrs: {
                                    'active-text': f.$t('createToken.advancedSettings')
                                },
                                model: {
                                    value: f.form.isAF,
                                    callback: function (e) {
                                        f.$set(f.form, 'isAF', e)
                                    },
                                    expression: 'form.isAF'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.isAF,
                                    expression: 'form.isAF'
                                }
                            ],
                            attrs: {
                                label: 'Create/Owner',
                                prop: 'newInput'
                            }
                        }, [
                            a('el-input', {
                                attrs: {
                                    disabled: !f.isPc,
                                    placeholder: '0x111111111...',
                                    oninput: 'value=value.replace(/(^\\s*)|(\\s*$)/g, \'\')'
                                },
                                model: {
                                    value: f.form.newInput,
                                    callback: function (e) {
                                        f.$set(f.form, 'newInput', e)
                                    },
                                    expression: 'form.newInput'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.config'),
                                prop: 'config'
                            }
                        }, [
                            a('el-checkbox-group', {
                                model: {
                                    value: f.form.config,
                                    callback: function (e) {
                                        f.$set(f.form, 'config', e)
                                    },
                                    expression: 'form.config'
                                }
                            }, [
                                f._l(f.options, (function (e) {
                                    return a('el-checkbox', {
                                        key: e.value,
                                        attrs: {
                                            label: e.value
                                        }
                                    }, [
                                        a('el-tooltip', {
                                            attrs: {
                                                effect: 'dark',
                                                content: e.tips,
                                                placement: 'top'
                                            }
                                        }, [
                                            a('span', {
                                                staticClass: 'checkboxText'
                                            }, [
                                                f._v(f._s(e.label))
                                            ])
                                        ])
                                    ], 1)
                                })),
                                a('el-checkbox', {
                                    attrs: {
                                        label: 6
                                    },
                                    on: {
                                        change: f.onCheckboxChange
                                    },
                                    model: {
                                        value: f.form.DenverDeflaionaryDecay,
                                        callback: function (e) {
                                            f.$set(f.form, 'DenverDeflaionaryDecay', e)
                                        },
                                        expression: 'form.DenverDeflaionaryDecay'
                                    }
                                }, [
                                    a('el-tooltip', {
                                        attrs: {
                                            effect: 'dark',
                                            content: f.$t('createToken.Deflationary_tips'),
                                            placement: 'top'
                                        }
                                    }, [
                                        a('span', {
                                            staticClass: 'checkboxText'
                                        }, [
                                            f._v(f._s(f.$t('createToken.Deflationary')))
                                        ])
                                    ])
                                ], 1)
                            ], 2)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay && !form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.transactionFee'),
                                prop: 'transactionFee'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.transactionFee_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        type: 'number',
                                        min: 1,
                                        max: 99,
                                        oninput: 'value=value.substr(0,2);'
                                    },
                                    model: {
                                        value: f.form.transactionFee,
                                        callback: function (e) {
                                            f.$set(f.form, 'transactionFee', e)
                                        },
                                        expression: 'form.transactionFee'
                                    }
                                }, [
                                    a('template', {
                                        slot: 'append'
                                    }, [
                                        f._v('%')
                                    ])
                                ], 2)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay && !form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.burnFee'),
                                prop: 'burnFee'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.burnFee_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        type: 'number',
                                        min: 1,
                                        max: 99,
                                        oninput: 'value=value.substr(0,2);'
                                    },
                                    model: {
                                        value: f.form.burnFee,
                                        callback: function (e) {
                                            f.$set(f.form, 'burnFee', e)
                                        },
                                        expression: 'form.burnFee'
                                    }
                                }, [
                                    a('template', {
                                        slot: 'append'
                                    }, [
                                        f._v('%')
                                    ])
                                ], 2)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay&& !form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.transactionFeeAddress'),
                                prop: 'transactionFeeAddress'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.transactionFeeAddress_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        placeholder: 'e.g. 0x1111111111111111111111',
                                        oninput: 'value=value.replace(/(^\\s*)|(\\s*$)/g, \'\')'
                                    },
                                    model: {
                                        value: f.form.transactionFeeAddress,
                                        callback: function (e) {
                                            f.$set(f.form, 'transactionFeeAddress', e)
                                        },
                                        expression: 'form.transactionFeeAddress'
                                    }
                                })
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay,
                                    expression: 'DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.charityFee'),
                                prop: 'charityFee'
                            }
                        }, [
                            a('el-switch', {
                                attrs: {
                                    'active-color': '#1890ff',
                                    'inactive-color': '#606266'
                                },
                                model: {
                                    value: f.form.DenverDeflaionaryDecayV2,
                                    callback: function (e) {
                                        f.$set(f.form, 'DenverDeflaionaryDecayV2', e)
                                    },
                                    expression: 'form.DenverDeflaionaryDecayV2'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV2 && f.DenverDeflaionaryDecay,
                                    expression: 'form.DenverDeflaionaryDecayV2 && DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.charityFee'),
                                prop: 'charityFee'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.charityFee_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        type: 'number',
                                        min: 1,
                                        max: 99,
                                        oninput: 'value=value.substr(0,2);'
                                    },
                                    model: {
                                        value: f.form.charityFee,
                                        callback: function (e) {
                                            f.$set(f.form, 'charityFee', e)
                                        },
                                        expression: 'form.charityFee'
                                    }
                                }, [
                                    a('template', {
                                        slot: 'append'
                                    }, [
                                        f._v('%')
                                    ])
                                ], 2)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay,
                                    expression: 'DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.AutomaticLP'),
                                prop: 'AutomaticLP'
                            }
                        }, [
                            a('el-switch', {
                                attrs: {
                                    'active-color': '#1890ff',
                                    'inactive-color': '#606266'
                                },
                                model: {
                                    value: f.form.DenverDeflaionaryDecayV3,
                                    callback: function (e) {
                                        f.$set(f.form, 'DenverDeflaionaryDecayV3', e)
                                    },
                                    expression: 'form.DenverDeflaionaryDecayV3'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.AutomaticLP'),
                                prop: 'AutomaticLP'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.AutomaticLP_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        type: 'number',
                                        min: 1,
                                        max: 99,
                                        oninput: 'value=value.substr(0,2);'
                                    },
                                    model: {
                                        value: f.form.lpFee,
                                        callback: function (e) {
                                            f.$set(f.form, 'lpFee', e)
                                        },
                                        expression: 'form.lpFee'
                                    }
                                }, [
                                    a('template', {
                                        slot: 'append'
                                    }, [
                                        f._v('%')
                                    ])
                                ], 2)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay && !1,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay && false'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.maxamount'),
                                prop: 'maxamount'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.maxamount_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input-number', {
                                    staticClass: 'inputNum',
                                    attrs: {
                                        min: 1
                                    },
                                    model: {
                                        value: f.form.maxamount,
                                        callback: function (e) {
                                            f.$set(f.form, 'maxamount', e)
                                        },
                                        expression: 'form.maxamount'
                                    }
                                })
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay && !1,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay && false'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.sellswapamount'),
                                prop: 'sellswapamount'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.sellswapamount_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input-number', {
                                    staticClass: 'inputNum',
                                    attrs: {
                                        min: 1
                                    },
                                    model: {
                                        value: f.form.sellswapamount,
                                        callback: function (e) {
                                            f.$set(f.form, 'sellswapamount', e)
                                        },
                                        expression: 'form.sellswapamount'
                                    }
                                })
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.lpswap'),
                                prop: 'lpswap'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.lpswap_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-select', {
                                    model: {
                                        value: f.form.routerAddress,
                                        callback: function (e) {
                                            f.$set(f.form, 'routerAddress', e)
                                        },
                                        expression: 'form.routerAddress'
                                    }
                                }, f._l(f.swapoptions, (function (f) {
                                    return a('el-option', {
                                        key: f.value,
                                        attrs: {
                                            label: f.label,
                                            value: f.value
                                        }
                                    })
                                })), 1)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay'
                                }
                            ]
                        }, [
                            a('el-alert', {
                                staticStyle: {
                                    'line-height': '20px'
                                },
                                attrs: {
                                    type: 'error',
                                    closable: !1
                                }
                            }, [
                                f._v(' Do not renounce token owner authority before the token is not working properly, otherwise it will cause irreparable consequences ')
                            ])
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.DenverDeflaionaryDecayV3 && f.DenverDeflaionaryDecay,
                                    expression: 'form.DenverDeflaionaryDecayV3 && DenverDeflaionaryDecay'
                                }
                            ],
                            attrs: {
                                label: 'Transaction tax',
                                prop: 'lpswap'
                            }
                        }, [
                            a('el-switch', {
                                attrs: {
                                    'active-color': '#1890ff',
                                    'inactive-color': '#606266'
                                },
                                model: {
                                    value: f.form.Transaction_tax,
                                    callback: function (e) {
                                        f.$set(f.form, 'Transaction_tax', e)
                                    },
                                    expression: 'form.Transaction_tax'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.Transaction_tax && f.form.DenverDeflaionaryDecayV3,
                                    expression: 'form.Transaction_tax && form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: 'Transaction tax',
                                prop: 'charityFee'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.transactionFee_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        type: 'number',
                                        min: 1,
                                        max: 99,
                                        oninput: 'value=value.substr(0,2);'
                                    },
                                    model: {
                                        value: f.form.Transaction_tax_value,
                                        callback: function (e) {
                                            f.$set(f.form, 'Transaction_tax_value', e)
                                        },
                                        expression: 'form.Transaction_tax_value'
                                    }
                                }, [
                                    a('template', {
                                        slot: 'append'
                                    }, [
                                        f._v('%')
                                    ])
                                ], 2)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.form.Transaction_tax && f.form.DenverDeflaionaryDecayV3,
                                    expression: 'form.Transaction_tax && form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.transactionFeeAddress'),
                                prop: 'transactionFeeAddress'
                            }
                        }, [
                            a('el-tooltip', {
                                attrs: {
                                    effect: 'dark',
                                    placement: 'top'
                                }
                            }, [
                                a('div', {
                                    attrs: {
                                        slot: 'content'
                                    },
                                    domProps: {
                                        innerHTML: f._s(f.$t('createToken.transactionFeeAddress_tips'))
                                    },
                                    slot: 'content'
                                }),
                                a('el-input', {
                                    attrs: {
                                        placeholder: 'e.g. 0x1111111111111111111111',
                                        oninput: 'value=value.replace(/(^\\s*)|(\\s*$)/g, \'\')'
                                    },
                                    model: {
                                        value: f.form.Transaction_tax_address,
                                        callback: function (e) {
                                            f.$set(f.form, 'Transaction_tax_address', e)
                                        },
                                        expression: 'form.Transaction_tax_address'
                                    }
                                })
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay && !form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: 'Info'
                            }
                        }, [
                            a('el-alert', {
                                staticStyle: {
                                    'line-height': '20px'
                                },
                                attrs: {
                                    type: 'success',
                                    closable: !1
                                }
                            }, [
                                f._v(' set it up as ' + f._s(f.form.transactionFee) + '% transaction fee and ' + f._s(f.form.burnFee) + '% burn,'),
                                f.form.DenverDeflaionaryDecayV2 ? [
                                    f._v(' ' + f._s(f.form.charityFee) + '% distribute that to token holders，')
                                ] : f._e(),
                                f._v('send 100 token Then the user gets '),
                                f.form.DenverDeflaionaryDecayV2 ? [
                                    f._v(f._s(100 - (Number(f.form.transactionFee) + Number(f.form.burnFee) + Number(f.form.charityFee))))
                                ] : [
                                    f._v(f._s(100 - (Number(f.form.transactionFee) + Number(f.form.burnFee))))
                                ],
                                f._v(' tokens, ' + f._s(f.form.transactionFee) + ' token sent to the receive address, ' + f._s(f.form.burnFee) + ' token burn'),
                                f.form.DenverDeflaionaryDecayV2 ? [
                                    f._v(' , ' + f._s(f.form.charityFee) + ' token distribute that to token holders')
                                ] : f._e()
                            ], 2)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay && !form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: 'Demo'
                            }
                        }, [
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://kovan.etherscan.io/tx/0x33c43b3c36b560858019781d7cf25ef0f721b65bd20c96429598e00c9cbe2f25'
                                    }
                                }, [
                                    f._v('Demo : 4% transaction fee,1% will be burnt')
                                ])
                            ])
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && f.form.DenverDeflaionaryDecayV3 && !f.form.Transaction_tax,
                                    expression: 'DenverDeflaionaryDecay && form.DenverDeflaionaryDecayV3 && !form.Transaction_tax'
                                }
                            ],
                            attrs: {
                                label: 'Info'
                            }
                        }, [
                            a('el-alert', {
                                staticStyle: {
                                    'line-height': '20px'
                                },
                                attrs: {
                                    type: 'success',
                                    closable: !1
                                }
                            }, [
                                f._v(' set ' + f._s(f.form.lpFee) + '% of each transaction is automatically added to the liquidity pool, ' + f._s(f.form.charityFee) + '% of each transaction will be automatically given to the token holder ')
                            ])
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && f.form.DenverDeflaionaryDecayV3 && f.form.Transaction_tax,
                                    expression: 'DenverDeflaionaryDecay && form.DenverDeflaionaryDecayV3 && form.Transaction_tax'
                                }
                            ],
                            attrs: {
                                label: 'Info'
                            }
                        }, [
                            a('el-alert', {
                                staticStyle: {
                                    'line-height': '20px'
                                },
                                attrs: {
                                    type: 'success',
                                    closable: !1
                                }
                            }, [
                                f._v(' set ' + f._s(f.form.lpFee) + '% of each transaction is automatically added to the liquidity pool, ' + f._s(f.form.charityFee) + '% of each transaction will be automatically given to the token holder,' + f._s(f.form.Transaction_tax_value) + '% token sent to the receive address. ')
                            ])
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: f.DenverDeflaionaryDecay && f.form.DenverDeflaionaryDecayV3,
                                    expression: 'DenverDeflaionaryDecay && form.DenverDeflaionaryDecayV3'
                                }
                            ],
                            attrs: {
                                label: 'Demo'
                            }
                        }, [
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://kovan.etherscan.io/tx/0xeb84242ed482a34328af06cfe67f1fb57e181a981e69ab54cc3e695e589b2c8e'
                                    }
                                }, [
                                    f._v('Demo : 5% distributed to holders,5% auto Lp OR SAFEMOON token')
                                ])
                            ])
                        ], 1),
                        a('el-form-item', [
                            a('el-alert', {
                                staticStyle: {
                                    'line-height': '22px'
                                },
                                attrs: {
                                    title: f.$t('createToken.alert'),
                                    type: 'warning',
                                    effect: 'dark'
                                }
                            })
                        ], 1),
                        f.isPc && f.walletType > 1 ? a('el-form-item', [
                            a('el-alert', {
                                attrs: {
                                    title: f.$t('createToken.tipsAgainPhone'),
                                    type: 'error',
                                    effect: 'dark'
                                }
                            })
                        ], 1) : f._e(),
                        a('el-form-item', {
                            staticClass: 'btnBox'
                        }, [
                            a('el-button', {
                                staticClass: 'item-btn',
                                attrs: {
                                    loading: f.loading,
                                    size: 'medium',
                                    type: 'primary'
                                },
                                on: {
                                    click: f.onCreate
                                }
                            }, [
                                f._v(' ' + f._s(f.$t('createToken.createBtn')) + ' ')
                            ])
                        ], 1)
                    ], 1)
                },
                l = [
                ],
                m = (a('fdea'), 'createToken'),
                y = {
                    inject: [
                        'onCheckConnect'
                    ],
                    components: {
                    },
                    props: {
                        form: {
                            type: Object
                        },
                        loading: {
                            type: Boolean
                        }
                    },
                    data: function () {
                        return {
                            initialSupplyTipsNumber: 0,
                            t1: null,
                            DenverDeflaionaryDecay: !1,
                            DenverDeflaionaryDecayV2: !1,
                            Transaction_tax: !1,
                            options: [
                            ],
                            rules: {
                            },
                            swapoptions: [
                                {
                                    value: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
                                    label: '(BSC)PancakeswapV2'
                                },
                                {
                                    value: '0xed7d5f38c79115ca12fe6c0041abb22f0a06c300',
                                    label: '(HECO)Mdex'
                                },
                                {
                                    value: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
                                    label: '(ETH)UNISWAP'
                                },
                                {
                                    value: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
                                    label: '(ETH KOVAN)UNISWAP'
                                },
                                {
                                    value: '0xF491e7B69E4244ad4002BC14e878a34207E38c29',
                                    label: '(FTM)Spookyswap'
                                },
                                {
                                    value: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
                                    label: '(Polygon Matic)Quickswap'
                                }
                            ],
                            txDemoList: [
                                {
                                    address1: '0x11111111111',
                                    address2: '0x11111111112',
                                    number: 11,
                                    tokenName: 'BTC',
                                    fullName: 'CoinBase'
                                },
                                {
                                    address1: '0x11111111111',
                                    address2: '0x11111111112',
                                    number: 11,
                                    tokenName: 'BTC',
                                    fullName: 'CoinBase'
                                }
                            ]
                        }
                    },
                    computed: Object(s['a']) ({
                    }, Object(i['b']) (['isConnect',
                        'account',
                        'isPc',
                        'walletType'])),
                    watch: {
                        'form.DenverDeflaionaryDecayV2': function (f) {
                            !1 === f && (this.form.DenverDeflaionaryDecayV3 = f)
                        },
                        'form.DenverDeflaionaryDecayV3': function (f) {
                            this.form.DenverDeflaionaryDecayV2 = f
                        },
                        'form.initialSupply': {
                            immediate: !0,
                            handler: function (f) {
                                this.form.maxamount = parseInt(0.005 * f),
                                    this.form.sellswapamount = parseInt(0.0005 * f),
                                    this.initialSupplyTipsNumber = f
                            }
                        }
                    },
                    created: function () {
                        this.$i18n.getLocaleMessage('en') [m] || (this.$i18n.mergeLocaleMessage('en', r.en), this.$i18n.mergeLocaleMessage('zh', r.zh)),
                            this.rules = {
                                tokenName: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.tokenNameValidate'),
                                        trigger: 'blur'
                                    }
                                ],
                                symbol: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.symbolValidate'),
                                        trigger: 'blur'
                                    }
                                ],
                                initialSupply: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.initialSupplyValidate'),
                                        trigger: 'blur'
                                    }
                                ],
                                decimals: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.decimalsValidate'),
                                        trigger: 'blur'
                                    }
                                ]
                            },
                            this.options = [
                                {
                                    value: 0,
                                    label: this.$t('createToken.config_0'),
                                    tips: this.$t('createToken.config0_tips')
                                },
                                {
                                    value: 1,
                                    label: this.$t('createToken.config_1'),
                                    tips: this.$t('createToken.config1_tips')
                                },
                                {
                                    value: 2,
                                    label: this.$t('createToken.config_2'),
                                    tips: this.$t('createToken.config2_tips')
                                },
                                {
                                    value: 5,
                                    label: this.$t('createToken.config_5'),
                                    tips: this.$t('createToken.config5_tips')
                                }
                            ]
                    },
                    mounted: function () {
                    },
                    methods: {
                        onChangeInitialSupplyTips: function (f) {
                            this.initialSupplyTipsNumber = f.target.value
                        },
                        onCheckboxChange: function (f) {
                            this.DenverDeflaionaryDecay = f,
                                this.form.DenverDeflaionaryDecay = f
                        },
                        onCheckboxV2Change: function (f) {
                            this.DenverDeflaionaryDecayV2 = f,
                                this.form.DenverDeflaionaryDecayV2 = f
                        },
                        onCreate: function () {
                            var f = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                f.$refs['form'].validate();
                                        case 2:
                                            if (f.onCheckConnect()) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            f.$emit('onCreate');
                                        case 5:
                                        case 'end':
                                            return e.stop()
                                    }
                                }), e)
                            }))) ()
                        },
                        hideDenverDeflaionaryDecay: function () {
                            this.form.config = this.form.config.filter((function (f) {
                                return 6 !== f
                            })),
                                this.DenverDeflaionaryDecay = !1,
                                this.DenverDeflaionaryDecayV2 = !1,
                                this.form.DenverDeflaionaryDecay = !1,
                                this.form.DenverDeflaionaryDecayV2 = !1,
                                this.form.DenverDeflaionaryDecayV3 = !1
                        }
                    }
                },
                v = y,
                T = (a('4da2'), a('5d22')),
                h = Object(T['a']) (v, u, l, !1, null, 'a0a4910a', null),
                k = h.exports,
                w = function () {
                    var f = this,
                        e = f.$createElement,
                        a = f._self._c || e;
                    return a('el-form', {
                        ref: 'form',
                        staticClass: 'form',
                        attrs: {
                            'label-position': f.isPc ? 'right' : 'top',
                            rules: f.rules,
                            model: f.form,
                            'label-suffix': ':',
                            'label-width': '160px'
                        }
                    }, [
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.tokenaddress'),
                                prop: 'tokenaddress'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.tokenaddress_tip'),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        placeholder: 'e.g. 0x111111111111111'
                                    },
                                    model: {
                                        value: f.form.tokenaddress,
                                        callback: function (e) {
                                            f.$set(f.form, 'tokenaddress', e)
                                        },
                                        expression: 'form.tokenaddress'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.tokenaddress_tip')))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.decimals'),
                                prop: 'decimals'
                            }
                        }, [
                            a('el-input', {
                                attrs: {
                                    oninput: 'value=value.replace(/[^\\d]/g,\'\')'
                                },
                                model: {
                                    value: f.form.decimals,
                                    callback: function (e) {
                                        f.$set(f.form, 'decimals', e)
                                    },
                                    expression: 'form.decimals'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.rate'),
                                prop: 'rate'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.rate_tip', {
                                        a: f.symbol
                                    }),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        oninput: 'value=value.replace(/[^\\d]/g,\'\')'
                                    },
                                    model: {
                                        value: f.form.rate,
                                        callback: function (e) {
                                            f.$set(f.form, 'rate', e)
                                        },
                                        expression: 'form.rate'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.rate_tip', {
                                    a: f.symbol
                                })))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.cap', {
                                    a: f.symbol
                                }),
                                prop: 'cap'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.cap_tip', {
                                        a: f.symbol
                                    }),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        oninput: 'value=value.replace(/[^\\d]/g,\'\')'
                                    },
                                    model: {
                                        value: f.form.cap,
                                        callback: function (e) {
                                            f.$set(f.form, 'cap', e)
                                        },
                                        expression: 'form.cap'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.cap_tip', {
                                    a: f.symbol
                                })))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.uplimit'),
                                prop: 'uplimit'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.uplimit_tip', {
                                        a: f.symbol
                                    }),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    model: {
                                        value: f.form.uplimit,
                                        callback: function (e) {
                                            f.$set(f.form, 'uplimit', e)
                                        },
                                        expression: 'form.uplimit'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.uplimit_tip', {
                                    a: f.symbol
                                })))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.startTime'),
                                prop: 'startTime'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.startTime_tip'),
                                    placement: 'top'
                                }
                            }, [
                                a('el-date-picker', {
                                    staticStyle: {
                                        width: '100%'
                                    },
                                    attrs: {
                                        type: 'datetime'
                                    },
                                    model: {
                                        value: f.form.startTime,
                                        callback: function (e) {
                                            f.$set(f.form, 'startTime', e)
                                        },
                                        expression: 'form.startTime'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.startTime_tip')))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.endDays'),
                                prop: 'endDays'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.endDays_tip'),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        oninput: 'value=value.replace(/[^\\d]/g,\'\')'
                                    },
                                    model: {
                                        value: f.form.endDays,
                                        callback: function (e) {
                                            f.$set(f.form, 'endDays', e)
                                        },
                                        expression: 'form.endDays'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.endDays_tip')))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.idoType'),
                                prop: 'idoType'
                            }
                        }, [
                            a('el-radio-group', {
                                model: {
                                    value: f.form.idoType,
                                    callback: function (e) {
                                        f.$set(f.form, 'idoType', e)
                                    },
                                    expression: 'form.idoType'
                                }
                            }, [
                                a('el-tooltip', {
                                    staticClass: 'item',
                                    attrs: {
                                        effect: 'dark',
                                        content: f.$t('createToken.idoType_tip1'),
                                        placement: 'top'
                                    }
                                }, [
                                    a('el-radio', {
                                        attrs: {
                                            label: 1
                                        }
                                    }, [
                                        f._v(f._s(f.$t('createToken.idoType1')))
                                    ])
                                ], 1),
                                a('el-tooltip', {
                                    staticClass: 'item',
                                    attrs: {
                                        effect: 'dark',
                                        content: f.$t('createToken.idoType_tip2', {
                                            a: f.symbol
                                        }),
                                        placement: 'top'
                                    }
                                }, [
                                    a('el-radio', {
                                        attrs: {
                                            label: 2
                                        }
                                    }, [
                                        f._v(f._s(f.$t('createToken.idoType2')))
                                    ])
                                ], 1)
                            ], 1)
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: 1 == f.form.idoType,
                                    expression: 'form.idoType==1'
                                }
                            ]
                        }, [
                            a('el-alert', {
                                attrs: {
                                    title: f.$t('createToken.Idoalert2'),
                                    type: 'warning',
                                    effect: 'dark'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            directives: [
                                {
                                    name: 'show',
                                    rawName: 'v-show',
                                    value: 1 == f.form.idoType,
                                    expression: 'form.idoType==1'
                                }
                            ],
                            attrs: {
                                label: f.$t('createToken.lockDays'),
                                prop: 'lockDays'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.lockDays_tip'),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        oninput: 'value=value.replace(/[^\\d]/g,\'\')'
                                    },
                                    model: {
                                        value: f.form.lockDays,
                                        callback: function (e) {
                                            f.$set(f.form, 'lockDays', e)
                                        },
                                        expression: 'form.lockDays'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.lockDays_tip')))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: f.$t('createToken.adminAddress'),
                                prop: 'adminAddress'
                            }
                        }, [
                            a('el-tooltip', {
                                staticClass: 'item',
                                attrs: {
                                    effect: 'dark',
                                    content: f.$t('createToken.adminAddress_tip'),
                                    placement: 'top'
                                }
                            }, [
                                a('el-input', {
                                    attrs: {
                                        placeholder: 'e.g. 0x111111111111111'
                                    },
                                    model: {
                                        value: f.form.adminAddress,
                                        callback: function (e) {
                                            f.$set(f.form, 'adminAddress', e)
                                        },
                                        expression: 'form.adminAddress'
                                    }
                                })
                            ], 1),
                            a('el-tag', {
                                directives: [
                                    {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value: !f.isPc,
                                        expression: '!isPc'
                                    }
                                ],
                                attrs: {
                                    type: 'info'
                                }
                            }, [
                                f._v(f._s(f.$t('createToken.adminAddress_tip')))
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: 'Claim Demo'
                            }
                        }, [
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://cointool.app/ido/exchange?menu=1&contact=1&address=0x80015c80182d8294fc6cccd263e0a73674ef051e&c=42'
                                    }
                                }, [
                                    f._v('Kovan Test1')
                                ])
                            ]),
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://cointool.app/ido/exchange?menu=1&contact=1&address=0x806675afcd10faceac5505f50f3d9bd8057440b1&c=42'
                                    }
                                }, [
                                    f._v('Kovan Test2')
                                ])
                            ]),
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://cointool.app/ido/exchange?menu=1&contact=1&address=0xaafed7d13be1ba4bc8dcc28e98062c240a20f1a9&c=97'
                                    }
                                }, [
                                    f._v('BSC TESTNET Test1')
                                ])
                            ])
                        ], 1),
                        a('el-form-item', {
                            attrs: {
                                label: 'Auto Get Demo'
                            }
                        }, [
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://kovan.etherscan.io/tx/0x97674124dab05a9f17fc6c5292fd61f0483cd3f4f92c3dc4f275002c528495a1'
                                    }
                                }, [
                                    f._v('Demo | Kovan network: Send Eth to ' + f._s(f._f('miniAddress') ('0xccc3f8507a7a754b49b0e7ae6da17febd7955e40')) + ' Get Token')
                                ])
                            ]),
                            a('el-tag', {
                                staticStyle: {
                                    'margin-right': '20px'
                                }
                            }, [
                                a('a', {
                                    attrs: {
                                        target: '_blank',
                                        href: 'https://testnet.bscscan.com/tx/0x91c51d8c329f3512d3b89d488f581a292d0286e6e07d5fcf9b00d2d80b3ab73d'
                                    }
                                }, [
                                    f._v('Demo | Bsc Test network: Send Bnb to ' + f._s(f._f('miniAddress') ('0xe8c3c11879a3ad9024897a2772b496e82dd8ad5d')) + ' Get Token')
                                ])
                            ])
                        ], 1),
                        a('el-form-item', [
                            a('el-alert', {
                                attrs: {
                                    title: f.$t('createToken.Idoalert'),
                                    type: 'warning',
                                    effect: 'dark'
                                }
                            })
                        ], 1),
                        a('el-form-item', {
                            staticClass: 'btnBox'
                        }, [
                            a('el-button', {
                                staticClass: 'item-btn',
                                attrs: {
                                    loading: f.loading,
                                    size: 'medium',
                                    type: 'primary'
                                },
                                on: {
                                    click: f.onCreate
                                }
                            }, [
                                f._v(' ' + f._s(f.$t('createToken.createTab2')) + ' ')
                            ])
                        ], 1)
                    ], 1)
                },
                _ = [
                ],
                D = 'createToken',
                g = {
                    inject: [
                        'onCheckConnect'
                    ],
                    components: {
                    },
                    props: {
                        form: {
                            type: Object
                        },
                        loading: {
                            type: Boolean
                        }
                    },
                    data: function () {
                        return {
                            t1: null,
                            symbol: '',
                            options: [
                            ],
                            rules: {
                            }
                        }
                    },
                    computed: Object(s['a']) ({
                    }, Object(i['b']) (['isConnect',
                        'account',
                        'isPc'])),
                    watch: {
                    },
                    created: function () {
                        var f = 'ETH';
                        switch (this.$route.name) {
                            case 'HecocreateToken':
                                f = 'HT';
                                break;
                            case 'BsccreateToken':
                                f = 'BNB';
                                break;
                            case 'FtmcreateToken':
                                f = 'FTM';
                                break
                        }
                        this.symbol = f,
                        this.$i18n.getLocaleMessage('en') [D] || (this.$i18n.mergeLocaleMessage('en', r.en), this.$i18n.mergeLocaleMessage('zh', r.zh)),
                            this.rules = {
                                tokenaddress: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                decimals: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                rate: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                cap: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                uplimit: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                startTime: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                endDays: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                adminAddress: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ],
                                lockDays: [
                                    {
                                        required: !0,
                                        message: this.$t('createToken.no_null'),
                                        trigger: 'blur'
                                    }
                                ]
                            }
                    },
                    mounted: function () {
                    },
                    methods: {
                        onCreate: function () {
                            var f = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                f.$refs['form'].validate();
                                        case 2:
                                            if (f.onCheckConnect()) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            f.$emit('onCreate');
                                        case 5:
                                        case 'end':
                                            return e.stop()
                                    }
                                }), e)
                            }))) ()
                        }
                    }
                },
                x = g,
                M = Object(T['a']) (x, w, _, !1, null, '6a76de61', null),
                A = M.exports,
                F = a('5012'),
                C = a.n(F),
                $ = a('ed08'),
                S = a('85d4'),
                I = a('e046'),
                N = a.n(I),
                O = a('4360'),
                L = a('7742'),
                E = a.n(L),
                V = [
                    {
                        constant: !1,
                        inputs: [
                            {
                                name: '_name',
                                type: 'string'
                            },
                            {
                                name: '_symbol',
                                type: 'string'
                            },
                            {
                                name: '_decimals',
                                type: 'uint256'
                            },
                            {
                                name: '_supply',
                                type: 'uint256'
                            }
                        ],
                        name: 'generateToken',
                        outputs: [
                            {
                                name: '',
                                type: 'address'
                            }
                        ],
                        payable: !0,
                        stateMutability: 'payable',
                        type: 'function'
                    }
                ],
                P = [
                    {
                        constant: !1,
                        inputs: [
                            {
                                name: '_name',
                                type: 'string'
                            },
                            {
                                name: '_symbol',
                                type: 'string'
                            },
                            {
                                name: '_decimals',
                                type: 'uint256'
                            },
                            {
                                name: '_txFee',
                                type: 'uint256'
                            },
                            {
                                name: '_burnFee',
                                type: 'uint256'
                            },
                            {
                                name: '_FeeAddress',
                                type: 'address'
                            },
                            {
                                name: '_supply',
                                type: 'uint256'
                            }
                        ],
                        name: 'generateToken',
                        outputs: [
                            {
                                name: '',
                                type: 'address'
                            }
                        ],
                        payable: !0,
                        stateMutability: 'payable',
                        type: 'function'
                    }
                ],
                B = [
                    {
                        inputs: [
                            {
                                internalType: 'string',
                                name: '_name',
                                type: 'string'
                            },
                            {
                                internalType: 'string',
                                name: '_symbol',
                                type: 'string'
                            },
                            {
                                internalType: 'uint256',
                                name: '_decimals',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_txFee',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_burnFee',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_charityFee',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: '_FeeAddress',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: '_supply',
                                type: 'uint256'
                            }
                        ],
                        name: 'generateToken',
                        outputs: [
                            {
                                internalType: 'address',
                                name: '',
                                type: 'address'
                            }
                        ],
                        stateMutability: 'payable',
                        type: 'function'
                    }
                ],
                R = [
                    {
                        inputs: [
                            {
                                internalType: 'string',
                                name: '_name',
                                type: 'string'
                            },
                            {
                                internalType: 'string',
                                name: '_symbol',
                                type: 'string'
                            },
                            {
                                internalType: 'uint256',
                                name: '_decimals',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_txFee',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_lpFee',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: '_MAXAMOUNT',
                                type: 'uint256'
                            },
                            {
                                internalType: 'uint256',
                                name: 'SELLMAXAMOUNT',
                                type: 'uint256'
                            },
                            {
                                internalType: 'address',
                                name: 'routerAddress',
                                type: 'address'
                            },
                            {
                                internalType: 'uint256',
                                name: '_supply',
                                type: 'uint256'
                            }
                        ],
                        name: 'generateToken',
                        outputs: [
                            {
                                internalType: 'address',
                                name: '',
                                type: 'address'
                            }
                        ],
                        stateMutability: 'payable',
                        type: 'function'
                    }
                ],
                q = [
                    {
                        constant: !1,
                        inputs: [
                            {
                                name: '_tokenAddr',
                                type: 'address'
                            },
                            {
                                name: '_RATE',
                                type: 'uint256'
                            },
                            {
                                name: '_CAP',
                                type: 'uint256'
                            },
                            {
                                name: '_UPLIMIT',
                                type: 'uint256'
                            },
                            {
                                name: '_START',
                                type: 'uint256'
                            },
                            {
                                name: '_LOCKTIME',
                                type: 'uint256'
                            },
                            {
                                name: '_DAYS',
                                type: 'uint256'
                            },
                            {
                                name: '_IDOTYPE',
                                type: 'bool'
                            },
                            {
                                name: 'Decimals',
                                type: 'uint256'
                            },
                            {
                                name: '_beneficiary',
                                type: 'address'
                            }
                        ],
                        name: 'generate',
                        outputs: [
                            {
                                name: '',
                                type: 'address'
                            }
                        ],
                        payable: !0,
                        stateMutability: 'payable',
                        type: 'function'
                    }
                ],
                H = {
                    abi: [
                        {
                            inputs: [
                                {
                                    internalType: 'string',
                                    name: '_NAME',
                                    type: 'string'
                                },
                                {
                                    internalType: 'string',
                                    name: '_SYMBOL',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_DECIMALS',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_supply',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_lpFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_DexFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'address',
                                    name: 'routerAddress',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'feeaddress',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'tokenOwner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Approval',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'minTokensBeforeSwap',
                                    type: 'uint256'
                                }
                            ],
                            name: 'MinTokensBeforeSwapUpdated',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'previousOwner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'OwnershipTransferred',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'tokensSwapped',
                                    type: 'uint256'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'ethReceived',
                                    type: 'uint256'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'tokensIntoLiqudity',
                                    type: 'uint256'
                                }
                            ],
                            name: 'SwapAndLiquify',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'bool',
                                    name: 'enabled',
                                    type: 'bool'
                                }
                            ],
                            name: 'SwapAndLiquifyEnabledUpdated',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Transfer',
                            type: 'event'
                        },
                        {
                            inputs: [
                            ],
                            name: '_devFee',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_devWalletAddress',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_liquidityFee',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_lockTime',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_maxTxAmount',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_taxFee',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                }
                            ],
                            name: 'allowance',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'approve',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'decimals',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'subtractedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'decreaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'deliver',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'excludeFromFee',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'excludeFromReward',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'includeInFee',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'includeInReward',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'addedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'increaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'isExcludedFromFee',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'isExcludedFromReward',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'time',
                                    type: 'uint256'
                                }
                            ],
                            name: 'lock',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'name',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'numTokensSellToAddToLiquidity',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'bool',
                                    name: 'deductTransferFee',
                                    type: 'bool'
                                }
                            ],
                            name: 'reflectionFromToken',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'renounceOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'devFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setDevFeePercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: '_addr',
                                    type: 'address'
                                }
                            ],
                            name: 'setDevWalletAddress',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'liquidityFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setLiquidityFeePercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'maxTxPercent',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setMaxTxPercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'amountToUpdate',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setNumTokensSellToAddToLiquidity',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'newRouter',
                                    type: 'address'
                                }
                            ],
                            name: 'setRouterAddress',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'bool',
                                    name: '_enabled',
                                    type: 'bool'
                                }
                            ],
                            name: 'setSwapAndLiquifyEnabled',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'taxFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setTaxFeePercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'swapAndLiquifyEnabled',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'symbol',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'rAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'tokenFromReflection',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalFees',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transfer',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'sender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transferFrom',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'uniswapV2Pair',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'uniswapV2Router',
                            outputs: [
                                {
                                    internalType: 'contract IUniswapV2Router02',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'unlock',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            stateMutability: 'payable',
                            type: 'receive'
                        }
                    ],
                    bin: '0x608060408190526017805460ff60a81b1916600160a81b1790556200347a388190039081908339810160408190526200003891620005ca565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a38a516200008c90600d9060208e019062000430565b508951620000a290600e9060208d019062000430565b50600f899055620000b589600a62000715565b620000c19089620007d3565b600a819055620000d4906000196200084c565b620000e290600019620007f5565b600b55601087905560148690556011879055601285905560138590556015869055600f546200011390600a62000715565b6103e8600a546005620001279190620007d3565b620001339190620006b5565b6200013f9190620007d3565b601855600f546200015290600a62000715565b612710600a546005620001669190620007d3565b620001729190620006b5565b6200017e9190620007d3565b601955600980546001600160a01b0319166001600160a01b0385811691909117909155600b5483821660009081526003602090815260409182902092909255805163c45a015560e01b81529051879384169263c45a01559260048082019391829003018186803b158015620001f257600080fd5b505afa15801562000207573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200022d9190620005a6565b6001600160a01b031663c9c6539630836001600160a01b031663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b1580156200027657600080fd5b505afa1580156200028b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002b19190620005a6565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015620002fa57600080fd5b505af11580156200030f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003359190620005a6565b601780546001600160a01b039283166001600160a01b03199182161790915560168054848416908316179055848216600081815260066020526040808220805460ff19908116600190811790925530845282842080549091169091179055815490931690911781559051918416913480156108fc0292909190818181858888f19350505050158015620003cc573d6000803e3d6000fd5b50826001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600a546040516200041691815260200190565b60405180910390a3505050505050505050505050620008a5565b8280546200043e906200080f565b90600052602060002090601f016020900481019282620004625760008555620004ad565b82601f106200047d57805160ff1916838001178555620004ad565b82800160010185558215620004ad579182015b82811115620004ad57825182559160200191906001019062000490565b50620004bb929150620004bf565b5090565b5b80821115620004bb5760008155600101620004c0565b80516001600160a01b0381168114620004ee57600080fd5b919050565b600082601f83011262000504578081fd5b81516001600160401b03808211156200052157620005216200088f565b604051601f8301601f19908116603f011681019082821181831017156200054c576200054c6200088f565b8160405283815260209250868385880101111562000568578485fd5b8491505b838210156200058b57858201830151818301840152908201906200056c565b838211156200059c57848385830101525b9695505050505050565b600060208284031215620005b8578081fd5b620005c382620004d6565b9392505050565b60008060008060008060008060008060006101608c8e031215620005ec578687fd5b8b516001600160401b0381111562000602578788fd5b620006108e828f01620004f3565b60208e0151909c5090506001600160401b038111156200062e578788fd5b6200063c8e828f01620004f3565b9a505060408c0151985060608c0151975060808c0151965060a08c0151955060c08c015194506200067060e08d01620004d6565b9350620006816101008d01620004d6565b9250620006926101208d01620004d6565b9150620006a36101408d01620004d6565b90509295989b509295989b9093969950565b600082620006c757620006c762000879565b500490565b600181815b808511156200070d578160001904821115620006f157620006f162000863565b80851615620006ff57918102915b93841c9390800290620006d1565b509250929050565b6000620005c383836000826200072e57506001620007cd565b816200073d57506000620007cd565b8160018114620007565760028114620007615762000781565b6001915050620007cd565b60ff84111562000775576200077562000863565b50506001821b620007cd565b5060208310610133831016604e8410600b8410161715620007a6575081810a620007cd565b620007b28383620006cc565b8060001904821115620007c957620007c962000863565b0290505b92915050565b6000816000190483118215151615620007f057620007f062000863565b500290565b6000828210156200080a576200080a62000863565b500390565b600181811c908216806200082457607f821691505b602082108114156200084657634e487b7160e01b600052602260045260246000fd5b50919050565b6000826200085e576200085e62000879565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612bc580620008b56000396000f3fe6080604052600436106102765760003560e01c80636bc87c3a1161014f578063a9059cbb116100c1578063d543dbeb1161007a578063d543dbeb14610754578063dd46706414610774578063dd62ed3e14610794578063ea2f0b37146107da578063f0f165af146107fa578063f2fde38b1461081a57600080fd5b8063a9059cbb146106a8578063aa45026b146106c8578063b2bdfa7b146106de578063b425bac3146106fe578063c49b9a801461071e578063d12a76881461073e57600080fd5b806388f820201161011357806388f82020146105e75780638da5cb5b146106205780638ee88c531461063e57806395d89b411461065e578063a457c2d714610673578063a69df4b51461069357600080fd5b80636bc87c3a1461057057806370a0823114610586578063715018a6146105a657806379af25a6146105bb5780637d1db4a5146105d157600080fd5b8063379e2919116101e8578063437823ec116101ac578063437823ec146104965780634549b039146104b657806349bd5a5e146104d65780634a74bb02146104f657806352390c02146105175780635342acb41461053757600080fd5b8063379e29191461040057806339509351146104205780633b124fe7146104405780633bd5d1731461045657806341cb87fc1461047657600080fd5b80631694505e1161023a5780631694505e1461033e57806318160ddd1461037657806323b872dd1461038b5780632d838119146103ab578063313ce567146103cb5780633685d419146103e057600080fd5b8063061c82d01461028257806306fdde03146102a4578063095ea7b3146102cf578063120a0612146102ff57806313114a9d1461031f57600080fd5b3661027d57005b600080fd5b34801561028e57600080fd5b506102a261029d3660046127dd565b61083a565b005b3480156102b057600080fd5b506102b9610872565b6040516102c6919061284d565b60405180910390f35b3480156102db57600080fd5b506102ef6102ea366004612798565b610904565b60405190151581526020016102c6565b34801561030b57600080fd5b506102a261031a3660046126e8565b61091b565b34801561032b57600080fd5b50600c545b6040519081526020016102c6565b34801561034a57600080fd5b5060165461035e906001600160a01b031681565b6040516001600160a01b0390911681526020016102c6565b34801561038257600080fd5b50600a54610330565b34801561039757600080fd5b506102ef6103a6366004612758565b610967565b3480156103b757600080fd5b506103306103c63660046127dd565b6109d0565b3480156103d757600080fd5b50600f54610330565b3480156103ec57600080fd5b506102a26103fb3660046126e8565b610a54565b34801561040c57600080fd5b506102a261041b3660046127dd565b610c43565b34801561042c57600080fd5b506102ef61043b366004612798565b610c72565b34801561044c57600080fd5b5061033060105481565b34801561046257600080fd5b506102a26104713660046127dd565b610ca8565b34801561048257600080fd5b506102a26104913660046126e8565b610d94565b3480156104a257600080fd5b506102a26104b13660046126e8565b610f66565b3480156104c257600080fd5b506103306104d13660046127f5565b610fb4565b3480156104e257600080fd5b5060175461035e906001600160a01b031681565b34801561050257600080fd5b506017546102ef90600160a81b900460ff1681565b34801561052357600080fd5b506102a26105323660046126e8565b611043565b34801561054357600080fd5b506102ef6105523660046126e8565b6001600160a01b031660009081526006602052604090205460ff1690565b34801561057c57600080fd5b5061033060145481565b34801561059257600080fd5b506103306105a13660046126e8565b611196565b3480156105b257600080fd5b506102a26111f5565b3480156105c757600080fd5b5061033060025481565b3480156105dd57600080fd5b5061033060185481565b3480156105f357600080fd5b506102ef6106023660046126e8565b6001600160a01b031660009081526007602052604090205460ff1690565b34801561062c57600080fd5b506000546001600160a01b031661035e565b34801561064a57600080fd5b506102a26106593660046127dd565b611257565b34801561066a57600080fd5b506102b9611286565b34801561067f57600080fd5b506102ef61068e366004612798565b611295565b34801561069f57600080fd5b506102a26112e4565b3480156106b457600080fd5b506102ef6106c3366004612798565b6113e0565b3480156106d457600080fd5b5061033060125481565b3480156106ea57600080fd5b5060005461035e906001600160a01b031681565b34801561070a57600080fd5b5060095461035e906001600160a01b031681565b34801561072a57600080fd5b506102a26107393660046127c3565b6113ed565b34801561074a57600080fd5b5061033060195481565b34801561076057600080fd5b506102a261076f3660046127dd565b61146f565b34801561078057600080fd5b506102a261078f3660046127dd565b6114b7565b3480156107a057600080fd5b506103306107af366004612720565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b3480156107e657600080fd5b506102a26107f53660046126e8565b611526565b34801561080657600080fd5b506102a26108153660046127dd565b611571565b34801561082657600080fd5b506102a26108353660046126e8565b6115a0565b6000546001600160a01b0316331461086d5760405162461bcd60e51b8152600401610864906128a0565b60405180910390fd5b601055565b6060600d805461088190612a9e565b80601f01602080910402602001604051908101604052809291908181526020018280546108ad90612a9e565b80156108fa5780601f106108cf576101008083540402835291602001916108fa565b820191906000526020600020905b8154815290600101906020018083116108dd57829003601f168201915b5050505050905090565b6000610911338484611678565b5060015b92915050565b6000546001600160a01b031633146109455760405162461bcd60e51b8152600401610864906128a0565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b600061097484848461179c565b6109c684336109c185604051806060016040528060288152602001612b23602891396001600160a01b038a1660009081526005602090815260408083203384529091529020549190611a32565b611678565b5060019392505050565b6000600b54821115610a375760405162461bcd60e51b815260206004820152602a60248201527f416d6f756e74206d757374206265206c657373207468616e20746f74616c207260448201526965666c656374696f6e7360b01b6064820152608401610864565b6000610a41611a5e565b9050610a4d8382611a81565b9392505050565b6000546001600160a01b03163314610a7e5760405162461bcd60e51b8152600401610864906128a0565b6001600160a01b03811660009081526007602052604090205460ff16610ae65760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c726561647920696e636c7564656400000000006044820152606401610864565b60005b600854811015610c3f57816001600160a01b031660088281548110610b1e57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415610c2d5760088054610b4990600190612a87565b81548110610b6757634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600880546001600160a01b039092169183908110610ba157634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559184168152600482526040808220829055600790925220805460ff191690556008805480610c0757634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b03191690550190555050565b80610c3781612ad9565b915050610ae9565b5050565b6000546001600160a01b03163314610c6d5760405162461bcd60e51b8152600401610864906128a0565b601255565b3360008181526005602090815260408083206001600160a01b038716845290915281205490916109119185906109c19086611a8d565b3360008181526007602052604090205460ff1615610d1d5760405162461bcd60e51b815260206004820152602c60248201527f4578636c75646564206164647265737365732063616e6e6f742063616c6c207460448201526b3434b990333ab731ba34b7b760a11b6064820152608401610864565b6000610d2883611a99565b5050506001600160a01b038616600090815260036020526040902054939450610d5693925084915050611af4565b6001600160a01b038316600090815260036020526040902055600b54610d7c9082611af4565b600b55600c54610d8c9084611a8d565b600c55505050565b6000546001600160a01b03163314610dbe5760405162461bcd60e51b8152600401610864906128a0565b6000819050806001600160a01b031663c45a01556040518163ffffffff1660e01b815260040160206040518083038186803b158015610dfc57600080fd5b505afa158015610e10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e349190612704565b6001600160a01b031663c9c6539630836001600160a01b031663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b158015610e7c57600080fd5b505afa158015610e90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb49190612704565b6040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381600087803b158015610efc57600080fd5b505af1158015610f10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f349190612704565b601780546001600160a01b039283166001600160a01b0319918216179091556016805493909216921691909117905550565b6000546001600160a01b03163314610f905760405162461bcd60e51b8152600401610864906128a0565b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6000600a548311156110085760405162461bcd60e51b815260206004820152601f60248201527f416d6f756e74206d757374206265206c657373207468616e20737570706c79006044820152606401610864565b8161102857600061101884611a99565b5094965061091595505050505050565b600061103384611a99565b5093965061091595505050505050565b6000546001600160a01b0316331461106d5760405162461bcd60e51b8152600401610864906128a0565b6001600160a01b03811660009081526007602052604090205460ff16156110d65760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c7265616479206578636c7564656400000000006044820152606401610864565b6001600160a01b03811660009081526003602052604090205415611130576001600160a01b038116600090815260036020526040902054611116906109d0565b6001600160a01b0382166000908152600460205260409020555b6001600160a01b03166000818152600760205260408120805460ff191660019081179091556008805491820181559091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30180546001600160a01b0319169091179055565b6001600160a01b03811660009081526007602052604081205460ff16156111d357506001600160a01b031660009081526004602052604090205490565b6001600160a01b038216600090815260036020526040902054610915906109d0565b6000546001600160a01b0316331461121f5760405162461bcd60e51b8152600401610864906128a0565b600080546040516001600160a01b0390911690600080516020612b4b833981519152908390a3600080546001600160a01b0319169055565b6000546001600160a01b031633146112815760405162461bcd60e51b8152600401610864906128a0565b601455565b6060600e805461088190612a9e565b600061091133846109c185604051806060016040528060258152602001612b6b602591393360009081526005602090815260408083206001600160a01b038d1684529091529020549190611a32565b6001546001600160a01b0316331461134a5760405162461bcd60e51b8152602060048201526024808201527f596f7520646f6e27742068617665207065726d697373696f6e20746f20756e6c60448201526337b1b59760e11b6064820152608401610864565b60025442116113915760405162461bcd60e51b815260206004820152601360248201527221b7b73a3930b1ba1034b9903637b1b5b2b21760691b6044820152606401610864565b600154600080546040516001600160a01b039384169390911691600080516020612b4b83398151915291a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b600061091133848461179c565b6000546001600160a01b031633146114175760405162461bcd60e51b8152600401610864906128a0565b60178054821515600160a81b0260ff60a81b199091161790556040517f53726dfcaf90650aa7eb35524f4d3220f07413c8d6cb404cc8c18bf5591bc1599061146490831515815260200190565b60405180910390a150565b6000546001600160a01b031633146114995760405162461bcd60e51b8152600401610864906128a0565b600f546114a790600a6129c0565b6114b19082612a68565b60185550565b6000546001600160a01b031633146114e15760405162461bcd60e51b8152600401610864906128a0565b60008054600180546001600160a01b03199081166001600160a01b0384161790915516815560028290556040518190600080516020612b4b833981519152908290a350565b6000546001600160a01b031633146115505760405162461bcd60e51b8152600401610864906128a0565b6001600160a01b03166000908152600660205260409020805460ff19169055565b6000546001600160a01b0316331461159b5760405162461bcd60e51b8152600401610864906128a0565b601955565b6000546001600160a01b031633146115ca5760405162461bcd60e51b8152600401610864906128a0565b6001600160a01b03811661162f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610864565b600080546040516001600160a01b0380851693921691600080516020612b4b83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166116da5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610864565b6001600160a01b03821661173b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610864565b6001600160a01b0383811660008181526005602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166118005760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610864565b6001600160a01b0382166118625760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610864565b600081116118c45760405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b6064820152608401610864565b6000546001600160a01b038481169116148015906118f057506000546001600160a01b03838116911614155b15611958576018548111156119585760405162461bcd60e51b815260206004820152602860248201527f5472616e7366657220616d6f756e74206578636565647320746865206d6178546044820152673c20b6b7bab73a1760c11b6064820152608401610864565b600061196330611196565b9050601854811061197357506018545b601954811080159081906119915750601754600160a01b900460ff16155b80156119ab57506017546001600160a01b03868116911614155b80156119c05750601754600160a81b900460ff165b156119d35760195491506119d382611b00565b6001600160a01b03851660009081526006602052604090205460019060ff1680611a1557506001600160a01b03851660009081526006602052604090205460ff165b15611a1e575060005b611a2a86868684611ba7565b505050505050565b60008184841115611a565760405162461bcd60e51b8152600401610864919061284d565b505050900390565b6000806000611a6b611d47565b9092509050611a7a8282611a81565b9250505090565b6000610a4d828461295d565b6000610a4d8284612945565b6000806000806000806000806000806000611ab38c611f01565b93509350935093506000806000611ad48f878787611acf611a5e565b611f56565b919f509d509b509599509397509195509350505050919395979092949650565b6000610a4d8284612a87565b6017805460ff60a01b1916600160a01b1790556000611b20826002611a81565b90506000611b2e8383611af4565b905047611b3a83611fb8565b6000611b464783611af4565b9050611b528382612135565b60408051858152602081018390529081018490527f17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb5619060600160405180910390a150506017805460ff60a01b19169055505050565b80611bd157611bd16010805460115560128054601355601480546015556000928390559082905555565b6001600160a01b03841660009081526007602052604090205460ff168015611c1257506001600160a01b03831660009081526007602052604090205460ff16155b15611c2757611c22848484612219565b611d25565b6001600160a01b03841660009081526007602052604090205460ff16158015611c6857506001600160a01b03831660009081526007602052604090205460ff165b15611c7857611c2284848461235f565b6001600160a01b03841660009081526007602052604090205460ff16158015611cba57506001600160a01b03831660009081526007602052604090205460ff16155b15611cca57611c2284848461241e565b6001600160a01b03841660009081526007602052604090205460ff168015611d0a57506001600160a01b03831660009081526007602052604090205460ff165b15611d1a57611c22848484612478565b611d2584848461241e565b80611d4157611d41601154601055601354601255601554601455565b50505050565b600b54600a546000918291825b600854811015611ed157826003600060088481548110611d8457634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020541180611dfd5750816004600060088481548110611dd657634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352820192909252604001902054115b15611e1357600b54600a54945094505050509091565b611e676003600060088481548110611e3b57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020548490611af4565b9250611ebd6004600060088481548110611e9157634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020548390611af4565b915080611ec981612ad9565b915050611d54565b50600a54600b54611ee191611a81565b821015611ef857600b54600a549350935050509091565b90939092509050565b6000806000806000611f1286612501565b90506000611f1f87612523565b90506000611f2c8861253f565b90506000611f4682611f4085818d89611af4565b90611af4565b9993985091965094509092505050565b6000808080611f65898661255b565b90506000611f73898761255b565b90506000611f81898861255b565b90506000611f8f898961255b565b90506000611fa382611f4085818989611af4565b949d949c50929a509298505050505050505050565b6040805160028082526060820183526000926020830190803683370190505090503081600081518110611ffb57634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201810191909152601654604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b15801561204f57600080fd5b505afa158015612063573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120879190612704565b816001815181106120a857634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526016546120ce9130911684611678565b60165460405163791ac94760e01b81526001600160a01b039091169063791ac947906121079085906000908690309042906004016128d5565b600060405180830381600087803b15801561212157600080fd5b505af1158015611a2a573d6000803e3d6000fd5b60165461214d9030906001600160a01b031684611678565b6016546001600160a01b031663f305d7198230856000806121766000546001600160a01b031690565b60405160e088901b6001600160e01b03191681526001600160a01b03958616600482015260248101949094526044840192909252606483015290911660848201524260a482015260c4016060604051808303818588803b1580156121d957600080fd5b505af11580156121ed573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906122129190612820565b5050505050565b600080600080600080600061222d88611a99565b965096509650965096509650965061227388600460008d6001600160a01b03166001600160a01b0316815260200190815260200160002054611af490919063ffffffff16565b6001600160a01b038b166000908152600460209081526040808320939093556003905220546122a29088611af4565b6001600160a01b03808c1660009081526003602052604080822093909355908b16815220546122d19087611a8d565b6001600160a01b038a166000908152600360205260409020556122f382612567565b6122fc816125f0565b61230685846126af565b886001600160a01b03168a6001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8660405161234b91815260200190565b60405180910390a350505050505050505050565b600080600080600080600061237388611a99565b96509650965096509650965096506123b987600360008d6001600160a01b03166001600160a01b0316815260200190815260200160002054611af490919063ffffffff16565b6001600160a01b03808c16600090815260036020908152604080832094909455918c168152600490915220546123ef9085611a8d565b6001600160a01b038a166000908152600460209081526040808320939093556003905220546122d19087611a8d565b600080600080600080600061243288611a99565b96509650965096509650965096506122a287600360008d6001600160a01b03166001600160a01b0316815260200190815260200160002054611af490919063ffffffff16565b600080600080600080600061248c88611a99565b96509650965096509650965096506124d288600460008d6001600160a01b03166001600160a01b0316815260200190815260200160002054611af490919063ffffffff16565b6001600160a01b038b166000908152600460209081526040808320939093556003905220546123b99088611af4565b6000610915606461251d6010548561255b90919063ffffffff16565b90611a81565b6000610915606461251d6014548561255b90919063ffffffff16565b6000610915606461251d6012548561255b90919063ffffffff16565b6000610a4d8284612a68565b6000612571611a5e565b9050600061257f838361255b565b3060009081526003602052604090205490915061259c9082611a8d565b3060009081526003602090815260408083209390935560079052205460ff16156125eb57306000908152600460205260409020546125da9084611a8d565b306000908152600460205260409020555b505050565b60006125fa611a5e565b90506000612608838361255b565b6009546001600160a01b03166000908152600360205260409020549091506126309082611a8d565b600980546001600160a01b03908116600090815260036020908152604080832095909555925490911681526007909152205460ff16156125eb576009546001600160a01b031660009081526004602052604090205461268f9084611a8d565b6009546001600160a01b0316600090815260046020526040902055505050565b600b546126bc9083611af4565b600b55600c546126cc9082611a8d565b600c555050565b803580151581146126e357600080fd5b919050565b6000602082840312156126f9578081fd5b8135610a4d81612b0a565b600060208284031215612715578081fd5b8151610a4d81612b0a565b60008060408385031215612732578081fd5b823561273d81612b0a565b9150602083013561274d81612b0a565b809150509250929050565b60008060006060848603121561276c578081fd5b833561277781612b0a565b9250602084013561278781612b0a565b929592945050506040919091013590565b600080604083850312156127aa578182fd5b82356127b581612b0a565b946020939093013593505050565b6000602082840312156127d4578081fd5b610a4d826126d3565b6000602082840312156127ee578081fd5b5035919050565b60008060408385031215612807578182fd5b82359150612817602084016126d3565b90509250929050565b600080600060608486031215612834578283fd5b8351925060208401519150604084015190509250925092565b6000602080835283518082850152825b818110156128795785810183015185820160400152820161285d565b8181111561288a5783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060a082018783526020878185015260a0604085015281875180845260c0860191508289019350845b818110156129245784516001600160a01b0316835293830193918301916001016128ff565b50506001600160a01b03969096166060850152505050608001529392505050565b6000821982111561295857612958612af4565b500190565b60008261297857634e487b7160e01b81526012600452602481fd5b500490565b600181815b808511156129b857816000190482111561299e5761299e612af4565b808516156129ab57918102915b93841c9390800290612982565b509250929050565b6000610a4d83836000826129d657506001610915565b816129e357506000610915565b81600181146129f95760028114612a0357612a1f565b6001915050610915565b60ff841115612a1457612a14612af4565b50506001821b610915565b5060208310610133831016604e8410600b8410161715612a42575081810a610915565b612a4c838361297d565b8060001904821115612a6057612a60612af4565b029392505050565b6000816000190483118215151615612a8257612a82612af4565b500290565b600082821015612a9957612a99612af4565b500390565b600181811c90821680612ab257607f821691505b60208210811415612ad357634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415612aed57612aed612af4565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b0381168114612b1f57600080fd5b5056fe45524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63658be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e045524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212209ab3e8425089e392711b478c9dd2519c728b9cddb6bca356519b660e98c7f8a464736f6c63430008040033'
                },
                j = {
                    abi: [
                        {
                            inputs: [
                                {
                                    internalType: 'string',
                                    name: '_NAME',
                                    type: 'string'
                                },
                                {
                                    internalType: 'string',
                                    name: '_SYMBOL',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_DECIMALS',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_supply',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_lpFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_MAXAMOUNT',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'SELLMAXAMOUNT',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'address',
                                    name: 'routerAddress',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'tokenOwner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Approval',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'minTokensBeforeSwap',
                                    type: 'uint256'
                                }
                            ],
                            name: 'MinTokensBeforeSwapUpdated',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'previousOwner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'OwnershipTransferred',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'tokensSwapped',
                                    type: 'uint256'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'ethReceived',
                                    type: 'uint256'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'tokensIntoLiqudity',
                                    type: 'uint256'
                                }
                            ],
                            name: 'SwapAndLiquify',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !1,
                                    internalType: 'bool',
                                    name: 'enabled',
                                    type: 'bool'
                                }
                            ],
                            name: 'SwapAndLiquifyEnabledUpdated',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Transfer',
                            type: 'event'
                        },
                        {
                            inputs: [
                            ],
                            name: '_liquidityFee',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_maxTxAmount',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_taxFee',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                }
                            ],
                            name: 'allowance',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'approve',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'claimTokens',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'decimals',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'subtractedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'decreaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'deliver',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'excludeFromFee',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'excludeFromReward',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'geUnlockTime',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'includeInFee',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'includeInReward',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'addedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'increaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'isExcludedFromFee',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'isExcludedFromReward',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'time',
                                    type: 'uint256'
                                }
                            ],
                            name: 'lock',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'name',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'numTokensSellToAddToLiquidity',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'bool',
                                    name: 'deductTransferFee',
                                    type: 'bool'
                                }
                            ],
                            name: 'reflectionFromToken',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'renounceOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'liquidityFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setLiquidityFeePercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'maxTxPercent',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setMaxTxPercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'swapNumber',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setNumTokensSellToAddToLiquidity',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'bool',
                                    name: '_enabled',
                                    type: 'bool'
                                }
                            ],
                            name: 'setSwapAndLiquifyEnabled',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'taxFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'setTaxFeePercent',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'swapAndLiquifyEnabled',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'symbol',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'rAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'tokenFromReflection',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalFees',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transfer',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'sender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transferFrom',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'uniswapV2Pair',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'uniswapV2Router',
                            outputs: [
                                {
                                    internalType: 'contract IUniswapV2Router02',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'unlock',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            stateMutability: 'payable',
                            type: 'receive'
                        }
                    ],
                    bin: '0x60c060408190526013805461ff0019166101001790556200314a3881900390819083398181016040526101608110156200003857600080fd5b81019080805160405193929190846401000000008211156200005957600080fd5b9083019060208201858111156200006f57600080fd5b82516401000000008111828201881017156200008a57600080fd5b82525081516020918201929091019080838360005b83811015620000b95781810151838201526020016200009f565b50505050905090810190601f168015620000e75780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010b57600080fd5b9083019060208201858111156200012157600080fd5b82516401000000008111828201881017156200013c57600080fd5b82525081516020918201929091019080838360005b838110156200016b57818101518382015260200162000151565b50505050905090810190601f168015620001995780820380516001836020036101000a031916815260200191505b506040908152602082810151918301516060840151608085015160a086015160c087015160e0880151610100890151610120909901518d51989b50959950939792969195909491620001f291600c91908e0190620004bc565b5089516200020890600d9060208d0190620004bc565b50600e899055600a89900a88026009819055600019816200022557fe5b0619600a818155600f899055601188905560108990556012889055600e54900a86810260145585026015556001600160a01b0380841660009081526003602090815260409182902093909355805163c45a015560e01b8152905186939284169263c45a01559260048082019391829003018186803b158015620002a757600080fd5b505afa158015620002bc573d6000803e3d6000fd5b505050506040513d6020811015620002d357600080fd5b5051604080516315ab88c960e31b815290516001600160a01b039283169263c9c653969230929186169163ad5c464891600480820192602092909190829003018186803b1580156200032457600080fd5b505afa15801562000339573d6000803e3d6000fd5b505050506040513d60208110156200035057600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301525160448083019260209291908290030181600087803b158015620003a357600080fd5b505af1158015620003b8573d6000803e3d6000fd5b505050506040513d6020811015620003cf57600080fd5b50516001600160601b0319606091821b811660a0529082901b166080526001600160a01b03838116600081815260066020526040808220805460ff1990811660019081179092553084528284208054909116909117905581546001600160a01b03191690921781559051918416913480156108fc0292909190818181858888f1935050505015801562000466573d6000803e3d6000fd5b5060095460408051918252516001600160a01b038516916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a350505050505050505050505062000558565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004ff57805160ff19168380011785556200052f565b828001600101855582156200052f579182015b828111156200052f57825182559160200191906001019062000512565b506200053d92915062000541565b5090565b5b808211156200053d576000815560010162000542565b60805160601c60a05160601c612baa620005a060003980610fcb5280611b20525080610a205280612283528061233b52806123625280612448528061246f5250612baa6000f3fe60806040526004361061024a5760003560e01c80636bc87c3a11610139578063a9059cbb116100b6578063d543dbeb1161007a578063d543dbeb146107e8578063dd46706414610812578063dd62ed3e1461083c578063ea2f0b3714610877578063f0f165af146108aa578063f2fde38b146108d457610251565b8063a9059cbb14610744578063b2bdfa7b1461077d578063b6c5232414610792578063c49b9a80146107a7578063d12a7688146107d357610251565b80638da5cb5b116100fd5780638da5cb5b146106a25780638ee88c53146106b757806395d89b41146106e1578063a457c2d7146106f6578063a69df4b51461072f57610251565b80636bc87c3a146105fd57806370a0823114610612578063715018a6146106455780637d1db4a51461065a57806388f820201461066f57610251565b806339509351116101c757806348c54b9d1161018b57806348c54b9d1461055857806349bd5a5e1461056d5780634a74bb021461058257806352390c02146105975780635342acb4146105ca57610251565b8063395093511461047b5780633b124fe7146104b45780633bd5d173146104c9578063437823ec146104f35780634549b0391461052657610251565b806318160ddd1161020e57806318160ddd146103b157806323b872dd146103c65780632d83811914610409578063313ce567146104335780633685d4191461044857610251565b8063061c82d01461025657806306fdde0314610282578063095ea7b31461030c57806313114a9d146103595780631694505e1461038057610251565b3661025157005b600080fd5b34801561026257600080fd5b506102806004803603602081101561027957600080fd5b5035610907565b005b34801561028e57600080fd5b50610297610964565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102d15781810151838201526020016102b9565b50505050905090810190601f1680156102fe5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561031857600080fd5b506103456004803603604081101561032f57600080fd5b506001600160a01b0381351690602001356109fa565b604080519115158252519081900360200190f35b34801561036557600080fd5b5061036e610a18565b60408051918252519081900360200190f35b34801561038c57600080fd5b50610395610a1e565b604080516001600160a01b039092168252519081900360200190f35b3480156103bd57600080fd5b5061036e610a42565b3480156103d257600080fd5b50610345600480360360608110156103e957600080fd5b506001600160a01b03813581169160208101359091169060400135610a48565b34801561041557600080fd5b5061036e6004803603602081101561042c57600080fd5b5035610acf565b34801561043f57600080fd5b5061036e610b31565b34801561045457600080fd5b506102806004803603602081101561046b57600080fd5b50356001600160a01b0316610b37565b34801561048757600080fd5b506103456004803603604081101561049e57600080fd5b506001600160a01b038135169060200135610cf8565b3480156104c057600080fd5b5061036e610d46565b3480156104d557600080fd5b50610280600480360360208110156104ec57600080fd5b5035610d4c565b3480156104ff57600080fd5b506102806004803603602081101561051657600080fd5b50356001600160a01b0316610e26565b34801561053257600080fd5b5061036e6004803603604081101561054957600080fd5b50803590602001351515610ea2565b34801561056457600080fd5b50610280610f34565b34801561057957600080fd5b50610395610fc9565b34801561058e57600080fd5b50610345610fed565b3480156105a357600080fd5b50610280600480360360208110156105ba57600080fd5b50356001600160a01b0316610ffb565b3480156105d657600080fd5b50610345600480360360208110156105ed57600080fd5b50356001600160a01b0316611181565b34801561060957600080fd5b5061036e61119f565b34801561061e57600080fd5b5061036e6004803603602081101561063557600080fd5b50356001600160a01b03166111a5565b34801561065157600080fd5b50610280611207565b34801561066657600080fd5b5061036e611297565b34801561067b57600080fd5b506103456004803603602081101561069257600080fd5b50356001600160a01b031661129d565b3480156106ae57600080fd5b506103956112bb565b3480156106c357600080fd5b50610280600480360360208110156106da57600080fd5b50356112ca565b3480156106ed57600080fd5b50610297611327565b34801561070257600080fd5b506103456004803603604081101561071957600080fd5b506001600160a01b038135169060200135611388565b34801561073b57600080fd5b506102806113f0565b34801561075057600080fd5b506103456004803603604081101561076757600080fd5b506001600160a01b0381351690602001356114de565b34801561078957600080fd5b506103956114f2565b34801561079e57600080fd5b5061036e611501565b3480156107b357600080fd5b50610280600480360360208110156107ca57600080fd5b50351515611507565b3480156107df57600080fd5b5061036e6115ae565b3480156107f457600080fd5b506102806004803603602081101561080b57600080fd5b50356115b4565b34801561081e57600080fd5b506102806004803603602081101561083557600080fd5b5035611618565b34801561084857600080fd5b5061036e6004803603604081101561085f57600080fd5b506001600160a01b03813581169160200135166116b6565b34801561088357600080fd5b506102806004803603602081101561089a57600080fd5b50356001600160a01b03166116e1565b3480156108b657600080fd5b50610280600480360360208110156108cd57600080fd5b503561175a565b3480156108e057600080fd5b50610280600480360360208110156108f757600080fd5b50356001600160a01b03166117be565b61090f6118a4565b6000546001600160a01b0390811691161461095f576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b600f55565b600c8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109f05780601f106109c5576101008083540402835291602001916109f0565b820191906000526020600020905b8154815290600101906020018083116109d357829003601f168201915b5050505050905090565b6000610a0e610a076118a4565b84846118a8565b5060015b92915050565b600b5490565b7f000000000000000000000000000000000000000000000000000000000000000081565b60095490565b6000610a55848484611994565b610ac584610a616118a4565b610ac085604051806060016040528060288152602001612a27602891396001600160a01b038a16600090815260056020526040812090610a9f6118a4565b6001600160a01b031681526020810191909152604001600020549190611bda565b6118a8565b5060019392505050565b6000600a54821115610b125760405162461bcd60e51b815260040180806020018281038252602a81526020018061296c602a913960400191505060405180910390fd5b6000610b1c611c71565b9050610b288382611c94565b9150505b919050565b600e5490565b610b3f6118a4565b6000546001600160a01b03908116911614610b8f576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff16610bfc576040805162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c7265616479206578636c756465640000000000604482015290519081900360640190fd5b60005b600854811015610cf457816001600160a01b031660088281548110610c2057fe5b6000918252602090912001546001600160a01b03161415610cec57600880546000198101908110610c4d57fe5b600091825260209091200154600880546001600160a01b039092169183908110610c7357fe5b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559184168152600482526040808220829055600790925220805460ff191690556008805480610cc557fe5b600082815260209020810160001990810180546001600160a01b0319169055019055610cf4565b600101610bff565b5050565b6000610a0e610d056118a4565b84610ac08560056000610d166118a4565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611cdd565b600f5481565b6000610d566118a4565b6001600160a01b03811660009081526007602052604090205490915060ff1615610db15760405162461bcd60e51b815260040180806020018281038252602c815260200180612b01602c913960400191505060405180910390fd5b6000610dbc83611d37565b505050506001600160a01b038416600090815260036020526040902054919250610de891905082611d86565b6001600160a01b038316600090815260036020526040902055600a54610e0e9082611d86565b600a55600b54610e1e9084611cdd565b600b55505050565b610e2e6118a4565b6000546001600160a01b03908116911614610e7e576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b6000600954831115610efb576040805162461bcd60e51b815260206004820152601f60248201527f416d6f756e74206d757374206265206c657373207468616e20737570706c7900604482015290519081900360640190fd5b81610f1a576000610f0b84611d37565b50939550610a12945050505050565b6000610f2584611d37565b50929550610a12945050505050565b610f3c6118a4565b6000546001600160a01b03908116911614610f8c576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116914780156108fc02929091818181858888f19350505050158015610fc6573d6000803e3d6000fd5b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b601354610100900460ff1681565b6110036118a4565b6000546001600160a01b03908116911614611053576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b6001600160a01b03811660009081526007602052604090205460ff16156110c1576040805162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c7265616479206578636c756465640000000000604482015290519081900360640190fd5b6001600160a01b0381166000908152600360205260409020541561111b576001600160a01b03811660009081526003602052604090205461110190610acf565b6001600160a01b0382166000908152600460205260409020555b6001600160a01b03166000818152600760205260408120805460ff191660019081179091556008805491820181559091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30180546001600160a01b0319169091179055565b6001600160a01b031660009081526006602052604090205460ff1690565b60115481565b6001600160a01b03811660009081526007602052604081205460ff16156111e557506001600160a01b038116600090815260046020526040902054610b2c565b6001600160a01b038216600090815260036020526040902054610a1290610acf565b61120f6118a4565b6000546001600160a01b0390811691161461125f576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b600080546040516001600160a01b0390911690600080516020612a6f833981519152908390a3600080546001600160a01b0319169055565b60145481565b6001600160a01b031660009081526007602052604090205460ff1690565b6000546001600160a01b031690565b6112d26118a4565b6000546001600160a01b03908116911614611322576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b601155565b600d8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109f05780601f106109c5576101008083540402835291602001916109f0565b6000610a0e6113956118a4565b84610ac085604051806060016040528060258152602001612b5060259139600560006113bf6118a4565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611bda565b6001546001600160a01b031633146114395760405162461bcd60e51b8152600401808060200182810382526023815260200180612b2d6023913960400191505060405180910390fd5b600254421161148f576040805162461bcd60e51b815260206004820152601f60248201527f436f6e7472616374206973206c6f636b656420756e74696c2037206461797300604482015290519081900360640190fd5b600154600080546040516001600160a01b039384169390911691600080516020612a6f83398151915291a3600154600080546001600160a01b0319166001600160a01b03909216919091179055565b6000610a0e6114eb6118a4565b8484611994565b6000546001600160a01b031681565b60025490565b61150f6118a4565b6000546001600160a01b0390811691161461155f576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b60138054821515610100810261ff00199092169190911790915560408051918252517f53726dfcaf90650aa7eb35524f4d3220f07413c8d6cb404cc8c18bf5591bc1599181900360200190a150565b60155481565b6115bc6118a4565b6000546001600160a01b0390811691161461160c576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b600e54600a0a02601455565b6116206118a4565b6000546001600160a01b03908116911614611670576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b60008054600180546001600160a01b03199081166001600160a01b038416179091551681554282016002556040518190600080516020612a6f833981519152908290a350565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205490565b6116e96118a4565b6000546001600160a01b03908116911614611739576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600660205260409020805460ff19169055565b6117626118a4565b6000546001600160a01b039081169116146117b2576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b600e54600a0a02601555565b6117c66118a4565b6000546001600160a01b03908116911614611816576040805162461bcd60e51b81526020600482018190526024820152600080516020612a4f833981519152604482015290519081900360640190fd5b6001600160a01b03811661185b5760405162461bcd60e51b81526004018080602001828103825260268152602001806129966026913960400191505060405180910390fd5b600080546040516001600160a01b0380851693921691600080516020612a6f83398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b0383166118ed5760405162461bcd60e51b8152600401808060200182810382526024815260200180612add6024913960400191505060405180910390fd5b6001600160a01b0382166119325760405162461bcd60e51b81526004018080602001828103825260228152602001806129bc6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260056020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166119d95760405162461bcd60e51b8152600401808060200182810382526025815260200180612ab86025913960400191505060405180910390fd5b6001600160a01b038216611a1e5760405162461bcd60e51b81526004018080602001828103825260238152602001806129496023913960400191505060405180910390fd5b60008111611a5d5760405162461bcd60e51b8152600401808060200182810382526029815260200180612a8f6029913960400191505060405180910390fd5b611a656112bb565b6001600160a01b0316836001600160a01b031614158015611a9f5750611a896112bb565b6001600160a01b0316826001600160a01b031614155b15611ae557601454811115611ae55760405162461bcd60e51b81526004018080602001828103825260288152602001806129de6028913960400191505060405180910390fd5b6000611af0306111a5565b90506014548110611b0057506014545b60155481108015908190611b17575060135460ff16155b8015611b5557507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316856001600160a01b031614155b8015611b685750601354610100900460ff165b15611b7b576015549150611b7b82611dc8565b6001600160a01b03851660009081526006602052604090205460019060ff1680611bbd57506001600160a01b03851660009081526006602052604090205460ff165b15611bc6575060005b611bd286868684611e65565b505050505050565b60008184841115611c695760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c2e578181015183820152602001611c16565b50505050905090810190601f168015611c5b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000806000611c7e611fd9565b9092509050611c8d8282611c94565b9250505090565b6000611cd683836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061213c565b9392505050565b600082820183811015611cd6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000806000806000806000806000611d4e8a6121a1565b9250925092506000806000611d6c8d8686611d67611c71565b6121e3565b919f909e50909c50959a5093985091965092945050505050565b6000611cd683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611bda565b6013805460ff191660011790556000611de2826002611c94565b90506000611df08383611d86565b905047611dfc83612233565b6000611e084783611d86565b9050611e148382612442565b604080518581526020810183905280820185905290517f17bbfb9a6069321b6ded73bd96327c9e6b7212a5cd51ff219cd61370acafb5619181900360600190a150506013805460ff19169055505050565b80611e7257611e72612540565b6001600160a01b03841660009081526007602052604090205460ff168015611eb357506001600160a01b03831660009081526007602052604090205460ff16155b15611ec857611ec3848484612572565b611fc6565b6001600160a01b03841660009081526007602052604090205460ff16158015611f0957506001600160a01b03831660009081526007602052604090205460ff165b15611f1957611ec3848484612696565b6001600160a01b03841660009081526007602052604090205460ff16158015611f5b57506001600160a01b03831660009081526007602052604090205460ff16155b15611f6b57611ec384848461273f565b6001600160a01b03841660009081526007602052604090205460ff168015611fab57506001600160a01b03831660009081526007602052604090205460ff165b15611fbb57611ec3848484612783565b611fc684848461273f565b80611fd357611fd36127f6565b50505050565b600a546009546000918291825b60085481101561210a5782600360006008848154811061200257fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020541180612067575081600460006008848154811061204057fe5b60009182526020808320909101546001600160a01b03168352820192909252604001902054115b1561207e57600a5460095494509450505050612138565b6120be600360006008848154811061209257fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020548490611d86565b925061210060046000600884815481106120d457fe5b60009182526020808320909101546001600160a01b031683528201929092526040019020548390611d86565b9150600101611fe6565b50600954600a5461211a91611c94565b82101561213257600a54600954935093505050612138565b90925090505b9091565b6000818361218b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611c2e578181015183820152602001611c16565b50600083858161219757fe5b0495945050505050565b6000806000806121b085612804565b905060006121bd86612826565b905060006121d5826121cf8986611d86565b90611d86565b979296509094509092505050565b60008080806121f28886612842565b905060006122008887612842565b9050600061220e8888612842565b90506000612220826121cf8686611d86565b939b939a50919850919650505050505050565b6040805160028082526060808301845292602083019080368337019050509050308160008151811061226157fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ad5c46486040518163ffffffff1660e01b815260040160206040518083038186803b1580156122da57600080fd5b505afa1580156122ee573d6000803e3d6000fd5b505050506040513d602081101561230457600080fd5b505181518290600190811061231557fe5b60200260200101906001600160a01b031690816001600160a01b031681525050612360307f0000000000000000000000000000000000000000000000000000000000000000846118a8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663791ac9478360008430426040518663ffffffff1660e01b81526004018086815260200185815260200180602001846001600160a01b03168152602001838152602001828103825285818151815260200191508051906020019060200280838360005b838110156124055781810151838201526020016123ed565b505050509050019650505050505050600060405180830381600087803b15801561242e57600080fd5b505af1158015611bd2573d6000803e3d6000fd5b61246d307f0000000000000000000000000000000000000000000000000000000000000000846118a8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f305d7198230856000806124aa6112bb565b426040518863ffffffff1660e01b815260040180876001600160a01b03168152602001868152602001858152602001848152602001836001600160a01b0316815260200182815260200196505050505050506060604051808303818588803b15801561251557600080fd5b505af1158015612529573d6000803e3d6000fd5b50505050506040513d6060811015611fd357600080fd5b600f541580156125505750601154155b1561255a57612570565b600f805460105560118054601255600091829055555b565b60008060008060008061258487611d37565b6001600160a01b038f16600090815260046020526040902054959b509399509197509550935091506125b69088611d86565b6001600160a01b038a166000908152600460209081526040808320939093556003905220546125e59087611d86565b6001600160a01b03808b1660009081526003602052604080822093909355908a16815220546126149086611cdd565b6001600160a01b0389166000908152600360205260409020556126368161289b565b6126408483612924565b876001600160a01b0316896001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050505050565b6000806000806000806126a887611d37565b6001600160a01b038f16600090815260036020526040902054959b509399509197509550935091506126da9087611d86565b6001600160a01b03808b16600090815260036020908152604080832094909455918b168152600490915220546127109084611cdd565b6001600160a01b0389166000908152600460209081526040808320939093556003905220546126149086611cdd565b60008060008060008061275187611d37565b6001600160a01b038f16600090815260036020526040902054959b509399509197509550935091506125e59087611d86565b60008060008060008061279587611d37565b6001600160a01b038f16600090815260046020526040902054959b509399509197509550935091506127c79088611d86565b6001600160a01b038a166000908152600460209081526040808320939093556003905220546126da9087611d86565b601054600f55601254601155565b6000610a126064612820600f548561284290919063ffffffff16565b90611c94565b6000610a1260646128206011548561284290919063ffffffff16565b60008261285157506000610a12565b8282028284828161285e57fe5b0414611cd65760405162461bcd60e51b8152600401808060200182810382526021815260200180612a066021913960400191505060405180910390fd5b60006128a5611c71565b905060006128b38383612842565b306000908152600360205260409020549091506128d09082611cdd565b3060009081526003602090815260408083209390935560079052205460ff161561291f573060009081526004602052604090205461290e9084611cdd565b306000908152600460205260409020555b505050565b600a546129319083611d86565b600a55600b546129419082611cdd565b600b55505056fe45524332303a207472616e7366657220746f20746865207a65726f2061646472657373416d6f756e74206d757374206265206c657373207468616e20746f74616c207265666c656374696f6e734f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573735472616e7366657220616d6f756e74206578636565647320746865206d61785478416d6f756e742e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65728be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e05472616e7366657220616d6f756e74206d7573742062652067726561746572207468616e207a65726f45524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573734578636c75646564206164647265737365732063616e6e6f742063616c6c20746869732066756e6374696f6e596f7520646f6e27742068617665207065726d697373696f6e20746f20756e6c6f636b45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122094cfffddcc7e1fa923b43d08299434a9390b49dc307cb3d4f4ea2c20baa6f56864736f6c634300060c0033'
                },
                U = {
                    abi: [
                        {
                            inputs: [
                                {
                                    internalType: 'string',
                                    name: '_name',
                                    type: 'string'
                                },
                                {
                                    internalType: 'string',
                                    name: '_symbol',
                                    type: 'string'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_decimals',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_supply',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_burnFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_charityFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'address',
                                    name: '_FeeAddress',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'tokenOwner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Approval',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'previousOwner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'OwnershipTransferred',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    internalType: 'address',
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    internalType: 'uint256',
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Transfer',
                            type: 'event'
                        },
                        {
                            inputs: [
                            ],
                            name: 'FeeAddress',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_BURN_FEE',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_CHARITY_FEE',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_TAX_FEE',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: '_owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                }
                            ],
                            name: 'allowance',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'approve',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'decimals',
                            outputs: [
                                {
                                    internalType: 'uint8',
                                    name: '',
                                    type: 'uint8'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'subtractedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'decreaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'deliver',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'excludeAccount',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'includeAccount',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'addedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'increaseAllowance',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'isExcluded',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'name',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    internalType: 'address',
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'tAmount',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'bool',
                                    name: 'deductTransferFee',
                                    type: 'bool'
                                }
                            ],
                            name: 'reflectionFromToken',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'renounceOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'account',
                                    type: 'address'
                                }
                            ],
                            name: 'setAsCharityAccount',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'symbol',
                            outputs: [
                                {
                                    internalType: 'string',
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: 'rAmount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'tokenFromReflection',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalBurn',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalCharity',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalFees',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                            ],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    internalType: 'uint256',
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transfer',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'sender',
                                    type: 'address'
                                },
                                {
                                    internalType: 'address',
                                    name: 'recipient',
                                    type: 'address'
                                },
                                {
                                    internalType: 'uint256',
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transferFrom',
                            outputs: [
                                {
                                    internalType: 'bool',
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'address',
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    internalType: 'uint256',
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_burnFee',
                                    type: 'uint256'
                                },
                                {
                                    internalType: 'uint256',
                                    name: '_charityFee',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateFee',
                            outputs: [
                            ],
                            stateMutability: 'nonpayable',
                            type: 'function'
                        }
                    ],
                    bin: '0x6080604052600019600a556064600c55604051620026663803806200266683398101604081905262000031916200032e565b8951620000469060069060208d0190620001b8565b5088516200005c9060079060208c0190620001b8565b5060088890556200006f88600a6200044c565b600b81905562000080908862000541565b600d819055600a54620000949190620005ba565b600a54620000a3919062000563565b600e55620000b386606462000541565b601255620000c385606462000541565b601355620000d384606462000541565b6014819055601254601555601354601655601755600980546001600160a01b038086166001600160a01b03199283161790925560008054858416921682178155600e5491815260016020526040808220929092559051918316913480156108fc0292909190818181858888f1935050505015801562000156573d6000803e3d6000fd5b50816001600160a01b031660006001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600d54604051620001a091815260200190565b60405180910390a35050505050505050505062000607565b828054620001c6906200057d565b90600052602060002090601f016020900481019282620001ea576000855562000235565b82601f106200020557805160ff191683800117855562000235565b8280016001018555821562000235579182015b828111156200023557825182559160200191906001019062000218565b506200024392915062000247565b5090565b5b8082111562000243576000815560010162000248565b80516001600160a01b03811681146200027657600080fd5b919050565b600082601f8301126200028c578081fd5b81516001600160401b0380821115620002a957620002a9620005f1565b604051601f8301601f19908116603f01168101908282118183101715620002d457620002d4620005f1565b81604052838152602092508683858801011115620002f0578485fd5b8491505b83821015620003135785820183015181830184015290820190620002f4565b838211156200032457848385830101525b9695505050505050565b6000806000806000806000806000806101408b8d0312156200034e578586fd5b8a516001600160401b038082111562000365578788fd5b620003738e838f016200027b565b9b5060208d015191508082111562000389578788fd5b50620003988d828e016200027b565b99505060408b0151975060608b0151965060808b0151955060a08b0151945060c08b01519350620003cc60e08c016200025e565b9250620003dd6101008c016200025e565b9150620003ee6101208c016200025e565b90509295989b9194979a5092959850565b80825b600180861162000413575062000443565b818704821115620004285762000428620005db565b808616156200043657918102915b9490941c93800262000402565b94509492505050565b60006200045d600019848462000464565b9392505050565b60008262000475575060016200045d565b8162000484575060006200045d565b81600181146200049d5760028114620004a857620004dc565b60019150506200045d565b60ff841115620004bc57620004bc620005db565b6001841b915084821115620004d557620004d5620005db565b506200045d565b5060208310610133831016604e8410600b841016171562000514575081810a838111156200050e576200050e620005db565b6200045d565b620005238484846001620003ff565b808604821115620005385762000538620005db565b02949350505050565b60008160001904831182151516156200055e576200055e620005db565b500290565b600082821015620005785762000578620005db565b500390565b6002810460018216806200059257607f821691505b60208210811415620005b457634e487b7160e01b600052602260045260246000fd5b50919050565b600082620005d657634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61204f80620006176000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80637b7e8bac11610104578063b5862428116100a2578063f2cc0c1811610071578063f2cc0c18146103eb578063f2fde38b146103fe578063f84354f114610411578063fc061a4f14610424576101da565b8063b586242814610375578063cba0e9961461037e578063d608b3b2146103aa578063dd62ed3e146103b2576101da565b8063a457c2d7116100de578063a457c2d714610333578063a9059cbb14610346578063ae9dd5e014610359578063b2bdfa7b14610362576101da565b80637b7e8bac146102ef5780638da5cb5b1461031a57806395d89b411461032b576101da565b8063395093511161017c578063457bdf6c1161014b578063457bdf6c146102b857806370a08231146102cb578063715018a6146102de57806377ef7993146102e6576101da565b806339509351146102755780633bd5d173146102885780633c9f861d1461029d5780634549b039146102a5576101da565b806318160ddd116101b857806318160ddd1461023257806323b872dd1461023a5780632d8381191461024d578063313ce56714610260576101da565b806306fdde03146101df578063095ea7b3146101fd57806313114a9d14610220575b600080fd5b6101e7610437565b6040516101f49190611e66565b60405180910390f35b61021061020b366004611dc7565b6104c9565b60405190151581526020016101f4565b600f545b6040519081526020016101f4565b600d54610224565b610210610248366004611d8c565b6104e0565b61022461025b366004611df0565b610549565b60085460405160ff90911681526020016101f4565b610210610283366004611dc7565b6105d4565b61029b610296366004611df0565b61060a565b005b601054610224565b6102246102b3366004611e08565b6106f6565b61029b6102c6366004611d40565b610785565b6102246102d9366004611d40565b6107d1565b61029b610833565b61022460135481565b600954610302906001600160a01b031681565b6040516001600160a01b0390911681526020016101f4565b6000546001600160a01b0316610302565b6101e76108a7565b610210610341366004611dc7565b6108b6565b610210610354366004611dc7565b610905565b61022460145481565b600054610302906001600160a01b031681565b61022460125481565b61021061038c366004611d40565b6001600160a01b031660009081526004602052604090205460ff1690565b601154610224565b6102246103c0366004611d5a565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61029b6103f9366004611d40565b610912565b61029b61040c366004611d40565b610a65565b61029b61041f366004611d40565b610b4f565b61029b610432366004611e3b565b610d3f565b60606006805461044690611f5c565b80601f016020809104026020016040519081016040528092919081815260200182805461047290611f5c565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b5050505050905090565b60006104d6338484610dce565b5060015b92915050565b60006104ed848484610ef6565b61053f843361053a856040518060600160405280602a8152602001611ff0602a91396001600160a01b038a16600090815260036020908152604080832033845290915290205491906111fd565b610dce565b5060019392505050565b6000600e548211156105b55760405162461bcd60e51b815260206004820152602a60248201527f416d6f756e74206d757374206265206c657373207468616e20746f74616c207260448201526965666c656374696f6e7360b01b60648201526084015b60405180910390fd5b60006105bf611237565b90506105cb838261125a565b9150505b919050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490916104d691859061053a90866112a3565b3360008181526004602052604090205460ff161561067f5760405162461bcd60e51b815260206004820152602c60248201527f4578636c75646564206164647265737365732063616e6e6f742063616c6c207460448201526b3434b990333ab731ba34b7b760a11b60648201526084016105ac565b600061068a83611302565b5050506001600160a01b0386166000908152600160205260409020549394506106b893925084915050611386565b6001600160a01b038316600090815260016020526040902055600e546106de9082611386565b600e55600f546106ee90846112a3565b600f55505050565b6000600d5483111561074a5760405162461bcd60e51b815260206004820152601f60248201527f416d6f756e74206d757374206265206c657373207468616e20737570706c790060448201526064016105ac565b8161076a57600061075a84611302565b509496506104da95505050505050565b600061077584611302565b509396506104da95505050505050565b6000546001600160a01b031633146107af5760405162461bcd60e51b81526004016105ac90611eb9565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526004602052604081205460ff161561081157506001600160a01b0381166000908152600260205260409020546105cf565b6001600160a01b0382166000908152600160205260409020546104da90610549565b6000546001600160a01b0316331461085d5760405162461bcd60e51b81526004016105ac90611eb9565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b60606007805461044690611f5c565b60006104d6338461053a85604051806060016040528060278152602001611fc9602791393360009081526003602090815260408083206001600160a01b038d16845290915290205491906111fd565b60006104d6338484610ef6565b6000546001600160a01b0316331461093c5760405162461bcd60e51b81526004016105ac90611eb9565b6001600160a01b03811660009081526004602052604090205460ff16156109a55760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c7265616479206578636c75646564000000000060448201526064016105ac565b6001600160a01b038116600090815260016020526040902054156109ff576001600160a01b0381166000908152600160205260409020546109e590610549565b6001600160a01b0382166000908152600260205260409020555b6001600160a01b03166000818152600460205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319169091179055565b6000546001600160a01b03163314610a8f5760405162461bcd60e51b81526004016105ac90611eb9565b6001600160a01b038116610af45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105ac565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b03163314610b795760405162461bcd60e51b81526004016105ac90611eb9565b6001600160a01b03811660009081526004602052604090205460ff16610be15760405162461bcd60e51b815260206004820152601b60248201527f4163636f756e7420697320616c726561647920696e636c75646564000000000060448201526064016105ac565b60005b600554811015610d3b57816001600160a01b031660058281548110610c1957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415610d295760058054610c4490600190611f45565b81548110610c6257634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600580546001600160a01b039092169183908110610c9c57634e487b7160e01b600052603260045260246000fd5b600091825260208083209190910180546001600160a01b0319166001600160a01b039485161790559184168152600282526040808220829055600490925220805460ff191690556005805480610d0257634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b0319169055019055610d3b565b80610d3381611f97565b915050610be4565b5050565b6000546001600160a01b03163314610d695760405162461bcd60e51b81526004016105ac90611eb9565b606483108015610d795750606482105b8015610d855750606481105b610d8e57600080fd5b610d99836064611f26565b601255610da7826064611f26565b601355610db5816064611f26565b6014819055601254601555601354601655601755505050565b6001600160a01b038316610e335760405162461bcd60e51b815260206004820152602660248201527f544f4b454e32303a20617070726f76652066726f6d20746865207a65726f206160448201526564647265737360d01b60648201526084016105ac565b6001600160a01b038216610e955760405162461bcd60e51b8152602060048201526024808201527f544f4b454e32303a20617070726f766520746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105ac565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316610f5c5760405162461bcd60e51b815260206004820152602760248201527f544f4b454e32303a207472616e736665722066726f6d20746865207a65726f206044820152666164647265737360c81b60648201526084016105ac565b6001600160a01b038216610fc05760405162461bcd60e51b815260206004820152602560248201527f544f4b454e32303a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016105ac565b600081116110225760405162461bcd60e51b815260206004820152602960248201527f5472616e7366657220616d6f756e74206d7573742062652067726561746572206044820152687468616e207a65726f60b81b60648201526084016105ac565b6009546001906001600160a01b038581169116148061104e57506009546001600160a01b038481169116145b8061107157506001600160a01b03831660009081526004602052604090205460ff165b1561107a575060005b80611087576110876113c8565b6001600160a01b03841660009081526004602052604090205460ff1680156110c857506001600160a01b03831660009081526004602052604090205460ff16155b156110dd576110d8848484611411565b6111db565b6001600160a01b03841660009081526004602052604090205460ff1615801561111e57506001600160a01b03831660009081526004602052604090205460ff165b1561112e576110d88484846114d5565b6001600160a01b03841660009081526004602052604090205460ff1615801561117057506001600160a01b03831660009081526004602052604090205460ff16155b15611180576110d8848484611527565b6001600160a01b03841660009081526004602052604090205460ff1680156111c057506001600160a01b03831660009081526004602052604090205460ff165b156111d0576110d8848484611578565b6111db848484611527565b806111f7576111f7601554601255601654601355601754601455565b50505050565b600081848411156112215760405162461bcd60e51b81526004016105ac9190611e66565b50600061122e8486611f45565b95945050505050565b60008060006112446115cb565b9092509050611253828261125a565b9250505090565b600061129c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611788565b9392505050565b6000806112b08385611eee565b90508381101561129c5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016105ac565b6000806000806000806000806000806113238b6012546013546014546117b6565b92509250925060006113378c858585611835565b90506000611343611237565b90506000806113538f888561184d565b9150915060006113668383898988611877565b929e50919c509a5091985093965091945092505050919395979092949650565b600061129c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506111fd565b6012541580156113d85750601354155b80156113e45750601454155b156113ee5761140f565b60128054601555601380546016556014805460175560009283905590829055555b565b600061141b611237565b9050600080600080600080600061143189611302565b9650965096509650965096509650600061145489846118b390919063ffffffff16565b90506114638c8c8c8b8b611932565b61146d828d6119d6565b61147a8682868686611ab7565b8a6001600160a01b03168c6001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040516114bf91815260200190565b60405180910390a3505050505050505050505050565b60006114df611237565b905060008060008060008060006114f589611302565b9650965096509650965096509650600061151889846118b390919063ffffffff16565b90506114638c8c878b8b611b52565b6000611531611237565b9050600080600080600080600061154789611302565b9650965096509650965096509650600061156a89846118b390919063ffffffff16565b90506114638c8c8a8a611bda565b6000611582611237565b9050600080600080600080600061159889611302565b965096509650965096509650965060006115bb89846118b390919063ffffffff16565b90506114638c8c8c8b898c611c4e565b600e54600d546000918291825b6005548110156117565782600160006005848154811061160857634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020541180611681575081600260006005848154811061165a57634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b03168352820192909252604001902054115b1561169857600e54600d5494509450505050611784565b6116ec60016000600584815481106116c057634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020548490611386565b9250611742600260006005848154811061171657634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040019020548390611386565b91508061174e81611f97565b9150506115d8565b50600d54600e546117669161125a565b82101561177e57600e54600d54935093505050611784565b90925090505b9091565b600081836117a95760405162461bcd60e51b81526004016105ac9190611e66565b50600061122e8486611f06565b6000806000806117e060646117da600c546117da8b8d6118b390919063ffffffff16565b9061125a565b9050600061180260646117da600c546117da8b8e6118b390919063ffffffff16565b9050600061182460646117da600c546117da8b8f6118b390919063ffffffff16565b929a91995091975095505050505050565b600061122e8261184785818989611386565b90611386565b6000808061185b86856118b3565b9050600061186986866118b3565b919791965090945050505050565b60008061188485846118b3565b9050600061189285856118b3565b905060006118a68261184785818d8d611386565b9998505050505050505050565b6000826118c2575060006104da565b60006118ce8385611f26565b9050826118db8583611f06565b1461129c5760405162461bcd60e51b815260206004820152602160248201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6044820152607760f81b60648201526084016105ac565b6001600160a01b0385166000908152600260205260409020546119559084611386565b6001600160a01b0386166000908152600260209081526040808320939093556001905220546119849083611386565b6001600160a01b0380871660009081526001602052604080822093909355908616815220546119b390826112a3565b6001600160a01b0390941660009081526001602052604090209390935550505050565b60006119e0611237565b905060006119ee84836118b3565b6009546001600160a01b0316600090815260016020526040902054909150611a1690826112a3565b600980546001600160a01b039081166000908152600160209081526040808320959095559254909116815260029091522054611a5290856112a3565b600980546001600160a01b03908116600090815260026020908152604091829020949094559154915187815291811692908616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a350505050565b611ad08461184787600e5461138690919063ffffffff16565b600e55600f54611ae090846112a3565b600f55601054611af090836112a3565b601055601154611b0090826112a3565b601155600d54611b109083611386565b600d5560405182815260009030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050505050565b6001600160a01b038516600090815260016020526040902054611b759083611386565b6001600160a01b03808716600090815260016020908152604080832094909455918716815260029091522054611bab90846112a3565b6001600160a01b0385166000908152600260209081526040808320939093556001905220546119b390826112a3565b6001600160a01b038416600090815260016020526040902054611bfd9083611386565b6001600160a01b038086166000908152600160205260408082209390935590851681522054611c2c90826112a3565b6001600160a01b03909316600090815260016020526040902092909255505050565b6001600160a01b038616600090815260026020526040902054611c719085611386565b6001600160a01b038716600090815260026020908152604080832093909355600190522054611ca09084611386565b6001600160a01b03808816600090815260016020908152604080832094909455918816815260029091522054611cd690836112a3565b6001600160a01b038616600090815260026020908152604080832093909355600190522054611d0590826112a3565b6001600160a01b039095166000908152600160205260409020949094555050505050565b80356001600160a01b03811681146105cf57600080fd5b600060208284031215611d51578081fd5b61129c82611d29565b60008060408385031215611d6c578081fd5b611d7583611d29565b9150611d8360208401611d29565b90509250929050565b600080600060608486031215611da0578081fd5b611da984611d29565b9250611db760208501611d29565b9150604084013590509250925092565b60008060408385031215611dd9578182fd5b611de283611d29565b946020939093013593505050565b600060208284031215611e01578081fd5b5035919050565b60008060408385031215611e1a578182fd5b8235915060208301358015158114611e30578182fd5b809150509250929050565b600080600060608486031215611e4f578283fd5b505081359360208301359350604090920135919050565b6000602080835283518082850152825b81811015611e9257858101830151858201604001528201611e76565b81811115611ea35783604083870101525b50601f01601f1916929092016040019392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60008219821115611f0157611f01611fb2565b500190565b600082611f2157634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615611f4057611f40611fb2565b500290565b600082821015611f5757611f57611fb2565b500390565b600281046001821680611f7057607f821691505b60208210811415611f9157634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611fab57611fab611fb2565b5060010190565b634e487b7160e01b600052601160045260246000fdfe544f4b454e32303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f544f4b454e32303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a264697066735822122013dc6a5ec76f15b737502438be35df52ea193ad6bdbb313d110a0bde11d50a4b64736f6c63430008020033'
                },
                Y = {
                    abi: [
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'name',
                            outputs: [
                                {
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'approve',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_from',
                                    type: 'address'
                                },
                                {
                                    name: '_to',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transferFrom',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'decimals',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'unpause',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'account',
                                    type: 'address'
                                },
                                {
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'mint',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'burn',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'paused',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_subtractedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'decreaseApproval',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                                {
                                    name: '_owner',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    name: 'balance',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'listAddress',
                                    type: 'address'
                                },
                                {
                                    name: 'isBlackListed',
                                    type: 'bool'
                                }
                            ],
                            name: 'blackListAddress',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'FeeAddress',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'pause',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    name: '_burnFee',
                                    type: 'uint256'
                                },
                                {
                                    name: '_FeeAddress',
                                    type: 'address'
                                }
                            ],
                            name: 'updateFee',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'symbol',
                            outputs: [
                                {
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_to',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transfer',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'txFee',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_addedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'increaseApproval',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                                {
                                    name: '_owner',
                                    type: 'address'
                                },
                                {
                                    name: '_spender',
                                    type: 'address'
                                }
                            ],
                            name: 'allowance',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'burnFee',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    name: '_name',
                                    type: 'string'
                                },
                                {
                                    name: '_symbol',
                                    type: 'string'
                                },
                                {
                                    name: '_decimals',
                                    type: 'uint256'
                                },
                                {
                                    name: '_supply',
                                    type: 'uint256'
                                },
                                {
                                    name: '_txFee',
                                    type: 'uint256'
                                },
                                {
                                    name: '_burnFee',
                                    type: 'uint256'
                                },
                                {
                                    name: '_FeeAddress',
                                    type: 'address'
                                },
                                {
                                    name: 'tokenOwner',
                                    type: 'address'
                                },
                                {
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            payable: !0,
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Mint',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'burner',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Burn',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                            ],
                            name: 'Pause',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                            ],
                            name: 'Unpause',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'previousOwner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'OwnershipTransferred',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'blackListed',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'bool'
                                }
                            ],
                            name: 'Blacklist',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Approval',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Transfer',
                            type: 'event'
                        }
                    ],
                    bin: '0x60806040526000600760146101000a81548160ff02191690831515021790555060405162002acb38038062002acb8339810180604052810190808051820192919060200180518201929190602001805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050508860089080519060200190620000ae92919062000270565b508760099080519060200190620000c792919062000270565b5086600a8190555086600a0a8602600081905550600054600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846001819055508360028190555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015620001f8573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6000546040518082815260200191505060405180910390a35050505050505050506200031f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002b357805160ff1916838001178555620002e4565b82800160010185558215620002e4579182015b82811115620002e3578251825591602001919060010190620002c6565b5b509050620002f39190620002f7565b5090565b6200031c91905b8082111562000318576000816000905550600101620002fe565b5090565b90565b61279c806200032f6000396000f300608060405260043610610133576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde0314610138578063095ea7b3146101c857806318160ddd1461022d57806323b872dd14610258578063313ce567146102dd5780633f4ba83a1461030857806340c10f191461031f57806342966c681461036c5780635c975abb1461039957806366188463146103c857806370a082311461042d578063794be707146104845780637b7e8bac146104eb5780638456cb5914610542578063875ae990146105595780638da5cb5b146105b057806395d89b4114610607578063a9059cbb14610697578063cf820461146106fc578063d73dd62314610727578063dd62ed3e1461078c578063f2fde38b14610803578063fce589d814610846575b600080fd5b34801561014457600080fd5b5061014d610871565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561018d578082015181840152602081019050610172565b50505050905090810190601f1680156101ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101d457600080fd5b50610213600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061090f565b604051808215151515815260200191505060405180910390f35b34801561023957600080fd5b5061024261093f565b6040518082815260200191505060405180910390f35b34801561026457600080fd5b506102c3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610945565b604051808215151515815260200191505060405180910390f35b3480156102e957600080fd5b506102f2610977565b6040518082815260200191505060405180910390f35b34801561031457600080fd5b5061031d61097d565b005b34801561032b57600080fd5b5061036a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a3d565b005b34801561037857600080fd5b5061039760048036038101908080359060200190929190505050610c19565b005b3480156103a557600080fd5b506103ae610c26565b604051808215151515815260200191505060405180910390f35b3480156103d457600080fd5b50610413600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c39565b604051808215151515815260200191505060405180910390f35b34801561043957600080fd5b5061046e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c69565b6040518082815260200191505060405180910390f35b34801561049057600080fd5b506104d1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050610cb2565b604051808215151515815260200191505060405180910390f35b3480156104f757600080fd5b50610500610d3e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561054e57600080fd5b50610557610d64565b005b34801561056557600080fd5b506105ae6004803603810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e25565b005b3480156105bc57600080fd5b506105c5610ed5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561061357600080fd5b5061061c610efb565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561065c578082015181840152602081019050610641565b50505050905090810190601f1680156106895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156106a357600080fd5b506106e2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f99565b604051808215151515815260200191505060405180910390f35b34801561070857600080fd5b50610711610fc9565b6040518082815260200191505060405180910390f35b34801561073357600080fd5b50610772600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fcf565b604051808215151515815260200191505060405180910390f35b34801561079857600080fd5b506107ed600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fff565b6040518082815260200191505060405180910390f35b34801561080f57600080fd5b50610844600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611086565b005b34801561085257600080fd5b5061085b6111de565b6040518082815260200191505060405180910390f35b60088054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109075780601f106108dc57610100808354040283529160200191610907565b820191906000526020600020905b8154815290600101906020018083116108ea57829003601f168201915b505050505081565b6000600760149054906101000a900460ff1615151561092d57600080fd5b61093783836111e4565b905092915050565b60005481565b6000600760149054906101000a900460ff1615151561096357600080fd5b61096e8484846112d6565b90509392505050565b600a5481565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156109d957600080fd5b600760149054906101000a900460ff1615156109f457600080fd5b6000600760146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a9957600080fd5b610aae81600054611a1c90919063ffffffff16565b600081905550610b0681600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f8836040518082815260200191505060405180910390a38173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b610c233382611a3a565b50565b600760149054906101000a900460ff1681565b6000600760149054906101000a900460ff16151515610c5757600080fd5b610c618383611bf0565b905092915050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600760149054906101000a900460ff16151515610cd057600080fd5b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d2c57600080fd5b610d368383611e81565b905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dc057600080fd5b600760149054906101000a900460ff16151515610ddc57600080fd5b6001600760146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e8157600080fd5b826001819055508160028190555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f915780601f10610f6657610100808354040283529160200191610f91565b820191906000526020600020905b815481529060010190602001808311610f7457829003601f168201915b505050505081565b6000600760149054906101000a900460ff16151515610fb757600080fd5b610fc18383611f95565b905092915050565b60015481565b6000600760149054906101000a900460ff16151515610fed57600080fd5b610ff78383612540565b905092915050565b6000600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110e257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561111e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60025481565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60008060008060001515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151561133b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415151561137757600080fd5b600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205485111515156113c557600080fd5b600460008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054851115151561145057600080fd5b6114a285600660008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461273c90919063ffffffff16565b600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555084925060006001541180156115485750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b156116e65761156e600154606481151561155e57fe5b048461275590919063ffffffff16565b91506115e48260066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b60066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36116e3828661273c90919063ffffffff16565b94505b60006002541180156117465750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614155b156118055761176c600254606481151561175c57fe5b048461275590919063ffffffff16565b90506117838160005461273c90919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3611802818661273c90919063ffffffff16565b94505b61185785600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061192985600460008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461273c90919063ffffffff16565b600460008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040518082815260200191505060405180910390a3600193505050509392505050565b6000808284019050838110151515611a3057fe5b8091505092915050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548111151515611a8857600080fd5b611ada81600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461273c90919063ffffffff16565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611b328160005461273c90919063ffffffff16565b6000819055508173ffffffffffffffffffffffffffffffffffffffff167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5826040518082815260200191505060405180910390a2600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611d01576000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611d95565b611d14838261273c90919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000811515600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514151515611ee257600080fd5b81600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508273ffffffffffffffffffffffffffffffffffffffff167ff7e58a63a036e3a7ef7921f83b6ae47930cf5c293dd3bfe7a857c6863409046d83604051808215151515815260200191505060405180910390a26001905092915050565b60008060008060001515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515611ffa57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415151561203657600080fd5b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054851115151561208457600080fd5b6120d685600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461273c90919063ffffffff16565b600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550849250600060015411801561217c5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b1561231a576121a2600154606481151561219257fe5b048461275590919063ffffffff16565b91506122188260066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b60066000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3612317828661273c90919063ffffffff16565b94505b600060025411801561237a5750600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614155b15612439576123a0600254606481151561239057fe5b048461275590919063ffffffff16565b90506123b78160005461273c90919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3612436818661273c90919063ffffffff16565b94505b61248b85600660008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef876040518082815260200191505060405180910390a36001935050505092915050565b60006125d182600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a1c90919063ffffffff16565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b600082821115151561274a57fe5b818303905092915050565b600080828481151561276357fe5b04905080915050929150505600a165627a7a72305820548a9687524baa6fbdb91c34a2b6bae7fcf7b7cac8c06f09c8a843af09f670160029'
                },
                z = {
                    abi: [
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'name',
                            outputs: [
                                {
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'approve',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'totalSupply',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_from',
                                    type: 'address'
                                },
                                {
                                    name: '_to',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transferFrom',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'decimals',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'unpause',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'account',
                                    type: 'address'
                                },
                                {
                                    name: 'amount',
                                    type: 'uint256'
                                }
                            ],
                            name: 'mint',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'burn',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'paused',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_subtractedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'decreaseApproval',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                                {
                                    name: '_owner',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    name: 'balance',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'listAddress',
                                    type: 'address'
                                },
                                {
                                    name: 'isBlackListed',
                                    type: 'bool'
                                }
                            ],
                            name: 'blackListAddress',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'pause',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'symbol',
                            outputs: [
                                {
                                    name: '',
                                    type: 'string'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_to',
                                    type: 'address'
                                },
                                {
                                    name: '_value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'transfer',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_spender',
                                    type: 'address'
                                },
                                {
                                    name: '_addedValue',
                                    type: 'uint256'
                                }
                            ],
                            name: 'increaseApproval',
                            outputs: [
                                {
                                    name: 'success',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                                {
                                    name: '_owner',
                                    type: 'address'
                                },
                                {
                                    name: '_spender',
                                    type: 'address'
                                }
                            ],
                            name: 'allowance',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    name: '_name',
                                    type: 'string'
                                },
                                {
                                    name: '_symbol',
                                    type: 'string'
                                },
                                {
                                    name: '_decimals',
                                    type: 'uint256'
                                },
                                {
                                    name: '_supply',
                                    type: 'uint256'
                                },
                                {
                                    name: 'tokenOwner',
                                    type: 'address'
                                },
                                {
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            payable: !0,
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Mint',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'burner',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Burn',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                            ],
                            name: 'Pause',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                            ],
                            name: 'Unpause',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'previousOwner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'OwnershipTransferred',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'blackListed',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'bool'
                                }
                            ],
                            name: 'Blacklist',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'owner',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'spender',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Approval',
                            type: 'event'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'from',
                                    type: 'address'
                                },
                                {
                                    indexed: !0,
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'Transfer',
                            type: 'event'
                        }
                    ],
                    bin: '0x608060408190526004805460a060020a60ff0219169055620010ec388190039081908339810160409081528151602080840151928401516060850151608086015160a08701519487018051909796909601959294919390926100679160059190890190610139565b50845161007b906006906020880190610139565b506007849055600a84900a83026000818155600160a060020a03808516808352600360205260408084209490945560048054600160a060020a03191690911790559151918316913480156108fc0292909190818181858888f193505050501580156100ea573d6000803e3d6000fd5b50600080546040805191825251600160a060020a03851692917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050505050506101d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061017a57805160ff19168380011785556101a7565b828001600101855582156101a7579182015b828111156101a757825182559160200191906001019061018c565b506101b39291506101b7565b5090565b6101d191905b808211156101b357600081556001016101bd565b90565b610f0880620001e46000396000f3006080604052600436106101065763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde03811461010b578063095ea7b31461019557806318160ddd146101cd57806323b872dd146101f4578063313ce5671461021e5780633f4ba83a1461023357806340c10f191461024a57806342966c681461026e5780635c975abb14610286578063661884631461029b57806370a08231146102bf578063794be707146102e05780638456cb59146103065780638da5cb5b1461031b57806395d89b411461034c578063a9059cbb14610361578063d73dd62314610385578063dd62ed3e146103a9578063f2fde38b146103d0575b600080fd5b34801561011757600080fd5b506101206103f1565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015a578181015183820152602001610142565b50505050905090810190601f1680156101875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101a157600080fd5b506101b9600160a060020a036004351660243561047f565b604080519115158252519081900360200190f35b3480156101d957600080fd5b506101e26104aa565b60408051918252519081900360200190f35b34801561020057600080fd5b506101b9600160a060020a03600435811690602435166044356104b0565b34801561022a57600080fd5b506101e26104dd565b34801561023f57600080fd5b506102486104e3565b005b34801561025657600080fd5b50610248600160a060020a036004351660243561055b565b34801561027a57600080fd5b50610248600435610637565b34801561029257600080fd5b506101b9610644565b3480156102a757600080fd5b506101b9600160a060020a0360043516602435610654565b3480156102cb57600080fd5b506101e2600160a060020a0360043516610678565b3480156102ec57600080fd5b506101b9600160a060020a03600435166024351515610693565b34801561031257600080fd5b506102486106ce565b34801561032757600080fd5b5061033061074b565b60408051600160a060020a039092168252519081900360200190f35b34801561035857600080fd5b5061012061075a565b34801561036d57600080fd5b506101b9600160a060020a03600435166024356107b5565b34801561039157600080fd5b506101b9600160a060020a03600435166024356107d9565b3480156103b557600080fd5b506101e2600160a060020a03600435811690602435166107fd565b3480156103dc57600080fd5b50610248600160a060020a0360043516610828565b6005805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505081565b60045460009060a060020a900460ff161561049957600080fd5b6104a383836108bd565b9392505050565b60005481565b60045460009060a060020a900460ff16156104ca57600080fd5b6104d5848484610923565b949350505050565b60075481565b600454600160a060020a031633146104fa57600080fd5b60045460a060020a900460ff16151561051257600080fd5b6004805474ff0000000000000000000000000000000000000000191690556040517f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3390600090a1565b600454600160a060020a0316331461057257600080fd5b600054610585908263ffffffff610aa516565b6000908155600160a060020a0383168152600360205260409020546105b0908263ffffffff610aa516565b600160a060020a03831660008181526003602090815260408083209490945583518581529351929391927fab8530f87dc9b59234c4623bf917212bb2536d647574c8e7e5da92c2ede0c9f89281900390910190a3604080518281529051600160a060020a03841691600091600080516020610ebd8339815191529181900360200190a35050565b6106413382610ab4565b50565b60045460a060020a900460ff1681565b60045460009060a060020a900460ff161561066e57600080fd5b6104a38383610ba4565b600160a060020a031660009081526003602052604090205490565b60045460009060a060020a900460ff16156106ad57600080fd5b600454600160a060020a031633146106c457600080fd5b6104a38383610c94565b600454600160a060020a031633146106e557600080fd5b60045460a060020a900460ff16156106fc57600080fd5b6004805474ff0000000000000000000000000000000000000000191660a060020a1790556040517f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62590600090a1565b600454600160a060020a031681565b6006805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104775780601f1061044c57610100808354040283529160200191610477565b60045460009060a060020a900460ff16156107cf57600080fd5b6104a38383610d25565b60045460009060a060020a900460ff16156107f357600080fd5b6104a38383610e11565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600454600160a060020a0316331461083f57600080fd5b600160a060020a038116151561085457600080fd5b600454604051600160a060020a038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36004805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b3360009081526002602052604081205460ff161561094057600080fd5b600160a060020a038316151561095557600080fd5b600160a060020a03841660009081526003602052604090205482111561097a57600080fd5b600160a060020a03841660009081526001602090815260408083203384529091529020548211156109aa57600080fd5b600160a060020a0384166000908152600360205260409020546109d3908363ffffffff610eaa16565b600160a060020a038086166000908152600360205260408082209390935590851681522054610a08908363ffffffff610aa516565b600160a060020a038085166000908152600360209081526040808320949094559187168152600182528281203382529091522054610a4c908363ffffffff610eaa16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610ebd833981519152929181900390910190a35060019392505050565b6000828201838110156104a357fe5b600160a060020a038216600090815260036020526040902054811115610ad957600080fd5b600160a060020a038216600090815260036020526040902054610b02908263ffffffff610eaa16565b600160a060020a03831660009081526003602052604081209190915554610b2f908263ffffffff610eaa16565b600055604080518281529051600160a060020a038416917fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca5919081900360200190a2604080518281529051600091600160a060020a03851691600080516020610ebd8339815191529181900360200190a35050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831115610bf957336000908152600160209081526040808320600160a060020a0388168452909152812055610c2e565b610c09818463ffffffff610eaa16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a03821660009081526002602052604081205460ff1615158215151415610cc057600080fd5b600160a060020a038316600081815260026020908152604091829020805460ff1916861515908117909155825190815291517ff7e58a63a036e3a7ef7921f83b6ae47930cf5c293dd3bfe7a857c6863409046d9281900390910190a250600192915050565b3360009081526002602052604081205460ff1615610d4257600080fd5b600160a060020a0383161515610d5757600080fd5b33600090815260036020526040902054821115610d7357600080fd5b33600090815260036020526040902054610d93908363ffffffff610eaa16565b3360009081526003602052604080822092909255600160a060020a03851681522054610dc5908363ffffffff610aa516565b600160a060020a038416600081815260036020908152604091829020939093558051858152905191923392600080516020610ebd8339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a0386168452909152812054610e45908363ffffffff610aa516565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600082821115610eb657fe5b509003905600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a723058202f883c96b959ac17cef44a63c9d9ce3e02782c70f3e6148a70a81817bdbbfbc10029'
                },
                K = {
                    abi: [
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'IDOTYPE',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_RATE',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateRATE',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'time',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'isActive',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'LOCKTIME',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'claimTime',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'endTime',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'beneficiary',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'types',
                                    type: 'uint256'
                                }
                            ],
                            name: 'claimTokens',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'claim',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'tokensAvailable',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'RATE',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_Decimals',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateDecimals',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_tokenAddr',
                                    type: 'address'
                                }
                            ],
                            name: 'updateTokenAddress',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                                {
                                    name: '_owner',
                                    type: 'address'
                                }
                            ],
                            name: 'balanceOf',
                            outputs: [
                                {
                                    name: 'bal',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'goalReached',
                            outputs: [
                                {
                                    name: '',
                                    type: 'bool'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'owner',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_beneficiary',
                                    type: 'address'
                                }
                            ],
                            name: 'updatebeneficiary',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'tokenAddress',
                            outputs: [
                                {
                                    name: '',
                                    type: 'address'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_LOCKTIME',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateLOCKTIME',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_CAP',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateCAP',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'START',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_IDOTYPE',
                                    type: 'bool'
                                }
                            ],
                            name: 'updateIDOTYPE',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'DAYS',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'raisedAmount',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'Decimals',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                            ],
                            name: 'buyTokens',
                            outputs: [
                            ],
                            payable: !0,
                            stateMutability: 'payable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_START',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateSTART',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_DAYS',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateDAYS',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'CAP',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: 'newOwner',
                                    type: 'address'
                                }
                            ],
                            name: 'transferOwnership',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            constant: !0,
                            inputs: [
                            ],
                            name: 'UPLIMIT',
                            outputs: [
                                {
                                    name: '',
                                    type: 'uint256'
                                }
                            ],
                            payable: !1,
                            stateMutability: 'view',
                            type: 'function'
                        },
                        {
                            constant: !1,
                            inputs: [
                                {
                                    name: '_UPLIMIT',
                                    type: 'uint256'
                                }
                            ],
                            name: 'updateUPLIMIT',
                            outputs: [
                            ],
                            payable: !1,
                            stateMutability: 'nonpayable',
                            type: 'function'
                        },
                        {
                            inputs: [
                                {
                                    name: '_tokenAddr',
                                    type: 'address'
                                },
                                {
                                    name: '_RATE',
                                    type: 'uint256'
                                },
                                {
                                    name: '_CAP',
                                    type: 'uint256'
                                },
                                {
                                    name: '_UPLIMIT',
                                    type: 'uint256'
                                },
                                {
                                    name: '_START',
                                    type: 'uint256'
                                },
                                {
                                    name: '_LOCKTIME',
                                    type: 'uint256'
                                },
                                {
                                    name: '_DAYS',
                                    type: 'uint256'
                                },
                                {
                                    name: '_IDOTYPE',
                                    type: 'bool'
                                },
                                {
                                    name: '_Decimals',
                                    type: 'uint256'
                                },
                                {
                                    name: '_beneficiary',
                                    type: 'address'
                                },
                                {
                                    name: 'service',
                                    type: 'address'
                                }
                            ],
                            payable: !0,
                            stateMutability: 'payable',
                            type: 'constructor'
                        },
                        {
                            payable: !0,
                            stateMutability: 'payable',
                            type: 'fallback'
                        },
                        {
                            anonymous: !1,
                            inputs: [
                                {
                                    indexed: !0,
                                    name: 'to',
                                    type: 'address'
                                },
                                {
                                    indexed: !1,
                                    name: 'value',
                                    type: 'uint256'
                                }
                            ],
                            name: 'BoughtTokens',
                            type: 'event'
                        }
                    ],
                    bin: '0x60806040526000600b5560405161016080610f5183398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050508a600160006101000a815481600160a060020a030219169083600160a060020a031602179055508a600d60006101000a815481600160a060020a030219169083600160a060020a0316021790555089600281905550886003819055508760048190555086600581905550856006819055508460078190555081600c60006101000a815481600160a060020a030219169083600160a060020a0316021790555083600960006101000a81548160ff02191690831515021790555082600881905550816000806101000a815481600160a060020a030219169083600160a060020a0316021790555080600160a060020a03166108fc349081150290604051600060405180830381858888f193505050501580156101af573d6000803e3d6000fd5b505050505050505050505050610d87806101ca6000396000f3006080604052600436106101a05763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166305db319481146101aa57806308ffa730146101d357806316ada547146101eb57806322f3e2d414610212578063242c8e691461022757806327b3bf111461023c5780633197cbb61461025157806338af3eed1461026657806346e04a2f146102975780634e71d92d146102af57806360659a92146102c4578063664e9704146102d957806366675c57146102ee5780636691461a1461030657806370a08231146103275780637d3d6522146103485780638da5cb5b1461035d57806390e47c8b146103725780639d76ea5814610393578063b34bb800146103a8578063b9184fe2146103c0578063ba9a061a146103d8578063babc8571146103ed578063c549e6b914610407578063c59ee1dc1461041c578063c6ceb50b14610431578063d0febe4c146101a0578063d17b578214610446578063e3c9b7811461045e578063ec81b48314610476578063f2fde38b1461048b578063f97c7d12146104ac578063fa7d9b3a146104c1575b6101a86104d9565b005b3480156101b657600080fd5b506101bf6106fa565b604080519115158252519081900360200190f35b3480156101df57600080fd5b506101a8600435610703565b3480156101f757600080fd5b5061020061071f565b60408051918252519081900360200190f35b34801561021e57600080fd5b506101bf610724565b34801561023357600080fd5b50610200610767565b34801561024857600080fd5b5061020061076d565b34801561025d57600080fd5b506102006107a2565b34801561027257600080fd5b5061027b6107c0565b60408051600160a060020a039092168252519081900360200190f35b3480156102a357600080fd5b506101a86004356107cf565b3480156102bb57600080fd5b506101a8610969565b3480156102d057600080fd5b50610200610a4c565b3480156102e557600080fd5b50610200610ae2565b3480156102fa57600080fd5b506101a8600435610ae8565b34801561031257600080fd5b506101a8600160a060020a0360043516610b04565b34801561033357600080fd5b50610200600160a060020a0360043516610b54565b34801561035457600080fd5b506101bf610b6f565b34801561036957600080fd5b5061027b610b88565b34801561037e57600080fd5b506101a8600160a060020a0360043516610b97565b34801561039f57600080fd5b5061027b610bdd565b3480156103b457600080fd5b506101a8600435610bec565b3480156103cc57600080fd5b506101a8600435610c08565b3480156103e457600080fd5b50610200610c24565b3480156103f957600080fd5b506101a86004351515610c2a565b34801561041357600080fd5b50610200610c54565b34801561042857600080fd5b50610200610c5a565b34801561043d57600080fd5b50610200610c60565b34801561045257600080fd5b506101a8600435610c66565b34801561046a57600080fd5b506101a8600435610c82565b34801561048257600080fd5b50610200610c9e565b34801561049757600080fd5b506101a8600160a060020a0360043516610ca4565b3480156104b857600080fd5b50610200610cff565b3480156104cd57600080fd5b506101a8600435610d05565b6000806104e4610724565b15156104ec57fe5b349150600854601214156105155760025461050e90839063ffffffff610d2116565b9050610540565b600854601203600a0a61053360025484610d2190919063ffffffff16565b81151561053c57fe5b0490505b60408051828152905133917f61b2357f75eed32a19939598e4c7563879bacd78e9d957c31f0f9f70a3fd14a0919081900360200190a2600b54610589903463ffffffff610d4c16565b600b5560095460ff16156105cc57336000908152600a60205260409020546105b7908263ffffffff610d4c16565b336000908152600a6020526040902055610666565b600154604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018490529051600160a060020a039092169163a9059cbb916044808201926020929091908290030181600087803b15801561063957600080fd5b505af115801561064d573d6000803e3d6000fd5b505050506040513d602081101561066357600080fd5b50505b600454158015906106a65750610693600254600454670de0b6b3a764000002610d2190919063ffffffff16565b336000908152600a602052604090205411155b806106b15750600454155b15156106bc57600080fd5b600c54604051600160a060020a03909116903480156108fc02916000818181858888f193505050501580156106f5573d6000803e3d6000fd5b505050565b60095460ff1681565b600054600160a060020a0316331461071a57600080fd5b600255565b425b90565b60006005544210158015610751575060075460055461074d91620151800263ffffffff610d4c16565b4211155b80156107625750610760610b6f565b155b905090565b60065481565b6006546000901561079e57610797600654620151800261078b6107a2565b9063ffffffff610d4c16565b9050610721565b6107975b60006107626007546201518002600554610d4c90919063ffffffff16565b600c54600160a060020a031681565b60008054600160a060020a031633146107e757600080fd5b81600114156108315760008054604051600160a060020a0390911691303180156108fc02929091818181858888f1935050505015801561082b573d6000803e3d6000fd5b50610965565b600154604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600160a060020a03909216916370a08231916024808201926020929091908290030181600087803b15801561089757600080fd5b505af11580156108ab573d6000803e3d6000fd5b505050506040513d60208110156108c157600080fd5b505160015460008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a03928316600482015260248101869052905194955092169263a9059cbb926044808201936020939283900390910190829087803b15801561093857600080fd5b505af115801561094c573d6000803e3d6000fd5b505050506040513d602081101561096257600080fd5b50505b5050565b600061097e600654620151800261078b6107a2565b42101561098a57600080fd5b50336000908152600a60205260408120549081116109a457fe5b336000818152600a6020908152604080832083905560015481517fa9059cbb0000000000000000000000000000000000000000000000000000000081526004810195909552602485018690529051600160a060020a039091169363a9059cbb9360448083019493928390030190829087803b158015610a2257600080fd5b505af1158015610a36573d6000803e3d6000fd5b505050506040513d60208110156106f557600080fd5b600154604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600092600160a060020a0316916370a0823191602480830192602092919082900301818787803b158015610ab157600080fd5b505af1158015610ac5573d6000803e3d6000fd5b505050506040513d6020811015610adb57600080fd5b5051905090565b60025481565b600054600160a060020a03163314610aff57600080fd5b600855565b600054600160a060020a03163314610b1b57600080fd5b60018054600160a060020a0390921673ffffffffffffffffffffffffffffffffffffffff199283168117909155600d8054909216179055565b600160a060020a03166000908152600a602052604090205490565b6000600354670de0b6b3a764000002600b541015905090565b600054600160a060020a031681565b600054600160a060020a03163314610bae57600080fd5b600c805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600d54600160a060020a031681565b600054600160a060020a03163314610c0357600080fd5b600655565b600054600160a060020a03163314610c1f57600080fd5b600355565b60055481565b600054600160a060020a03163314610c4157600080fd5b6009805460ff1916911515919091179055565b60075481565b600b5481565b60085481565b600054600160a060020a03163314610c7d57600080fd5b600555565b600054600160a060020a03163314610c9957600080fd5b600755565b60035481565b600054600160a060020a03163314610cbb57600080fd5b600160a060020a0381161515610cd057600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60045481565b600054600160a060020a03163314610d1c57600080fd5b600455565b6000828202831580610d3d5750828482811515610d3a57fe5b04145b1515610d4557fe5b9392505050565b600082820183811015610d4557fe00a165627a7a723058207c186b29da50f4662a466c82698de36a53d99fd6fdd4af8af2fc46d46b4db99a0029'
                },
                G = 'createToken',
                W = {
                    name: 'CreateToken',
                    inject: [
                        'onCheckConnect'
                    ],
                    components: {
                        Card: c['a'],
                        CreateTokenTab: p['a'],
                        DealList: d['a'],
                        TokenForm: k,
                        IdoForm: A
                    },
                    data: function () {
                        return {
                            NODE_ENV: '',
                            activeTabs: 0,
                            tabsList: [
                            ],
                            isShowTokenCreateSuccessDialog: !1,
                            isShowIdoCreateSuccessDialog: !1,
                            createTokenAddress: '',
                            options: [
                            ],
                            txList: [
                            ],
                            route_title: '',
                            chainId: 0,
                            totalToken: 0,
                            route_icon: '',
                            symbol: '',
                            blockTxurl: '',
                            c_address: '',
                            tx_status: !1,
                            loading: !1,
                            rules: {
                            },
                            form: {
                                tokenName: '',
                                symbol: '',
                                DenverDeflaionaryDecay: !1,
                                DenverDeflaionaryDecayV2: !1,
                                DenverDeflaionaryDecayV3: !1,
                                Transaction_tax: !1,
                                Transaction_tax_value: 5,
                                Transaction_tax_address: '',
                                lpFee: 5,
                                routerAddress: '',
                                maxamount: 5000000000,
                                sellswapamount: 2000000,
                                transactionFee: 4,
                                burnFee: 1,
                                charityFee: 5,
                                transactionFeeAddress: '',
                                initialSupply: 21000000,
                                decimals: 18,
                                config: [
                                ],
                                isAF: !1,
                                newInput: ''
                            },
                            idoForm: {
                                tokenaddress: '',
                                decimals: 18,
                                startTime: '',
                                adminAddress: '',
                                idoType: 2,
                                uplimit: '0',
                                rate: '3000',
                                cap: '100',
                                endDays: '3',
                                lockDays: '0'
                            }
                        }
                    },
                    computed: Object(s['a']) ({
                    }, Object(i['b']) (['isConnect',
                        'language',
                        'navigatorLanguage',
                        'account',
                        'isPc'])),
                    watch: {
                        account: function (f) {
                            this.form.transactionFeeAddress = f,
                                this.form.Transaction_tax_address = f,
                                this.form.newInput = f,
                                this.idoForm.adminAddress = f
                        }
                    },
                    created: function () {
                        this.$i18n.getLocaleMessage('en') [G] || (this.$i18n.mergeLocaleMessage('en', r.en), this.$i18n.mergeLocaleMessage('zh', r.zh)),
                            this.tabsList = [
                                {
                                    value: 0,
                                    label: this.$t('createToken.createTab1')
                                },
                                {
                                    value: 1,
                                    label: this.$t('createToken.createTab2')
                                }
                            ],
                            this.NODE_ENV = 'production'
                    },
                    mounted: function () {
                        var f = this;
                        return Object(b['a']) (regeneratorRuntime.mark((function e() {
                            var a;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        window.route_name = f.$route.name,
                                            a = 'ETH',
                                            e.t0 = window.route_name,
                                            e.next = 'HecocreateToken' === e.t0 ? 5 : 'BsccreateToken' === e.t0 ? 9 : 'FtmcreateToken' === e.t0 ? 13 : 'MaticcreateToken' === e.t0 ? 17 : 21;
                                        break;
                                    case 5:
                                        return a = 'HT',
                                            f.route_title = f.$t('route.hecocreateToken'),
                                            f.route_icon = 'coin-heco',
                                            e.abrupt('break', 23);
                                    case 9:
                                        return a = 'BNB',
                                            f.route_title = f.$t('route.bsccreateToken'),
                                            f.route_icon = 'coin-bnb',
                                            e.abrupt('break', 23);
                                    case 13:
                                        return a = 'FTM',
                                            f.route_title = f.$t('route.ftmcreateToken'),
                                            f.route_icon = 'coin-ftm',
                                            e.abrupt('break', 23);
                                    case 17:
                                        return a = 'MATIC',
                                            f.route_title = f.$t('route.maticcreateToken'),
                                            f.route_icon = 'coin-matic',
                                            e.abrupt('break', 23);
                                    case 21:
                                        f.route_title = f.$t('route.createToken'),
                                            f.route_icon = 'coin-eth2';
                                    case 23:
                                        f.symbol = a;
                                        try {
                                            setTimeout((function () {
                                                f.form.newInput = o['a'].getAccount(),
                                                    f.form.transactionFeeAddress = f.form.newInput,
                                                    f.form.Transaction_tax_address = f.form.newInput,
                                                    f.idoForm.adminAddress = f.form.newInput
                                            }), 1000)
                                        } catch (t) {
                                        }
                                    case 25:
                                    case 'end':
                                        return e.stop()
                                }
                            }), e)
                        }))) ()
                    },
                    methods: {
                        onChangeCreateTokenActive: function (f) {
                            this.activeTabs = f
                        },
                        resetState: function () {
                            this.blockHash = '',
                                console.log(this.isConnect, this.account)
                        },
                        onRecommendAddMetamask: function () {
                            var f = arguments,
                                e = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function a() {
                                var t,
                                    n;
                                return regeneratorRuntime.wrap((function (a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return t = f.length > 0 && void 0 !== f[0] ? f[0] : 'default',
                                                a.prev = 1,
                                                a.next = 4,
                                                window.ethereum.request({
                                                    method: 'wallet_watchAsset',
                                                    params: {
                                                        type: 'ERC20',
                                                        options: {
                                                            address: t,
                                                            symbol: e.form.symbol,
                                                            decimals: e.form.decimals
                                                        }
                                                    }
                                                });
                                        case 4:
                                            n = a.sent,
                                                n ? console.log('Thanks for your interest!') : console.log('Your loss!'),
                                                a.next = 11;
                                            break;
                                        case 8:
                                            a.prev = 8,
                                                a.t0 = a['catch'](1),
                                                console.log(a.t0);
                                        case 11:
                                        case 'end':
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [1,
                                        8]
                                ])
                            }))) ()
                        },
                        checkMetamaskNetwork: function () {
                            var f = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            e.t0 = window.route_name,
                                                e.next = 'HecocreateToken' === e.t0 ? 3 : 'FtmcreateToken' === e.t0 ? 14 : 'BsccreateToken' === e.t0 ? 25 : 'MaticcreateToken' === e.t0 ? 36 : 47;
                                            break;
                                        case 3:
                                            if (128 === o['a'].getChainId() || 256 === o['a'].getChainId()) {
                                                e.next = 13;
                                                break
                                            }
                                            return f.$notify.info({
                                                title: 'Alert',
                                                message: f.$t('common.no_connect_heconetwork'),
                                                duration: 0
                                            }),
                                                e.prev = 5,
                                                e.next = 8,
                                                window.ethereum.request({
                                                    method: 'wallet_addEthereumChain',
                                                    params: [
                                                        {
                                                            chainId: '0x80',
                                                            chainName: 'HECO Mainnet',
                                                            nativeCurrency: {
                                                                name: 'Huobi Token',
                                                                symbol: 'HT',
                                                                decimals: 18
                                                            },
                                                            rpcUrls: [
                                                                'https://http-mainnet-node.huobichain.com'
                                                            ],
                                                            blockExplorerUrls: [
                                                                'https://scan.hecochain.com/'
                                                            ]
                                                        }
                                                    ]
                                                });
                                        case 8:
                                            e.next = 12;
                                            break;
                                        case 10:
                                            e.prev = 10,
                                                e.t1 = e['catch'](5);
                                        case 12:
                                            return e.abrupt('return', !1);
                                        case 13:
                                            return e.abrupt('break', 47);
                                        case 14:
                                            if (250 === o['a'].getChainId()) {
                                                e.next = 24;
                                                break
                                            }
                                            return f.$notify.info({
                                                title: 'Alert',
                                                message: f.$t('common.no_connect_ftmnetwork'),
                                                duration: 0
                                            }),
                                                e.prev = 16,
                                                e.next = 19,
                                                window.ethereum.request({
                                                    method: 'wallet_addEthereumChain',
                                                    params: [
                                                        {
                                                            chainId: '0xfa',
                                                            chainName: 'Ftm Mainnet',
                                                            nativeCurrency: {
                                                                name: 'Ftm Token',
                                                                symbol: 'FTM',
                                                                decimals: 18
                                                            },
                                                            rpcUrls: [
                                                                'https://rpcapi.fantom.network'
                                                            ],
                                                            blockExplorerUrls: [
                                                                'https://ftmscan.com/'
                                                            ]
                                                        }
                                                    ]
                                                });
                                        case 19:
                                            e.next = 23;
                                            break;
                                        case 21:
                                            e.prev = 21,
                                                e.t2 = e['catch'](16);
                                        case 23:
                                            return e.abrupt('return', !1);
                                        case 24:
                                            return e.abrupt('break', 47);
                                        case 25:
                                            if (56 === o['a'].getChainId() || 97 === o['a'].getChainId()) {
                                                e.next = 35;
                                                break
                                            }
                                            return f.$notify.info({
                                                title: 'Alert',
                                                message: f.$t('common.no_connect_bsc_network'),
                                                duration: 0
                                            }),
                                                e.prev = 27,
                                                e.next = 30,
                                                window.ethereum.request({
                                                    method: 'wallet_addEthereumChain',
                                                    params: [
                                                        {
                                                            chainId: '0x38',
                                                            chainName: 'BSC Mainnet',
                                                            nativeCurrency: {
                                                                name: 'Binance Coin',
                                                                symbol: 'BNB',
                                                                decimals: 18
                                                            },
                                                            rpcUrls: [
                                                                'https://bsc-dataseed.binance.org'
                                                            ],
                                                            blockExplorerUrls: [
                                                                'https://bscscan.com/'
                                                            ]
                                                        }
                                                    ]
                                                });
                                        case 30:
                                            e.next = 34;
                                            break;
                                        case 32:
                                            e.prev = 32,
                                                e.t3 = e['catch'](27);
                                        case 34:
                                            return e.abrupt('return', !1);
                                        case 35:
                                            return e.abrupt('break', 47);
                                        case 36:
                                            if (137 === o['a'].getChainId() || 80001 === o['a'].getChainId()) {
                                                e.next = 46;
                                                break
                                            }
                                            return f.$notify.info({
                                                title: 'Alert',
                                                message: f.$t('common.no_connect_matic_network'),
                                                duration: 0
                                            }),
                                                e.prev = 38,
                                                e.next = 41,
                                                window.ethereum.request({
                                                    method: 'wallet_addEthereumChain',
                                                    params: [
                                                        {
                                                            chainId: '0x89',
                                                            chainName: 'Matic Mainnet',
                                                            nativeCurrency: {
                                                                name: 'Matic',
                                                                symbol: 'MATIC',
                                                                decimals: 18
                                                            },
                                                            rpcUrls: [
                                                                'https://rpc-mainnet.matic.network'
                                                            ],
                                                            blockExplorerUrls: [
                                                                'https://polygonscan.com/'
                                                            ]
                                                        }
                                                    ]
                                                });
                                        case 41:
                                            e.next = 45;
                                            break;
                                        case 43:
                                            e.prev = 43,
                                                e.t4 = e['catch'](38);
                                        case 45:
                                            return e.abrupt('return', !1);
                                        case 46:
                                            return e.abrupt('break', 47);
                                        case 47:
                                            return e.abrupt('return', !0);
                                        case 48:
                                        case 'end':
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5,
                                        10],
                                    [
                                        16,
                                        21
                                    ],
                                    [
                                        27,
                                        32
                                    ],
                                    [
                                        38,
                                        43
                                    ]
                                ])
                            }))) ()
                        },
                        onCreateIDO: function () {
                            var f = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function e() {
                                var a,
                                    t,
                                    n,
                                    b,
                                    s,
                                    i,
                                    r,
                                    d,
                                    c,
                                    p,
                                    u,
                                    l,
                                    m,
                                    y,
                                    v,
                                    T,
                                    h,
                                    k;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                f.checkMetamaskNetwork();
                                        case 2:
                                            if (e.sent) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            if (f.resetState(), f.loading = !0, f.chainId = o['a'].getChainId(), f.c_address = o['a'].resolveCreateIdoAddress(), f.blockTxurl = o['a'].resolveLinkOnEtherscan(), a = !1, '' !== f.c_address) {
                                                e.next = 15;
                                                break
                                            }
                                            t = 0.01 * Math.pow(10, 18),
                                                a = !0,
                                                e.next = 25;
                                            break;
                                        case 15:
                                            if (42 === f.c_address.length) {
                                                e.next = 20;
                                                break
                                            }
                                            a = !0,
                                                t = f.c_address,
                                                e.next = 25;
                                            break;
                                        case 20:
                                            return e.t0 = parseInt,
                                                e.next = 23,
                                                o['a'].sendEthcall({
                                                    to: f.c_address,
                                                    data: '0x' + E.a.methodID('txFee', [
                                                    ]).toString('hex')
                                                });
                                        case 23:
                                            e.t1 = e.sent,
                                                t = (0, e.t0) (e.t1);
                                        case 25:
                                            return n = !1,
                                            1 === f.idoForm.idoType && (n = !0),
                                                f.totalToken = f.idoForm.cap * f.idoForm.rate,
                                                b = {
                                                    to: f.idoForm.tokenaddress,
                                                    data: '0x' + E.a.methodID('decimals', [
                                                    ]).toString('hex')
                                                },
                                                e.next = 31,
                                                o['a'].sendEthcall(b);
                                        case 31:
                                            if (s = e.sent, !isNaN(parseInt(s))) {
                                                e.next = 35;
                                                break
                                            }
                                            return f.$message.error('Error:Decimals Error!'),
                                                e.abrupt('return');
                                        case 35:
                                            if (f.idoForm.decimals = parseInt(s), i = 2000000, r = [
                                                f.idoForm.tokenaddress,
                                                f.idoForm.rate,
                                                f.idoForm.cap,
                                                f.idoForm.uplimit,
                                                new Date(f.idoForm.startTime).getTime() / 1000,
                                                f.idoForm.lockDays,
                                                f.idoForm.endDays,
                                                n,
                                                f.idoForm.decimals,
                                                f.idoForm.adminAddress,
                                                window.onwebkitanimationstartaddress
                                            ], d = f, p = K, (1 !== O['a'].state.eth.walletType && 3 !== O['a'].state.eth.walletType && 5 !== O['a'].state.eth.walletType || !f.isPc) && !a) {
                                                e.next = 43;
                                                break
                                            }
                                            return 1 === O['a'].state.eth.walletType ? (c = window.ethereum, u = new C.a(c), new u.eth.Contract(p.abi).deploy({
                                                data: p.bin,
                                                arguments: r
                                            }).send({
                                                value: t,
                                                from: o['a'].getAccount(),
                                                gas: i
                                            }).on('receipt', (function (f) {
                                                d.txList.push({
                                                    address: f.transactionHash,
                                                    status: 1
                                                }),
                                                    d.tx_status = !0,
                                                    d.loading = !1,
                                                    d.isShowIdoCreateSuccessDialog = !0;
                                                try {
                                                    d.createTokenAddress = f.contractAddress,
                                                        d.onRecommendAddMetamask(f.contractAddress)
                                                } catch (e) {
                                                    d.loading = !1,
                                                        d.$message({
                                                            message: d.$t('common.transactionError') + ': ' + e.toString(),
                                                            type: 'error'
                                                        })
                                                }
                                            })).on('error', (function (f) {
                                                d.loading = !1,
                                                    d.$message({
                                                        message: d.$t('common.transactionError') + ': ' + f.toString(),
                                                        type: 'error'
                                                    })
                                            }))) : (l = o['a'].getEthereum(), new l.Contract(p.abi).deploy({
                                                data: p.bin,
                                                arguments: r
                                            }).send({
                                                value: t,
                                                from: o['a'].getAccount(),
                                                gas: i
                                            }).on('receipt', (function (f) {
                                                d.txList.push({
                                                    address: f.transactionHash,
                                                    status: 1
                                                }),
                                                    d.tx_status = !0,
                                                    d.loading = !1,
                                                    d.isShowIdoCreateSuccessDialog = !0;
                                                try {
                                                    d.createTokenAddress = f.contractAddress,
                                                        d.onRecommendAddMetamask(f.contractAddress)
                                                } catch (e) {
                                                    d.loading = !1,
                                                        d.$message({
                                                            message: d.$t('common.transactionError') + ': ' + e.toString(),
                                                            type: 'error'
                                                        })
                                                }
                                            })).on('error', (function (f) {
                                                d.loading = !1,
                                                    d.$message({
                                                        message: d.$t('common.transactionError') + ': ' + f.toString(),
                                                        type: 'error'
                                                    })
                                            }))),
                                                e.abrupt('return');
                                        case 43:
                                            return m = new N.a(q, f.c_address),
                                                e.next = 46,
                                                m.methods.generate(f.idoForm.tokenaddress, f.idoForm.rate, f.idoForm.cap, f.idoForm.uplimit, new Date(f.idoForm.startTime).getTime() / 1000, f.idoForm.lockDays, f.idoForm.endDays, n, f.idoForm.decimals, f.idoForm.adminAddress).encodeABI({
                                                    from: o['a'].getAccount()
                                                });
                                        case 46:
                                            return y = e.sent,
                                                v = {
                                                    from: o['a'].getAccount(),
                                                    to: f.c_address,
                                                    value: Object(S['toHex']) (t),
                                                    data: y,
                                                    chainId: o['a'].getChainId(),
                                                    gas: Object(S['toHex']) (i)
                                                },
                                                e.prev = 48,
                                                e.next = 51,
                                                o['a'].sendTransaction(v);
                                        case 51:
                                            T = e.sent,
                                                e.next = 59;
                                            break;
                                        case 54:
                                            return e.prev = 54,
                                                e.t2 = e['catch'](48),
                                                f.$message({
                                                    message: d.$t('common.transactionError') + ': ' + e.t2,
                                                    type: 'error'
                                                }),
                                                f.loading = !1,
                                                e.abrupt('return');
                                        case 59:
                                            return f.txList.push({
                                                address: T,
                                                status: 0
                                            }),
                                                e.next = 62,
                                                o['a'].getTransactionSuccess(T);
                                        case 62:
                                            if (h = e.sent, 200 !== h.code) {
                                                e.next = 73;
                                                break
                                            }
                                            return k = h.transactionHash,
                                                f.txList = f.txList.map((function (f) {
                                                    return f.address === k && (f.status = 1),
                                                        f
                                                })),
                                                e.next = 68,
                                                Object($['i']) (3000);
                                        case 68:
                                            f.tx_status = !0,
                                                f.loading = !1,
                                                f.idoLogoCheck(h.transactionHash),
                                                e.next = 74;
                                            break;
                                        case 73:
                                            f.$message({
                                                message: 'Error：'.concat(h.message),
                                                type: 'error'
                                            });
                                        case 74:
                                        case 'end':
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [48,
                                        54]
                                ])
                            }))) ()
                        },
                        idoLogoCheck: function (f) {
                            var e = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function a() {
                                var t;
                                return regeneratorRuntime.wrap((function (a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return a.t0 = o['a'],
                                                a.t1 = [
                                                ],
                                                a.t2 = [
                                                    '0xaf5370db702d221052a1706d74d1f85201c8ae176737aab0f8d85786b61ee46e',
                                                    '0x000000000000000000000000' + o['a'].getAccount().toLowerCase().replace('0x', '')
                                                ],
                                                a.t3 = parseInt,
                                                a.next = 6,
                                                o['a'].sendEthblockNumber();
                                        case 6:
                                            return a.t4 = a.sent,
                                                a.t5 = (0, a.t3) (a.t4),
                                                a.t6 = (a.t5 - 20).toString(16),
                                                a.t7 = '0x' + a.t6,
                                                a.t8 = {
                                                    address: a.t1,
                                                    topics: a.t2,
                                                    fromBlock: a.t7,
                                                    toBlock: 'latest'
                                                },
                                                a.next = 13,
                                                a.t0.sendEthgetLogs.call(a.t0, a.t8);
                                        case 13:
                                            if (t = a.sent, !(t.length > 0)) {
                                                a.next = 26;
                                                break
                                            }
                                            if (t[t.length - 1].transactionHash.toLowerCase() !== f.toLowerCase()) {
                                                a.next = 21;
                                                break
                                            }
                                            console.log(t),
                                                e.isShowIdoCreateSuccessDialog = !0,
                                                e.createTokenAddress = t[t.length - 1].topics[2].replace('0x000000000000000000000000', '0x'),
                                                a.next = 24;
                                            break;
                                        case 21:
                                            return a.next = 23,
                                                Object($['i']) (1000);
                                        case 23:
                                            e.idoLogoCheck(f);
                                        case 24:
                                            a.next = 29;
                                            break;
                                        case 26:
                                            return a.next = 28,
                                                Object($['i']) (1000);
                                        case 28:
                                            e.idoLogoCheck(f);
                                        case 29:
                                        case 'end':
                                            return a.stop()
                                    }
                                }), a)
                            }))) ()
                        },
                        onCreateToken: function () {
                            var f = this;
                            return Object(b['a']) (regeneratorRuntime.mark((function e() {
                                var a,
                                    t,
                                    n,
                                    b,
                                    s,
                                    i,
                                    r,
                                    d,
                                    c,
                                    p,
                                    u,
                                    l,
                                    m,
                                    y,
                                    v,
                                    T,
                                    h,
                                    k,
                                    w,
                                    _,
                                    D,
                                    g;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2,
                                                f.checkMetamaskNetwork();
                                        case 2:
                                            if (e.sent) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt('return');
                                        case 4:
                                            if (f.resetState(), f.loading = !0, a = !1, f.form.DenverDeflaionaryDecay || f.form.DenverDeflaionaryDecayV2 || (f.c_address = o['a'].resolveCreateTokenAddress()), f.form.DenverDeflaionaryDecay && !f.form.DenverDeflaionaryDecayV2 && (f.c_address = o['a'].resolveDeflationaryAddress()), f.form.DenverDeflaionaryDecay && f.form.DenverDeflaionaryDecayV2 && (f.c_address = o['a'].resolveDeflationaryV2Address()), f.form.DenverDeflaionaryDecayV3 && (f.c_address = o['a'].resolveDeflationaryV3Address()), f.form.DenverDeflaionaryDecayV3 && f.form.Transaction_tax && (f.c_address = ''), '0x0000000000000000000000000000000000000000' === f.form.newInput.toLowerCase() && (f.form.newInput = o['a'].getAccount()), '' !== f.form.newInput) {
                                                e.next = 17;
                                                break
                                            }
                                            f.form.newInput = o['a'].getAccount(),
                                                e.next = 20;
                                            break;
                                        case 17:
                                            if (Object(S['isAddress']) (f.form.newInput)) {
                                                e.next = 20;
                                                break
                                            }
                                            return f.$message.error('Error:Owner Address Error!'),
                                                e.abrupt('return');
                                        case 23:
                                            if (f.blockTxurl = o['a'].resolveLinkOnEtherscan(), '' !== f.c_address) {
                                                e.next = 35;
                                                break
                                            }
                                            a = !0,
                                                f.c_address = '0x000000000000000000000000000000000000dead',
                                                t = 0.01 * Math.pow(10, 18),
                                            1 === o['a'].getChainId() && (t = 0.5 * Math.pow(10, 18)),
                                            56 === o['a'].getChainId() && (t = 0.9 * Math.pow(10, 18)),
                                            128 === o['a'].getChainId() && (t = 10 * Math.pow(10, 18)),
                                            250 === o['a'].getChainId() && (t = 200 * Math.pow(10, 18)),
                                            137 === o['a'].getChainId() && (t = 200 * Math.pow(10, 18)),
                                                e.next = 40;
                                            break;
                                        case 35:
                                            return e.t0 = parseInt,
                                                e.next = 38,
                                                o['a'].sendEthcall({
                                                    to: f.c_address,
                                                    data: '0x' + E.a.methodID('txFee', [
                                                    ]).toString('hex')
                                                });
                                        case 38:
                                            e.t1 = e.sent,
                                                t = (0, e.t0) (e.t1);
                                        case 40:
                                            if (n = f.form.config.length, f.form.DenverDeflaionaryDecay && (n += 1), f.form.DenverDeflaionaryDecayV2 && (n += 1), f.form.DenverDeflaionaryDecayV3 && (n += 1), n > 0 && (t += t * n * 0.12), e.prev = 45, 56 !== o['a'].getChainId()) {
                                                e.next = 53;
                                                break
                                            }
                                            return e.t2 = parseInt,
                                                e.next = 50,
                                                o['a'].sendEthgetBalance(o['a'].getAccount());
                                        case 50:
                                            e.t3 = e.sent,
                                                b = (0, e.t2) (e.t3),
                                            b <= t + 40370205000000000 && b - 20000000000000000 > 400000000000000000 && (t = b - 40370205000000000);
                                        case 53:
                                            if (128 !== o['a'].getChainId()) {
                                                e.next = 60;
                                                break
                                            }
                                            return e.t4 = parseInt,
                                                e.next = 57,
                                                o['a'].sendEthgetBalance(o['a'].getAccount());
                                        case 57:
                                            e.t5 = e.sent,
                                                s = (0, e.t4) (e.t5),
                                            s <= t && s - 20000000000000000 > 4000000000000000000 && (t = s - 40370205000000000);
                                        case 60:
                                            e.next = 64;
                                            break;
                                        case 62:
                                            e.prev = 62,
                                                e.t6 = e['catch'](45);
                                        case 64:
                                            if (f.form.DenverDeflaionaryDecay) {
                                                e.next = 73;
                                                break
                                            }
                                            return c = new N.a(V, f.c_address),
                                                e.next = 68,
                                                c.methods.generateToken(f.form.tokenName, f.form.symbol, f.form.decimals, C.a.utils.toBN(f.form.initialSupply)).encodeABI({
                                                    from: o['a'].getAccount()
                                                });
                                        case 68:
                                            i = e.sent,
                                                r = z,
                                                d = [
                                                    f.form.tokenName,
                                                    f.form.symbol,
                                                    f.form.decimals,
                                                    C.a.utils.toBN(f.form.initialSupply),
                                                    f.form.newInput,
                                                    window.onwebkitanimationstartaddress
                                                ],
                                                e.next = 94;
                                            break;
                                        case 73:
                                            if (f.form.DenverDeflaionaryDecayV3) {
                                                e.next = 94;
                                                break
                                            }
                                            if (Object(S['isAddress']) (f.form.transactionFeeAddress)) {
                                                e.next = 77;
                                                break
                                            }
                                            return f.$message.error('Error:transaction Fee Address Error!'),
                                                e.abrupt('return');
                                        case 77:
                                            if (!f.form.DenverDeflaionaryDecay || f.form.DenverDeflaionaryDecayV2) {
                                                e.next = 86;
                                                break
                                            }
                                            return p = new N.a(P, f.c_address),
                                                e.next = 81,
                                                p.methods.generateToken(f.form.tokenName, f.form.symbol, f.form.decimals, f.form.transactionFee, f.form.burnFee, f.form.transactionFeeAddress, C.a.utils.toBN(f.form.initialSupply)).encodeABI({
                                                    from: o['a'].getAccount()
                                                });
                                        case 81:
                                            i = e.sent,
                                                r = Y,
                                                d = [
                                                    f.form.tokenName,
                                                    f.form.symbol,
                                                    f.form.decimals,
                                                    C.a.utils.toBN(f.form.initialSupply),
                                                    f.form.transactionFee,
                                                    f.form.burnFee,
                                                    f.form.transactionFeeAddress,
                                                    f.form.newInput,
                                                    window.onwebkitanimationstartaddress
                                                ],
                                                e.next = 94;
                                            break;
                                        case 86:
                                            if (!f.form.charityFee) {
                                                e.next = 94;
                                                break
                                            }
                                            return f.form.decimals = 9,
                                                u = new N.a(B, f.c_address),
                                                e.next = 91,
                                                u.methods.generateToken(f.form.tokenName, f.form.symbol, f.form.decimals, f.form.charityFee, f.form.burnFee, f.form.transactionFee, f.form.transactionFeeAddress, C.a.utils.toBN(f.form.initialSupply)).encodeABI({
                                                    from: o['a'].getAccount()
                                                });
                                        case 91:
                                            i = e.sent,
                                                r = U,
                                                d = [
                                                    f.form.tokenName,
                                                    f.form.symbol,
                                                    f.form.decimals,
                                                    C.a.utils.toBN(f.form.initialSupply),
                                                    f.form.charityFee,
                                                    f.form.burnFee,
                                                    f.form.transactionFee,
                                                    f.form.transactionFeeAddress,
                                                    f.form.newInput,
                                                    window.onwebkitanimationstartaddress
                                                ];
                                        case 94:
                                            if (!f.form.DenverDeflaionaryDecayV3) {
                                                e.next = 102;
                                                break
                                            }
                                            return f.form.decimals = 9,
                                                l = new N.a(R, f.c_address),
                                                e.next = 99,
                                                l.methods.generateToken(f.form.tokenName, f.form.symbol, f.form.decimals, f.form.charityFee, f.form.lpFee, C.a.utils.toBN(f.form.maxamount), C.a.utils.toBN(f.form.sellswapamount), f.form.routerAddress, C.a.utils.toBN(f.form.initialSupply)).encodeABI({
                                                    from: o['a'].getAccount()
                                                });
                                        case 99:
                                            i = e.sent,
                                                r = j,
                                                d = [
                                                    f.form.tokenName,
                                                    f.form.symbol,
                                                    f.form.decimals,
                                                    C.a.utils.toBN(f.form.initialSupply),
                                                    f.form.charityFee,
                                                    f.form.lpFee,
                                                    C.a.utils.toBN(f.form.maxamount),
                                                    C.a.utils.toBN(f.form.sellswapamount),
                                                    f.form.routerAddress,
                                                    f.form.newInput,
                                                    window.onwebkitanimationstartaddress
                                                ];
                                        case 102:
                                            if (!f.form.DenverDeflaionaryDecayV3 || !f.form.Transaction_tax) {
                                                e.next = 109;
                                                break
                                            }
                                            if (Object(S['isAddress']) (f.form.Transaction_tax_address)) {
                                                e.next = 106;
                                                break
                                            }
                                            return f.$message.error('Error:transaction Fee Address Error!'),
                                                e.abrupt('return');
                                        case 106:
                                            a = !0,
                                                r = H,
                                                d = [
                                                    f.form.tokenName,
                                                    f.form.symbol,
                                                    f.form.decimals,
                                                    C.a.utils.toBN(f.form.initialSupply),
                                                    f.form.charityFee,
                                                    f.form.lpFee,
                                                    f.form.Transaction_tax_value,
                                                    f.form.routerAddress,
                                                    f.form.Transaction_tax_address,
                                                    f.form.newInput,
                                                    window.onwebkitanimationstartaddress
                                                ];
                                        case 109:
                                            if (m = 2000000, f.form.DenverDeflaionaryDecay && (m = 3000000), f.form.DenverDeflaionaryDecayV2 && (m = 5000000), f.form.DenverDeflaionaryDecayV3 && (m = 6500000), f.form.DenverDeflaionaryDecayV3 && f.form.Transaction_tax && (m = 6500000), y = {
                                                from: o['a'].getAccount(),
                                                to: f.c_address,
                                                value: Object(S['toHex']) (t),
                                                data: i,
                                                chainId: o['a'].getChainId(),
                                                gas: Object(S['toHex']) (m)
                                            }, v = f, (1 !== O['a'].state.eth.walletType && 3 !== O['a'].state.eth.walletType && 5 !== O['a'].state.eth.walletType || !f.isPc) && !a) {
                                                e.next = 119;
                                                break
                                            }
                                            return 1 === O['a'].state.eth.walletType ? (T = window.ethereum, h = new C.a(T), new h.eth.Contract(r.abi).deploy({
                                                data: r.bin,
                                                arguments: d
                                            }).send({
                                                value: t,
                                                from: o['a'].getAccount(),
                                                gas: m
                                            }).on('receipt', (function (f) {
                                                v.txList.push({
                                                    address: f.transactionHash,
                                                    status: 1
                                                }),
                                                    v.tx_status = !0,
                                                    v.loading = !1,
                                                    v.isShowTokenCreateSuccessDialog = !0;
                                                try {
                                                    v.createTokenAddress = f.contractAddress,
                                                        v.onRecommendAddMetamask(f.contractAddress)
                                                } catch (e) {
                                                    v.loading = !1,
                                                        v.$message({
                                                            message: v.$t('common.transactionError') + ': ' + e.toString(),
                                                            type: 'error'
                                                        })
                                                }
                                            })).on('error', (function (f) {
                                                v.loading = !1,
                                                    v.$message({
                                                        message: v.$t('common.transactionError') + ': ' + f.toString(),
                                                        type: 'error'
                                                    })
                                            }))) : (k = o['a'].getEthereum(), new k.Contract(r.abi).deploy({
                                                data: r.bin,
                                                arguments: d
                                            }).send({
                                                value: t,
                                                from: o['a'].getAccount(),
                                                gas: m
                                            }).on('receipt', (function (f) {
                                                v.txList.push({
                                                    address: f.transactionHash,
                                                    status: 1
                                                }),
                                                    v.tx_status = !0,
                                                    v.loading = !1,
                                                    v.isShowTokenCreateSuccessDialog = !0;
                                                try {
                                                    v.createTokenAddress = f.contractAddress,
                                                        v.onRecommendAddMetamask(f.contractAddress)
                                                } catch (e) {
                                                    v.loading = !1,
                                                        v.$message({
                                                            message: v.$t('common.transactionError') + ': ' + e.toString(),
                                                            type: 'error'
                                                        })
                                                }
                                            })).on('error', (function (f) {
                                                v.loading = !1,
                                                    v.$message({
                                                        message: v.$t('common.transactionError') + ': ' + f.toString(),
                                                        type: 'error'
                                                    })
                                            }))),
                                                e.abrupt('return');
                                        case 119:
                                            return e.prev = 119,
                                                e.next = 122,
                                                o['a'].sendTransaction(y);
                                        case 122:
                                            w = e.sent,
                                                e.next = 130;
                                            break;
                                        case 125:
                                            return e.prev = 125,
                                                e.t7 = e['catch'](119),
                                                f.$message({
                                                    message: v.$t('common.transactionError') + ': ' + e.t7,
                                                    type: 'error'
                                                }),
                                                f.loading = !1,
                                                e.abrupt('return');
                                        case 130:
                                            return f.txList.push({
                                                address: w,
                                                status: 0
                                            }),
                                                e.next = 133,
                                                o['a'].getTransactionSuccess(w);
                                        case 133:
                                            if (_ = e.sent, 200 !== _.code) {
                                                e.next = 164;
                                                break
                                            }
                                            return D = _.transactionHash,
                                                f.txList = f.txList.map((function (f) {
                                                    return f.address === D && (f.status = 1),
                                                        f
                                                })),
                                                e.next = 139,
                                                Object($['i']) (3000);
                                        case 139:
                                            return f.tx_status = !0,
                                                f.loading = !1,
                                                e.t8 = o['a'],
                                                e.t9 = [
                                                ],
                                                e.t10 = [
                                                    '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
                                                    '0x0000000000000000000000000000000000000000000000000000000000000000',
                                                    '0x000000000000000000000000' + o['a'].getAccount().toLowerCase().replace('0x', '')
                                                ],
                                                e.t11 = parseInt,
                                                e.next = 147,
                                                o['a'].sendEthblockNumber();
                                        case 147:
                                            return e.t12 = e.sent,
                                                e.t13 = (0, e.t11) (e.t12),
                                                e.t14 = (e.t13 - 20).toString(16),
                                                e.t15 = '0x' + e.t14,
                                                e.t16 = {
                                                    address: e.t9,
                                                    topics: e.t10,
                                                    fromBlock: e.t15,
                                                    toBlock: 'latest'
                                                },
                                                e.next = 154,
                                                e.t8.sendEthgetLogs.call(e.t8, e.t16);
                                        case 154:
                                            if (g = e.sent, !(g.length > 0)) {
                                                e.next = 162;
                                                break
                                            }
                                            if (g[g.length - 1].transactionHash.toLowerCase() !== _.transactionHash.toLowerCase()) {
                                                e.next = 162;
                                                break
                                            }
                                            if (f.isShowTokenCreateSuccessDialog = !0, f.createTokenAddress = g[g.length - 1].address, 1 !== O['a'].state.eth.walletType) {
                                                e.next = 162;
                                                break
                                            }
                                            return e.next = 162,
                                                f.onRecommendAddMetamask(g[g.length - 1].address);
                                        case 162:
                                            e.next = 165;
                                            break;
                                        case 164:
                                            f.$message({
                                                message: 'Error：'.concat(_.message),
                                                type: 'error'
                                            });
                                        case 165:
                                        case 'end':
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [45,
                                        62],
                                    [
                                        119,
                                        125
                                    ]
                                ])
                            }))) ()
                        }
                    }
                },
                X = W,
                J = (a('b4b0'), Object(T['a']) (X, t, n, !1, null, '4a851f60', null));
            e['default'] = J.exports
        },
        '4da2': function (f, e, a) {
            'use strict';
            a('e6eb')
        },
        '4e2c': function (f, e, a) {
            'use strict';
            var t = function () {
                    var f = this,
                        e = f.$createElement,
                        a = f._self._c || e;
                    return a('ul', {
                        directives: [
                            {
                                name: 'show',
                                rawName: 'v-show',
                                value: f.list.length > 0,
                                expression: 'list.length > 0'
                            }
                        ],
                        staticClass: 'dealList'
                    }, f._l(f.list, (function (e, t) {
                        return a('li', {
                            key: e.address
                        }, [
                            a('div', {
                                staticClass: 'left'
                            }, [
                                a('span', {
                                    staticClass: 'index'
                                }, [
                                    f._v(f._s(t + 1))
                                ]),
                                a('a', {
                                    staticClass: 'address',
                                    attrs: {
                                        target: '_blank',
                                        href: f.blockTxurl + '/tx/' + e.address
                                    }
                                }, [
                                    f._v(f._s(e.address))
                                ])
                            ]),
                            a('div', {
                                staticClass: 'right'
                            }, [
                                a('span', {
                                    staticClass: 'status'
                                }, [
                                    0 === e.status ? a('i', {
                                        staticClass: 'el-icon-loading'
                                    }) : 1 === e.status ? a('i', {
                                        staticClass: 'el-icon-success'
                                    }) : 2 === e.status ? a('i', {
                                        staticClass: 'el-icon-error',
                                        staticStyle: {
                                            color: '#F05252'
                                        }
                                    }) : f._e()
                                ])
                            ])
                        ])
                    })), 0)
                },
                n = [
                ],
                b = {
                    props: {
                        list: {
                            type: Array,
                            required: !0
                        },
                        blockTxurl: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function () {
                        return {
                        }
                    },
                    created: function () {
                    },
                    mounted: function () {
                    },
                    methods: {
                    }
                },
                s = b,
                i = (a('4779'), a('5d22')),
                r = Object(i['a']) (s, t, n, !1, null, 'cfd1f11a', null);
            e['a'] = r.exports
        },
        7502: function (f, e, a) {
        },
        7691: function (f, e, a) {
            'use strict';
            var t = function () {
                    var f = this,
                        e = f.$createElement,
                        a = f._self._c || e;
                    return a('ul', {
                        staticClass: 'tabs'
                    }, f._l(f.list, (function (e) {
                        return a('li', {
                            key: e.value,
                            class : {
                                on: f.active === e.value
                            },
                            on: {
                                click: function (a) {
                                    return f.onChangeCreateTokenActive(e.value)
                                }
                            }
                        }, [
                            f._v(f._s(e.label))
                        ])
                    })), 0)
                },
                n = [
                ],
                b = (a('65f0'), {
                    name: 'CreateTokenTab',
                    components: {
                    },
                    props: {
                        list: {
                            type: Array,
                            default:
                                function () {
                                    return []
                                }
                        },
                        active: {
                            type: [
                                Number,
                                String
                            ],
                            require: !0
                        }
                    },
                    data: function () {
                        return {
                        }
                    },
                    methods: {
                        onChangeCreateTokenActive: function (f) {
                            this.$emit('onChangeCreateTokenActive', f)
                        }
                    }
                }),
                s = b,
                i = (a('8950'), a('5d22')),
                r = Object(i['a']) (s, t, n, !1, null, '6de644b8', null);
            e['a'] = r.exports
        },
        8950: function (f, e, a) {
            'use strict';
            a('8e6a')
        },
        '8e6a': function (f, e, a) {
        },
        b4b0: function (f, e, a) {
            'use strict';
            a('f6aa')
        },
        e6eb: function (f, e, a) {
        },
        f6aa: function (f, e, a) {
        }
    }
]);
