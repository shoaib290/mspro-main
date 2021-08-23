import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        // height: 216,
        zIndex:1,
        flexGrow: 1,
        maxWidth:120,
    },
});

export default function MultiSelectTreeView(props) {
    const { setNavBarData } = props; 
    
    const classes = useStyles();

    return (

        <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
        >
              {/* <TreeItem nodeId="1" label="Infocenter">
                  <TreeItem nodeId="2" label="Users" onClick={()=>setNavBarData(Users)}/>
                  <TreeItem nodeId="3" label="Vendors" onClick={()=>setNavBarData(Vendors)}/>
                  <TreeItem nodeId="4" label="Clients" onClick={()=>setNavBarData(Clients)}/>
                  <TreeItem nodeId="4" label="P O" onClick={()=>setNavBarData(PurchaseOrder)}/>
                  <TreeItem nodeId="4" label="Quotation" onClick={()=>setNavBarData(Quotation)}/>
                  <TreeItem nodeId="4" label="TimeSheet" onClick={()=>setNavBarData(TimeSheet)}/>
                  <TreeItem nodeId="4" label="ManPower" onClick={()=>setNavBarData(ManPower)}/>
                  <TreeItem nodeId="4" label="Delivery Notes" onClick={()=>setNavBarData(DeliveryNotes)}/>
              </TreeItem> */}

        </TreeView>
    );
}
