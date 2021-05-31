import React, { Fragment } from 'react';

const CryptoTable: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className="border-gray-200 w-full rounded bg-white overflow-x-auto">
                <table className="w-full leading-normal ">
                    <thead className="text-gray-600 text-xs font-semibold border-gray tracking-wider text-left px-5 py-3 bg-gray-100 hover:cursor-pointer uppercase border-b-2 border-gray-200">
                        <tr className="border-b border-gray">
                            <th
                                scope="col"
                                className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                <div className="inline-block">
                                    <div
                                        className="filter-asc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            marginBottom: '1px',
                                            borderBottom: '5px solid rgb(204, 204, 204)',
                                        }}
                                    ></div>
                                    <div
                                        className="filter-desc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            borderTop: '5px solid rgb(204, 204, 204)',
                                            marginTop: '1px',
                                        }}
                                    ></div>
                                </div>
                                Usuario
                            </th>
                            <th
                                scope="col"
                                className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                <div className="inline-block">
                                    <div
                                        className="filter-asc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            marginBottom: '1px',
                                            borderBottom: '5px solid rgb(204, 204, 204)',
                                        }}
                                    ></div>
                                    <div
                                        className="filter-desc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            borderTop: '5px solid rgb(204, 204, 204)',
                                            marginTop: '1px',
                                        }}
                                    ></div>
                                </div>
                                Email
                            </th>
                            <th
                                scope="col"
                                className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                Rol
                            </th>
                            <th
                                scope="col"
                                className="text-gray-dark border-gray border-b-2 border-t-2 border-gray-200 py-3 px-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                            >
                                <div className="inline-block">
                                    <div
                                        className="filter-asc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            marginBottom: '1px',
                                            borderBottom: '5px solid rgb(204, 204, 204)',
                                        }}
                                    ></div>
                                    <div
                                        className="filter-desc"
                                        style={{
                                            width: '0px',
                                            height: '0px',
                                            borderLeft: '5px solid transparent',
                                            borderRight: '5px solid transparent',
                                            borderTop: '5px solid rgb(204, 204, 204)',
                                            marginTop: '1px',
                                        }}
                                    ></div>
                                </div>
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 hover:cursor-pointer">
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            src="https://faces.design/faces/m/m11.png"
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">Héctor Avila</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span>hector@kbis.com.mx</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <ul>
                                    <li>
                                        <a href="#">Administrador</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900">
                                    Inactivo
                                </span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 hover:cursor-pointer">
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            src="https://faces.design/faces/m/m1.png"
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">Isidro Martínez</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span>isidro.ram.mar@gmail.com</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <ul>
                                    <li>
                                        <a href="#">Administrador</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900">
                                    Activo
                                </span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 hover:cursor-pointer">
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            src="https://faces.design/faces/m/m22.png"
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">Esteban</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span>esteban@kbis.com.mx</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <ul>
                                    <li>
                                        <a href="#">Auxiliar</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900">
                                    Activo
                                </span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 hover:cursor-pointer">
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            src="https://faces.design/faces/w/w12.png"
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">Sara</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span>sara@kbis.com.mx</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <ul>
                                    <li>
                                        <a href="#">Administrador</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-red-200 text-red-900">
                                    Inactivo
                                </span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 hover:cursor-pointer">
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img
                                            src="https://faces.design/faces/m/m21.png"
                                            alt=""
                                            className="w-full h-full rounded-full"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">Juan</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span>juan@kbis.com.mx</span>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <ul>
                                    <li>
                                        <a href="#">Auxiliar</a>
                                    </li>
                                </ul>
                            </td>
                            <td className="py-4 px-6 border-b border-gray-200 text-gray-900 text-sm ">
                                <span className="relative inline-block px-3 py-1 font-semibold leading-tight rounded-full bg-green-200 text-green-900">
                                    Activo
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="px-5 py-5 bg-white border-t flex flex-col sm:flex-row items-center sm:justify-between">
                <span className="text-xs sm:text-sm text-gray-900">Mostrando 1 al 5 de 5 registros.</span>
                <div className="inline-flex mt-2 sm:mt-0">
                    <button
                        disabled
                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r opacity-50 cursor-not-allowed"
                    >
                        Anterior
                    </button>
                    <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r opacity-50 cursor-not-allowed">
                        Siguiente
                    </button>
                </div>
            </div>
        </Fragment>
    );
};

export default CryptoTable;
