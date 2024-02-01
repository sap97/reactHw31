const Company = ({company})=>  {
  return (
    <div style={{border:'2px solid black',
    margin:'5px'}}>
      <h5>Company name:</h5>
      <p>Name: {company.name}</p>
      <p>Catch Phrase: {company.catchPhrase}</p>
      <p>BS: {company.bs}</p>
    </div>
  );
}

export default Company;
