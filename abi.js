let abi =
[
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "tok",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "start_t",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "start_hc_reserve",
         "type": "uint256"
       },
       {
         "internalType": "bool",
         "name": "testing",
         "type": "bool"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "internalType": "address[]",
         "name": "recipients",
         "type": "address[]"
       },
       {
         "indexed": false,
         "internalType": "uint256[]",
         "name": "split_percents",
         "type": "uint256[]"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "hc_submit",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "hc_decay",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "token_virtual_mint",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256[]",
         "name": "tokens_mined",
         "type": "uint256[]"
       }
     ],
     "name": "Mine",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "indexed": true,
         "internalType": "bytes32",
         "name": "previousAdminRole",
         "type": "bytes32"
       },
       {
         "indexed": true,
         "internalType": "bytes32",
         "name": "newAdminRole",
         "type": "bytes32"
       }
     ],
     "name": "RoleAdminChanged",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "account",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "sender",
         "type": "address"
       }
     ],
     "name": "RoleGranted",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "account",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "sender",
         "type": "address"
       }
     ],
     "name": "RoleRevoked",
     "type": "event"
   },
   {
     "inputs": [],
     "name": "DEFAULT_ADMIN_ROLE",
     "outputs": [
       {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "EMISSION_COEFF_1",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "EMISSION_COEFF_2",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "FINAL_PRINT_RATE",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "HC_RESERVE_DECAY_TIME",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "MINEABLE_TOKENS",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "ONE_KNS",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "RECENT_BLOCK_LIMIT",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "TOTAL_EMISSION_TIME",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address[]",
         "name": "recipients",
         "type": "address[]"
       },
       {
         "internalType": "uint256[]",
         "name": "split_percents",
         "type": "uint256[]"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_number",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_hash",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "target",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "pow_height",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "nonce",
         "type": "uint256"
       }
     ],
     "name": "check_pow",
     "outputs": [],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       }
     ],
     "name": "getRoleAdmin",
     "outputs": [
       {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "internalType": "uint256",
         "name": "index",
         "type": "uint256"
       }
     ],
     "name": "getRoleMember",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       }
     ],
     "name": "getRoleMemberCount",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "current_time",
         "type": "uint256"
       }
     ],
     "name": "get_background_activity",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "hc_decay",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "token_virtual_mint",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "t",
         "type": "uint256"
       }
     ],
     "name": "get_emission_curve",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "hc",
         "type": "uint256"
       }
     ],
     "name": "get_hash_credits_conversion",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "dt",
         "type": "uint256"
       }
     ],
     "name": "get_hc_reserve_multiplier",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "pure",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "miner",
         "type": "address"
       }
     ],
     "name": "get_pow_height",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address[]",
         "name": "recipients",
         "type": "address[]"
       },
       {
         "internalType": "uint256[]",
         "name": "split_percents",
         "type": "uint256[]"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_number",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_hash",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "target",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "pow_height",
         "type": "uint256"
       }
     ],
     "name": "get_secured_struct_hash",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "pure",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       }
     ],
     "name": "grantRole",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       }
     ],
     "name": "hasRole",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "hc_reserve",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "is_testing",
     "outputs": [
       {
         "internalType": "bool",
         "name": "",
         "type": "bool"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "last_mint_time",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address[]",
         "name": "recipients",
         "type": "address[]"
       },
       {
         "internalType": "uint256[]",
         "name": "split_percents",
         "type": "uint256[]"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_number",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_hash",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "target",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "pow_height",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "nonce",
         "type": "uint256"
       }
     ],
     "name": "mine",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       }
     ],
     "name": "renounceRole",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "bytes32",
         "name": "role",
         "type": "bytes32"
       },
       {
         "internalType": "address",
         "name": "account",
         "type": "address"
       }
     ],
     "name": "revokeRole",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "start_time",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address[]",
         "name": "recipients",
         "type": "address[]"
       },
       {
         "internalType": "uint256[]",
         "name": "split_percents",
         "type": "uint256[]"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_number",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "recent_eth_block_hash",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "target",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "pow_height",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "nonce",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "current_time",
         "type": "uint256"
       }
     ],
     "name": "test_mine",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "current_time",
         "type": "uint256"
       }
     ],
     "name": "test_process_background_activity",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "token",
     "outputs": [
       {
         "internalType": "contract IMintableERC20",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "token_reserve",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "seed",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "secured_struct_hash",
         "type": "uint256"
       },
       {
         "internalType": "uint256",
         "name": "nonce",
         "type": "uint256"
       }
     ],
     "name": "work",
     "outputs": [
       {
         "internalType": "uint256[11]",
         "name": "work_result",
         "type": "uint256[11]"
       }
     ],
     "stateMutability": "pure",
     "type": "function"
   }
]

module.exports = abi;
