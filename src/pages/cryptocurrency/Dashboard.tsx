import React from 'react';
import Header from '../../components/cryptocurrency/dashboard/Header';
import MobileSideNav from '../../utils/MobileSideNav';

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <div className="grid grid-cols-6 gap-2">
            <div className="col-span-3">
                <Header />
            </div>
            <div className="col-start-1 col-span-3"></div>
            <div className="col-end-4 col-span-3">
                <MobileSideNav />
            </div>
        </div>
    );
};

export default Dashboard;
