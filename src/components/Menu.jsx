const Menu = ({ setPage }) => {

  const onClickDashboard = () => {
    console.log('clicking dashboard');
    setPage('dashboard');
  }

  return (
    <div className='lg:p-10'>
      <button className="hover:underline font-bold border-2 border-black p-2 mx-10" onClick={onClickDashboard}>Dashboard</button>
    </div>
  );
}

export default Menu;
