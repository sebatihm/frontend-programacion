"use client";

import React from 'react';
import Sidebar from '../components/SideBar'; // Ajusta esta ruta según la ubicación de tu archivo

// --- Datos de las tarjetas de monitoreo ---
const monitoringCards = [
  {
    id: 'N-104',
    roomName: 'ROOM 104',
    location: 'NORTH WING, FLOOR 1',
    subject: 'Advanced Quantum Mechanics',
    prof: 'Prof. Elena Vance',
    status: 'ABSENT',
    statusClass: 'bg-red-100 text-red-600',
    headerClass: 'bg-indigo-900',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    id: 'A-202',
    roomName: 'STUDIO 202',
    location: 'ARTS COMPLEX, FLOOR 2',
    subject: 'Modern Sculpture II',
    prof: 'Prof. Julian Ricci',
    status: 'PRESENT',
    statusClass: 'bg-indigo-100 text-indigo-600',
    headerClass: 'bg-indigo-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    )
  },
  {
    id: 'M-G02',
    roomName: 'HALL G',
    location: 'MAIN HALL, GROUND FLOOR',
    subject: 'No Active Session',
    subjectClass: 'italic text-gray-400 font-normal',
    prof: '—',
    status: 'AVAILABLE',
    statusClass: 'bg-green-100 text-green-600',
    headerClass: 'bg-gray-200',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'L-301',
    roomName: 'LAB 301',
    location: 'LIBRARY WING, FLOOR 3',
    subject: 'Digital Humanities Lab',
    prof: 'Prof. Sarah Chen',
    status: 'OCCUPIED',
    statusClass: 'bg-yellow-100 text-yellow-700',
    headerClass: 'bg-indigo-900',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.607a2 2 0 01-.586 1.414l-4.22 4.22a2 2 0 00-.586 1.414V20a2 2 0 002 2h11a2 2 0 002-2v-8.243a2 2 0 00-.586-1.414l-4.22-4.22a2 2 0 01-.586-1.414V3.104" />
      </svg>
    )
  }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Sidebar Integrado */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Navbar */}
        <header className="flex flex-col sm:flex-row items-center justify-between p-4 lg:p-6 bg-white border-b border-gray-200 gap-4">
          <h2 className="text-xl font-bold text-indigo-950 w-full sm:w-auto">Academic Space Monitor</h2>
          <div className="flex items-center w-full sm:w-auto gap-4 lg:gap-6">
            <div className="relative flex-1 sm:w-64">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center"><svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
              <input type="text" placeholder="Search rooms, buildings..." className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
            </div>
          </div>
        </header>

        {/* Scrollable View */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          
          {/* LIVE MONITORING SECTION */}
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h3 className="text-indigo-950 font-bold text-lg">Live Monitoring</h3>
            </div>
            
            {/* Controles de Filtro y Botón */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
               <select className="text-sm border border-gray-200 rounded-md px-3 py-2 bg-white text-gray-600 outline-none flex-grow sm:flex-grow-0 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                 <option>Filter by Status</option>
               </select>
               
               <button className="bg-indigo-950 hover:bg-indigo-800 text-white px-4 py-2 rounded-md text-xs font-semibold flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  NEW INCIDENT
               </button>

               <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors hidden sm:block">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                 </svg>
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {monitoringCards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col relative group">
                {/* Header Color Area */}
                <div className={`h-20 ${card.headerClass} p-4`}>
                  <p className="text-white text-[11px] font-bold tracking-widest opacity-90 uppercase">
                    {card.roomName} ({card.id})
                  </p>
                </div>

                {/* Floating Icon Badge */}
                <div className="absolute top-14 right-4 bg-white p-2 rounded-xl shadow-lg border border-gray-100 text-indigo-950 z-10">
                  {card.icon}
                </div>

                {/* Card Body */}
                <div className="p-5 pt-8 flex-grow">
                  <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-1 uppercase">{card.location}</p>
                  <h4 className={`text-md font-bold text-indigo-950 mb-3 leading-tight ${card.subjectClass || ''}`}>
                    {card.subject}
                  </h4>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                      {/* Avatar Placeholder */}
                      <svg fill="currentColor" viewBox="0 0 24 24" className="text-gray-400"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">{card.prof}</span>
                  </div>

                  {/* Footer of card */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-2 text-gray-300">
                       <svg className="w-4 h-4 cursor-pointer hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       <svg className="w-4 h-4 cursor-pointer hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase ${card.statusClass}`}>
                      {card.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center text-xs text-gray-400 pt-4 border-t border-gray-100">
            <p>Showing 4 of 42 active monitoring points</p>
            <div className="flex gap-1">
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">‹</button>
              <button className="w-8 h-8 flex items-center justify-center bg-indigo-950 text-white rounded font-medium">1</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">2</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">3</button>
              <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded hover:bg-gray-50 transition-colors">›</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}