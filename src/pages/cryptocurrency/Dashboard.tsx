import React from 'react';
import Content from '../../components/cryptocurrency/dashboard/Content';
import CryptoTable from '../../components/cryptocurrency/dashboard/CryptoTable';
import Header from '../../components/cryptocurrency/dashboard/Header';
// import MobileSideNav from '../../utils/MobileSideNav';

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <div className="grid grid-cols-6 gap-2">
            <div className="col-span-6">
                <Header />
            </div>
            <div className="col-span-6">
                <div className="section contentWrapper pt-1">
                    <Content />
                    <CryptoTable />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
