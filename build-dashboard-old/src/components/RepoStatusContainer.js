import React from 'react'
import BuildStatusCell from './BuildStatusCell'

const test_repo_names = ["12V_power_supply_tryout","16-channel-relay-tryout","2019-district-council-election-parser","3d-library","3d-model-store","3d-print-toolbelt","3D-printer-board","3d-printer-filament-weight-sensor","3d-printer-head-pcb","3d-printer-test2","3d-printer-tryout","3d-printer-tryout2","3d-scanner-tryout","3dprinter-config","5V_OCP_tryout","6DoF-arm","A4988_tryout","aastock-tile-tryout","acdc_switch_supply_tryout","adb_long_duration_recorder","ai-playlist","ai-thinker-tryout","allwinner-F1Cn00s-tryout","allwinner-H3-tryout","allwinner-v3s-tryout","AM2302-tryout","AMS1085_tryout","AMS1117_tryout","android-message-box-tryout","android_helloworld_api19","gatsbyjs-playlist"]

function RepoStatusContainer(){
  return(
    <>
      {
        test_repo_names.map(x => {
          return(
            <BuildStatusCell repo_name={x} />
          )
        })
      }
    </>
  )
}

export default RepoStatusContainer
