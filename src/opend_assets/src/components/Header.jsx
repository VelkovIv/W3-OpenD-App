import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import homeImage from "../../assets/home-img.png";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Minter from "./Minter";
import Gallery from "./Gallery";
import { opend } from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";

function Header() {

  const [userOwnedGalary, setOwnedGalary] = useState();
  const [listingGalery, setListingGalery] = useState();

  async function getNFts() {
    const userNFTs = await opend.getOwnedNFTs(CURRENT_USER_ID);
    console.log(userNFTs);
    setOwnedGalary(<Gallery title="My NFTs" ids={userNFTs} role="collection" />);

    const listedNFTIds = await opend.getListedNFTs();
    console.log(listedNFTIds);
    setListingGalery(<Gallery title="Discover" ids={listedNFTIds} role="discover" />)

  };

  useEffect(() =>{
    getNFts()
  }, []);

  return (
    <BrowserRouter forceRefresh={true}>
    <div className="app-root-1">
      <header className="Paper-root AppBar-root AppBar-positionStatic AppBar-colorPrimary Paper-elevation4">
        <div className="Toolbar-root Toolbar-regular header-appBar-13 Toolbar-gutters">
          <div className="header-left-4"></div>
          <img className="header-logo-11" src={logo} />
          <div className="header-vertical-9"></div>
          <Link to="/">
            <h5 className="Typography-root header-logo-text">OpenD</h5>
          </Link>
          <div className="header-empty-6"></div>
          <div className="header-space-8"></div>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/discover">Discover</Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/minter">Minter</Link>
          </button>
          <button className="ButtonBase-root Button-root Button-text header-navButtons-3">
            <Link to="/collection">My NFTs</Link>
          </button>
        </div>
      </header>
    </div>
    <Switch>
      <Route exact path="/">
        <img className="bottom-space" src={homeImage} />
      </Route>
      <Route path="/discover">
        {listingGalery}
      </Route>
      <Route path="/minter">
        <Minter />
      </Route>
      <Route path="/collection">
        {userOwnedGalary}
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default Header;
