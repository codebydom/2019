import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Save} from './Save';
import styled from 'styled-components';

const Styles = styled.div`
#main{
  text-align: center;
}
#center{
  display: inline-block;
}
.lds-ring {
  display: inline-block;
  
  width: 100px;
  height: 100px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  margin: 6px;
  border: 6px solid #cef;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #cef transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
label{
  font-size:18px;
  font-weight:900px;
}
td{
  max-width:400px;
  white-space: normal;
}

    `;
const theadStyle = {
  display:"block",
}
const tbodyStyle = {
  display:"block",
  overflow:"auto",
  height:"400px",
  width:"100%"
}
var saveList = [];
export class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleClear(){
    saveList = [];
    ReactDOM.render(
      <table>
      </table>,
      document.getElementById('saveListId'))
  }
  handleSave(e){
    //console.log(e);
    if (!saveList.includes(e) && e.ind!=null){
      saveList.push(e);
    }
    if (e.ind==null){
    const saveHtml = saveList.map( (litem)=>
      <tr className="table">
        <td >{litem.ind}: </td>
        <td >{litem.clinSig}, </td>
        <td >{litem.description}, </td>
        <td >{litem.gene}, </td>
        <td >{litem.location},  </td>
        <td >{litem.source},  </td>
        <td >{litem.variant} </td>
      </tr>
    )
    ReactDOM.render(
      <table>
          {saveHtml}
      </table>,
      document.getElementById('saveListId'))
    }
    
    //console.log(saveList);

  }
    
  getStyle(){
    document.getElementById("indH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[0].offsetWidth.toString()+"px");
    document.getElementById("geneH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[1].offsetWidth.toString()+"px");
    document.getElementById("locH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[2].offsetWidth.toString()+"px");
    document.getElementById("varH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[3].offsetWidth.toString()+"px");
    document.getElementById("srcH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[4].offsetWidth.toString()+"px");
    document.getElementById("webH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[5].offsetWidth.toString()+"px");
    document.getElementById("desH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[6].offsetWidth.toString()+"px");
    document.getElementById("clinH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[7].offsetWidth.toString()+"px");
    document.getElementById("saveH").setAttribute("style","width:"+document.getElementById("0").getElementsByTagName('td')[8].offsetWidth.toString()+"px");
  }
  handleSubmit(event) {
    console.log("Submitted Medical Term for Search");
    
    if(this.state.value!==""){
      document.getElementById("spinner").setAttribute("style","display:block");
      document.getElementById("display").setAttribute("style","display:none");
      ReactDOM.render(
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>,
        document.getElementById('spinner'));
      axios.get('https://grch37.rest.ensembl.org/phenotype/term/homo_sapiens/'+this.state.value+'?content-type=application/json').then(res => {
      if (res.data.length===0){
        alert("Make sure the value you entered is spelled correctly");
        ReactDOM.render(
          <div ></div>,
          document.getElementById('spinner'));
        return;
      }
      var i;
  	  var j;
      var list =[];
      
      for (i = 0; i < res.data.length; i++){ //for loop goes through the number of records selected by user
        var pid="";//single pid used for pub med links 
        var plist =[];//list of pmid when one record has mutiple
        //var refr="";//type of id used in link
        var locl ="https://useast.ensembl.org/Homo_sapiens/Location/View?r=";//this is link for the location 
        var llist = []; //list used in splicing data for location
        var chr="";//chromosome for the position, input for link
        var schr=[];//complex string chr
        var sschr=[];//complex string divider list
        llist = res.data[i].location.split(":");
        chr = llist[0];
        if (chr.length>2){
          chr="";
          schr=llist[0].split("CHR");
          sschr=schr[schr.length-1].match(/[a-zA-Z]+|[0-9]+/g)//split and create list based on non number to reveal the final chromosome position out of complex string
          chr=sschr[0]
        }
        locl =locl+chr+"%3A"+llist[1];//compiling the link for the location to be used
        if (res.data[i].attributes !== undefined){//some data objects do not have attributes, those that do need to have their pub med ids linked to a website, here we create that link
          //refr = res.data[i].attributes.external_reference
          if (res.data[i].attributes.external_reference !== undefined && res.data[i].attributes.external_reference.includes('PMID')){ //if there is an external reference, it continues
            if (res.data[i].attributes.external_reference.includes(',PMID')){//if there are multiple pmids, there needs to be multiple links
            //!!NOTED ERROR!! multiple gene rows put out due to double pmids, leading to innaccurate row counts from input because more rows are being added, need to address later
              plist = res.data[i].attributes.external_reference.split(",PMID:");
              plist[0]=plist[0].replace("PMID:","");
              for (j=0; j < plist.length; j++){//adds each pmid gene intp data field when list gets ob pushed to it
                plist[j]= "https://www.ncbi.nlm.nih.gov/pubmed/?term="+plist[j];
                var ob = {source:res.data[i].source,ref:"PMID:",link:plist[j],v:res.data[i].Variation,loco:"chr:"+chr+"   "+llist[1],loc:locl,d:res.data[i].description,g:res.data[i].attributes.associated_gene,cs:res.data[i].attributes.clinical_significance,test:1}//these are all the data points that will be inputed into the table as {{f."key"}} 
                list.push(ob);
                document.getElementById("spinner").setAttribute("style","display:none");
              }
            } else {
            pid = "https://www.ncbi.nlm.nih.gov/pubmed/?term="+res.data[i].attributes.external_reference.replace("PMID:","");
            var ob1 = {source:res.data[i].source,ref:"PMID:",link:pid,v:res.data[i].Variation,loco:"chr:"+chr+"   "+llist[1],loc:locl,d:res.data[i].description,g:res.data[i].attributes.associated_gene,cs:res.data[i].attributes.clinical_significance,test:2}//these are all the data points that will be inputed into the table as {{f."key"}}, this input is just for single pmid cases, the majority
            list.push(ob1);
            document.getElementById("spinner").setAttribute("style","display:none");
          }
          } else {
        pid = "https://www.ncbi.nlm.nih.gov/clinvar/?term="+res.data[i].Variation;//using rs id for weblink if there is no pmid available, usually used with clinvar sources
        var ob2 = {source:res.data[i].source,ref:"rs",link:pid,v:res.data[i].Variation,loco:"chr:"+chr+"   "+llist[1],loc:locl,d:res.data[i].description,g:res.data[i].attributes.associated_gene,cs:res.data[i].attributes.clinical_significance,test:3};//input for the list that will be returned to the
        list.push(ob2);
        document.getElementById("spinner").setAttribute("style","display:none");
        //ERRORS:
        //modules that are needed are introduced here
      //Next steps: Upload the web application to server, git hub account to show code
      //edit faulty links that come up during continuing use casese
      //fix error which occurs that ends the data table prior to record limit when coffee consumption is searched
      //figure out how to sort the result search for based on important characteristics
      // find out more about the end user, likely bioinformatician, what other tools they need to use
      }
      };
      
     }
    
    const listHtml = list.map((li,index)=>
    <tr id={index}>
     <td >{index}</td>
     <td ><p style={{wordWrap:'break-word'}}>{li.g}</p></td>
     <td ><a target="_blank" href={li.loc} rel="noopener noreferrer"><button className="btn btn-outline-primary" style={{wordWrap:'break-word'}}>{li.loco}</button></a></td>
     <td><a target="_blank" href={"https://www.ncbi.nlm.nih.gov/snp/"+li.v} rel="noopener noreferrer">{li.v}</a></td>
     <td >{li.source}</td>
     <td ><a target="_blank" href={li.link} rel="noopener noreferrer"><button href={li.link} target="_blank" className="btn btn-outline-primary">Click Here</button></a></td>
     <td >{li.d}</td>
     <td >{li.cs? li.cs : 'N/A'}</td>
     <td >
       <Save value={index} ind={index} gene={li.g} locationLink={li.loc} location={li.loco} variant={li.v} source={li.source} pubMedLink={li.link} description={li.d} clinSig={li.cs} onSaveClick={this.handleSave}></Save>
    </td>
    </tr>
     );
     document.getElementById("display").setAttribute("style","display:block");
    ReactDOM.render(
  <div>
  <table className="table table-bordered table-hover table-sm table-fixed" >
    <thead>
      <tr style={theadStyle}>
        <th scope="col" id="indH" className="text-center text-primary">#</th>
        <th id="geneH" className="text-center text-primary">Gene</th>
		    <th id="locH" className="text-center text-primary">Location</th>
		    <th id="varH" className="text-center text-primary">Variation</th>
		    <th id="srcH" className="text-center text-primary">Source</th>
		    <th id="webH" className="text-center text-primary">PubMed</th>
		    <th id="desH" className="text-center text-primary">Description</th>
		    <th id="clinH" className="text-center text-primary">Clin. Sig.</th>
        <th id="saveH" className="text-center text-primary">Save</th>
      </tr>
    </thead>
    <tbody style={tbodyStyle}>
      {listHtml}
    </tbody>
  </table>
    <button style={{margin:'5px'}}onClick={this.handleSave} className="btn btn-success" type="button">Show Saved</button>
    <button style={{margin:'5px'}} type="button" className="btn btn-danger" onClick={this.handleClear}>Clear Saved</button>
    <hr></hr>
    <div id="saveListId"></div>
  </div>,
      document.getElementById('dataList')
    );
    console.log("Parsed Response.");
    this.getStyle();
    }).catch(error => {
      alert(error + " Check console log for more details. I apologize for the inconvience.");
      document.getElementById("spinner").setAttribute("style","display:none");
    })
    ;
    event.preventDefault();
    
  } else{
    alert("You must enter a medical condition.")
  }

}
	render() {
		return (
    <Styles>
  <div id="main">
    <div id="center">
      <label className="control-label text-primary">	Enter Medical Condition</label>
      <div className="input-group">
        <form onSubmit={this.handleSubmit} >
        <input id="sinput" type="text" value={this.state.value} onChange={this.handleChange} className="form-control text-center" style={{float:"left",border:'1px solid lightgrey',borderRadius:'8px'}}/>
        <span className="input-group-btn ">
          <button type="submit" className="btn btn-primary btn-lg btn-block"  style={{float:"left",border:'1px solid lightgrey',borderRadius:'8px'}}>Search</button>
          <p className="small">to return genetic data associated with that condition</p>
        </span>
        </form>
      </div>
    </div>
    <div className="container" id="spinner"></div>
    <div data-spy="scroll" className="overflow-auto container" id="display">
      <div className="table-responsive" id="dataList">
      </div>
    </div>
  </div>
</Styles>)
  }
}

export default Search