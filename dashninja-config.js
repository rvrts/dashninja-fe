/*
 This file is part of Dash Ninja.
 https://github.com/elbereth/dashninja-fe

 Dash Ninja is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Dash Ninja is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Dash Ninja.  If not, see <http://www.gnu.org/licenses/>.

 */

// Either indicate if we are we on testnet (=1) or on mainnet (=0)
//var dashninjatestnet = 0;
// OR indicate the hostname for testnet (if the hostname the page is running is equal to this, it will switch to testnet)
var dashninjatestnethost = 'test.dashninja.pl';
var dashninjatestnetexplorer = 'test.explorer.dashninja.pl';

// Tor onion hostname
var dashninjator = 'seuhd5sihasshuqh.onion';

// Coin logos
var dashninjacoin = ['DASH','tDASH'];

// URLs
// Block info
var dashninjablockexplorer = [[["https://explorer.dashninja.pl/block/%%b%%","elberethzone's Dash Blockchain Explorer"],
                           ["http://chainz.cryptoid.info/dash/block.dws?%%b%%.htm","cryptoID Dash Blockchain Explorer"]],
                          [["https://test.explorer.dashninja.pl/block/%%b%%","Dash Ninja Testnet Blockchain Explorer"],
                           ["http://test.explorer.darkcoin.qa/block/%%b%%","Official Testnet Dash Blockchain Explorer"],
                           ["http://test.insight.masternode.io:3001/block/%%b%%","coingun's Testnet Dash Blockchain Explorer"]]];

// Address info
var dashninjamndetail = [[["https://www.dashninja.pl/mndetails.html?mnpubkey=%%a%%","Dash Ninja Masternode Detail"],
                          ["http://www.dashnodes.com/index/address/%%a%%","darkchild's Masternode Monitoring"]],
                         [["https://test.dashninja.pl/mndetails.html?mnpubkey=%%a%%","Dash Ninja Testnet Masternode Detail"]]];
var dashninjamndetailvin = [[["https://www.dashninja.pl/mndetails.html?mnoutput=%%a%%","Dash Ninja Masternode Detail"]],
                            [["https://test.dashninja.pl/mndetails.html?mnoutput=%%a%%","Dash Ninja Testnet Masternode Detail"]]];

var dashninjaaddressexplorer = [[["https://explorer.dashninja.pl/address/%%a%%","elberethzone's Dash Blockchain Explorer"],
                                 ["https://chainz.cryptoid.info/dash/address.dws?%%a%%.htm","cryptoID Dash Blockchain Explorer"]],
                                [["https://test.explorer.dashninja.pl/address/%%a%%","Dash Ninja Testnet Blockchain Explorer"],
                                 ["http://test.explorer.darkcoin.qa/address/%%a%%","Official Testnet Dash Blockchain Explorer"],
                                 ["http://test.insight.masternode.io:3001/address/%%a%%","coingun's Testnet Dash Blockchain Explorer"]]];
var dashninjatxexplorer = [[["http://explorer.dashninja.pl/tx/%%a%%","elberethzone's Dash Blockchain Explorer"],
                            ["https://chainz.cryptoid.info/dash/tx.dws?%%a%%.htm","cryptoID Dash Blockchain Explorer"]],
                           [["http://test.explorer.dashninja.pl/tx/%%a%%","Dash Ninja Testnet Blockchain Explorer"],
                            ["http://test.explorer.darkcoin.qa/tx/%%a%%","Official Testnet Dash Blockchain Explorer"]]];

// Search query
var dashninjaqueryexplorer = [[["https://explorer.dashninja.pl/search?q=%%q%%","elberethzone's Dash Blockchain Explorer"],
                             ["https://chainz.cryptoid.info/dash/search.dws?q=%%q%%","cryptoID Dash Blockchain Explorer"]],
                            [["https://test.explorer.dashninja.pl/search?q=%%q%%","Dash Ninja Testnet Blockchain Explorer"],
                             ["http://test.explorer.darkcoin.qa/search?q=%%q%%","Official Testnet Dash Blockchain Explorer"]]];

var dashninjamasternodemonitoring = ["https://www.dashninja.pl/masternodes.html?mnregexp=%%p%%#mnversions","https://test.dashninja.pl/masternodes.html?mnregexp=%%p%%#mnversions"];

var dashninjabudgetdetail = ["https://www.dashninja.pl/budgetdetails.html?budgetid=%%b%%","https://test.dashninja.pl/budgetdetails.html?budgetid=%%b%%"];

var dashninjagovernanceproposaldetail = ["https://www.dashninja.pl/proposaldetails.html?proposalhash=%%b%%","https://test.dashninja.pl/proposaldetails.html?proposalhash=%%b%%"];

// Blocks per day
var dashblocksperday = 553;