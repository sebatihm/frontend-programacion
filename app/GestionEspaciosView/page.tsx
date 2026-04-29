"use client";

import React from 'react';
import SideBar from '../components/SideBar';

// --- Datos para la tabla de espacios ---
const spacesData = [
  {
    name: 'Grand Lecture Hall A1',
    code: 'BLD-A-101',
    type: 'Salon',
    typeClass: 'bg-blue-50 text-blue-600',
    capacity: '250 Pax',
    equipment: ['Projector', 'AC', 'Surround Sound'],
    status: 'Operational',
    statusClass: 'text-green-700',
    dotClass: 'bg-green-500'
  },
  {
    name: 'Advanced Chemistry Lab',
    code: 'BLD-B-204',
    type: 'Lab',
    typeClass: 'bg-purple-50 text-purple-600',
    capacity: '32 Pax',
    equipment: ['Fume Hoods', 'Emergency Shower'],
    status: 'Scheduled Check',
    statusClass: 'text-orange-600',
    dotClass: 'bg-orange-500'
  },
  {
    name: 'Digital Innovation Hub',
    code: 'BLD-C-010',
    type: 'Computing',
    typeClass: 'bg-orange-50 text-orange-600',
    capacity: '60 Pax',
    equipment: ['60 PCs', 'VR Gear', 'Projector'],
    status: 'Operational',
    statusClass: 'text-green-700',
    dotClass: 'bg-green-500'
  },
  {
    name: 'Physics Auditorium',
    code: 'BLD-A-002',
    type: 'Salon',
    typeClass: 'bg-blue-50 text-blue-600',
    capacity: '180 Pax',
    equipment: ['Projector', 'Smart Board'],
    status: 'Maintenance Required',
    statusClass: 'text-red-700',
    dotClass: 'bg-red-600'
  },
  {
    name: 'Bioinformatics Suite',
    code: 'BLD-B-312',
    type: 'Computing',
    typeClass: 'bg-orange-50 text-orange-600',
    capacity: '25 Pax',
    equipment: ['Workstations', 'Plotter'],
    status: 'Operational',
    statusClass: 'text-green-700',
    dotClass: 'bg-green-500'
  }
];

export default function SpacesPage() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Componente Sidebar importado */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Navbar */}
        <header className="flex flex-col sm:flex-row items-center justify-between p-4 lg:p-6 bg-white border-b border-gray-200 gap-4">
          <h2 className="text-xl font-bold text-indigo-950 w-full sm:w-auto">Academic Space Monitor</h2>
          <div className="flex items-center w-full sm:w-auto gap-4 lg:gap-6">
            <div className="relative flex-1 sm:w-72">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
              <input type="text" placeholder="Search spaces, codes, or equipment..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border-l pl-4 border-gray-200 cursor-pointer">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable View */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-xs text-gray-400 mb-4 font-medium">
            <span className="hover:text-gray-600 cursor-pointer">Campus</span>
            <span className="mx-2">›</span>
            <span className="hover:text-gray-600 cursor-pointer">Resources</span>
            <span className="mx-2">›</span>
            <span className="text-indigo-900 font-semibold">Space Management</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-indigo-950 mb-1">Academic Spaces</h1>
              <p className="text-sm text-gray-500">Manage and monitor 124 institutional learning environments.</p>
            </div>
            <button className="bg-indigo-950 hover:bg-indigo-900 text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              ADD NEW SPACE
            </button>
          </div>

          {/* Table Container */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-6 flex flex-col">
            
            {/* Filters Bar */}
            <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 text-gray-500 pr-4 border-r border-gray-200 hidden sm:flex">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  <span className="text-xs font-bold tracking-widest uppercase">Filters</span>
                </div>
                
                {/* Selectors */}
                <div className="flex gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <select className="w-full sm:w-auto appearance-none bg-white border border-gray-300 text-gray-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                      <option>All Buildings</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                  <div className="relative flex-1 sm:flex-none">
                    <select className="w-full sm:w-auto appearance-none bg-white border border-gray-300 text-gray-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                      <option>All Space Types</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                  <div className="relative flex-1 sm:flex-none hidden md:block">
                    <select className="w-full sm:w-auto appearance-none bg-white border border-gray-300 text-gray-700 text-sm rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                      <option>All Statuses</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 text-sm font-medium flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                Reset
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-5 whitespace-nowrap">Name / Code</th>
                    <th className="px-6 py-5 whitespace-nowrap">Type</th>
                    <th className="px-6 py-5 whitespace-nowrap">Capacity</th>
                    <th className="px-6 py-5 whitespace-nowrap">Equipment</th>
                    <th className="px-6 py-5 whitespace-nowrap">Maintenance Status</th>
                    <th className="px-6 py-5 text-right whitespace-nowrap">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {spacesData.map((space, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="font-bold text-indigo-950 text-sm">{space.name}</p>
                        <p className="text-[10px] font-mono text-gray-400 tracking-wider uppercase mt-0.5">{space.code}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-sm tracking-widest uppercase ${space.typeClass}`}>
                          {space.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1.5 text-gray-600 text-sm font-medium">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                          {space.capacity}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {space.equipment.map((item, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center gap-2 text-xs font-bold ${space.statusClass}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${space.dotClass}`}></div>
                          {space.status}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end gap-3 text-gray-400">
                          <button className="hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                          </button>
                          <button className="hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
              <span>Showing 1-5 of 124 Spaces</span>
              <div className="flex gap-1">
                <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">‹</button>
                <button className="w-7 h-7 flex items-center justify-center bg-indigo-950 text-white rounded font-bold">1</button>
                <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">2</button>
                <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">3</button>
                <span className="w-7 h-7 flex items-center justify-center">...</span>
                <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">25</button>
                <button className="w-7 h-7 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50">›</button>
              </div>
            </div>
          </div>

          {/* Expanded Alerts Section */}
          <div className="w-full">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-indigo-950">Alerts</h3>
                <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow">
                {/* Alert 1 */}
                <div className="bg-red-50 rounded-lg p-4 flex gap-3 items-start border border-red-100">
                  <div className="mt-0.5 text-red-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-950">BLD-A-002 Projector Failure</p>
                    <p className="text-xs text-gray-500 mt-1">Ticket #8842 • 2h ago</p>
                  </div>
                </div>
                {/* Alert 2 */}
                <div className="bg-amber-50 rounded-lg p-4 flex gap-3 items-start border border-amber-100">
                  <div className="mt-0.5 text-amber-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-indigo-950">Consumables low: Lab B</p>
                    <p className="text-xs text-gray-500 mt-1">Stock check requested</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}