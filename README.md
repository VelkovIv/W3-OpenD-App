# OpenD

Welcome to my new opend project and to the internet computer development community. By default, creating a new project adds this README and some template files the project directory. You can edit these template files to customize the project and to include your own code to speed up the development cycle.

To get started, you might want to explore the project directory structure and the default configuration file. Working with this project in your development environment will not affect any production deployment or identity tokens.

## ScreenShots
Home page
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/72e67379-90a2-44f7-b543-15d7934aa9d3)

Discover page
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/a29696f1-7232-49af-90d4-8d83aa11cd06)

Minter page
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/498e1485-4b7f-49c5-b796-de429e417e21)
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/20dc7493-c44b-4d00-a34a-5010bab95dce)
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/9d09289f-21dc-4b29-a714-43e1b238ee92)

My NFTs Page
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/3bce5f8b-d06c-4388-ad2f-f735036ae20d)
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/80f98a8b-0b3f-4502-993b-9c20b62636d8)
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/c3aaa259-2b53-4e22-a582-649874914584)

Discover Page after sell NFT 
![image](https://github.com/VelkovIv/W3-OpenD-App/assets/114020789/007d9a3b-53f5-4a51-acde-5b0660d701ad)










## To Install and Run the Project

1. start local dfx

```
dfx start --clean
```

2. Run NPM server

```
npm start
```

3. Deploy canisters

```
dfx deploy --argument='("CryptoDunks #123", principal "ejqzj-k7tjg-5aldz-4ieqx-hs2l2-aq3r2-ddskh-ylrsa-m3gnd-ozb3u-7ae", (vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}))'
```

4. Head to localhost

http://localhost:8080/

# Minter Else HTML

```
 <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Minted!
        </h3>
        <div className="horizontal-center">
        </div>
      </div>

```

# Loader HTML

```
<div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
```

# Button HTML

```
<div className="Chip-root makeStyles-chipBlue-108 Chip-clickable">
            <span
              onClick={}
              className="form-Chip-label"
            >
              Sell
            </span>
            </div>
```

# Price Input HTML

```
<input
        placeholder="Price in DANG"
        type="number"
        className="price-input"
        value={}
        onChange={}
      />
```

# Price Label HTML

```
<div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
          <span className="disChip-label">23 DANG</span>
        </div>
```

# Creating NFT for Testing

1. Mint an NFT on the command line to get NFT into mapOfNFTs:

```
dfx canister call opend mint '(vec {137; 80; 78; 71; 13; 10; 26; 10; 0; 0; 0; 13; 73; 72; 68; 82; 0; 0; 0; 10; 0; 0; 0; 10; 8; 6; 0; 0; 0; 141; 50; 207; 189; 0; 0; 0; 1; 115; 82; 71; 66; 0; 174; 206; 28; 233; 0; 0; 0; 68; 101; 88; 73; 102; 77; 77; 0; 42; 0; 0; 0; 8; 0; 1; 135; 105; 0; 4; 0; 0; 0; 1; 0; 0; 0; 26; 0; 0; 0; 0; 0; 3; 160; 1; 0; 3; 0; 0; 0; 1; 0; 1; 0; 0; 160; 2; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 160; 3; 0; 4; 0; 0; 0; 1; 0; 0; 0; 10; 0; 0; 0; 0; 59; 120; 184; 245; 0; 0; 0; 113; 73; 68; 65; 84; 24; 25; 133; 143; 203; 13; 128; 48; 12; 67; 147; 94; 97; 30; 24; 0; 198; 134; 1; 96; 30; 56; 151; 56; 212; 85; 68; 17; 88; 106; 243; 241; 235; 39; 42; 183; 114; 137; 12; 106; 73; 236; 105; 98; 227; 152; 6; 193; 42; 114; 40; 214; 126; 50; 52; 8; 74; 183; 108; 158; 159; 243; 40; 253; 186; 75; 122; 131; 64; 0; 160; 192; 168; 109; 241; 47; 244; 154; 152; 112; 237; 159; 252; 105; 64; 95; 48; 61; 12; 3; 61; 167; 244; 38; 33; 43; 148; 96; 3; 71; 8; 102; 4; 43; 140; 164; 168; 250; 23; 219; 242; 38; 84; 91; 18; 112; 63; 0; 0; 0; 0; 73; 69; 78; 68; 174; 66; 96; 130;}, "CryptoDunks #123")'
```

2. List the item into mapOfListings:

```
dfx canister call opend listItem '(principal "rno2w-sqaaa-aaaaa-aaacq-cai", 2)'
```

3. Get OpenD canister ID:

```
dfx canister id opend
```

4. Transfer NFT to OpenD:

```
dfx canister call rno2w-sqaaa-aaaaa-aaacq-cai transferOwnership '(principal "ryjl3-tyaaa-aaaaa-aaaba-cai", true)'
```

# Conneting to the Token Canister

1. Copy over the token declarations folder

2. Set the token canister id into the <REPLACE WITH TOKEN CANISTER ID>

```
const dangPrincipal = Principal.fromText("<REPLACE WITH TOKEN CANISTER ID>");
```
