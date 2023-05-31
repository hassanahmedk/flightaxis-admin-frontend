import React, { useEffect, useState } from "react";
import { getPackages } from "../assets/api/packages";
// import AddPackage from "./Inner Components/AddPackage";
import Package from "./Inner Components/Package";
import PackageOptions from "./Inner Components/PackageOptions";
import Header from "./Inner Components/Header";

function Packages() {
  const [AllPackages, setAllPackages] = useState([]);
  const [packages, setPackages] = useState([]);
  const [packagesCity, setPackagesCity] = useState("");

  const [addPackageDialog, setAddPackageDialog] = useState(false);


  useEffect(() => {
    getPackages("all").then((data) => setAllPackages(data));
  }, []);

  function setCity(city){
    setPackagesCity(city);
    setPackages(()=>{
      return(
        AllPackages.filter(onePackage=>onePackage.leaving_from.includes(city))
      )
    })
  }

  function editPackageArray(_id, new_fare){
    setAllPackages(()=>{
      return(
        AllPackages.filter(onePackage=>{
          if(onePackage._id === _id){
            onePackage.total_fare = new_fare;
          }
          return onePackage;
        })
      )
    })
  }

  return (
    <div id="packages-section">
      <Header
        label="Package"
        count={packages.length}
        openAddPackageDialog={() => setAddPackageDialog(true)}
      />
      {/* <AddPackage
        open={addPackageDialog}
        handleClose={() => setAddPackageDialog(false)}
        updateArray={(newPackage) =>
          setPackages((prev) => {
            return [ ...prev, newPackage ];
          })
        }
      /> */}


      <PackageOptions packagesCity={packagesCity} setPackagesCity={setCity} />
        
      <div className="packages">
      {
          packages.length !== 0 && <h2 className="packages-city-heading">{packagesCity}  Packages</h2> 
      }
        {packages.map((flightPackage, index) => {
          return (
            <Package
              _id={flightPackage._id}
              packageNo={parseInt(index)+1}
              airline={flightPackage.airline}
              leaving_from={flightPackage.leaving_from}
              going_to={flightPackage.going_to}
              total_fare={flightPackage.total_fare}
              editPackageArray={editPackageArray}
            />
          );
        })}

        {
          packages.length === 0 && <div className="no-packages-msg">Please select city to show packages</div> 
        }
      </div>
    </div>
  );
}

export default Packages;
