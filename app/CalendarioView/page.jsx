"use client";

import React from 'react';
import SideBar from '../components/SideBar';

const pendingClasses = [
  {
    code: 'CS102-B',
    title: 'Advanced Data Structures',
    professor: 'Prof. Elena Vance',
    hours: '3.0 Hours',
    tags: ['Lab Req.']
  },
  {
    code: 'MAT405',
    title: 'Quantum Topology',
    professor: 'Dr. Julian Moore',
    hours: '2.0 Hours',
    tags: []
  },
  {
    code: 'ARC220',
    title: 'Sustainable Urbanism',
    professor: 'Ar. Sarah Chen',
    hours: '4.0 Hours',
    tags: ['Draft']
  },
  {
    code: 'HIS331',
    title: 'Byzantine Economics',
    professor: 'Prof. Marcus Aurel',
    hours: '3.0 Hours',
    tags: []
  }
];

const timeSlots = [
  '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

export default function SchedulePage() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      
      <SideBar />

      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
          <h2 className="text-xl font-bold text-indigo-950">Academic Space Monitor</h2>
          
          <div className="flex items-center gap-6">
            <div className="relative w-80">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search facilities..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-300 rounded-md text-sm outline-none transition-all" 
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Workspace Container */}
        <div className="flex-1 flex overflow-hidden p-6 gap-6">
          
          {/* Left Sidebar - Pending Items */}
          <div className="w-80 flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm shrink-0 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-2 text-indigo-950 font-bold text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
                </svg>
                Pending
              </div>
              <span className="bg-indigo-50 text-indigo-800 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                12 Items
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {pendingClasses.map((item, index) => (
                <div key={index} className="bg-indigo-50/30 border border-indigo-100 rounded-lg p-3 relative hover:shadow-md transition-shadow">
                  <div className="absolute top-3 right-3 text-gray-400 cursor-pointer hover:text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">{item.code}</p>
                  <h3 className="text-sm font-bold text-indigo-950 pr-6 mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-3">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {item.professor}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-white border border-gray-200 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded">
                      {item.hours}
                    </span>
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`text-[10px] font-semibold px-2 py-0.5 rounded ${tag === 'Draft' ? 'bg-indigo-100 text-indigo-700' : 'bg-white border border-gray-200 text-gray-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="w-full mt-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-xs font-bold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Add New Requirement
              </button>
            </div>
          </div>

          {/* Right Area - Calendar */}
          <div className="flex-1 flex flex-col min-w-0 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            
            {/* Calendar Controls */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Select Space</span>
                  <div className="relative">
                    <select className="appearance-none bg-white border border-gray-300 text-indigo-950 font-semibold text-sm rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer">
                      <option>Hall 402 - Advanced Lab</option>
                    </select>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="text-center w-32">
                  <span className="text-lg font-bold text-indigo-950 block leading-tight">Oct 23 -</span>
                  <span className="text-lg font-bold text-indigo-950 block leading-tight">Oct 27, 2023</span>
                </div>
                <button className="p-1.5 hover:bg-gray-100 rounded-md text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 border border-gray-300 bg-white text-indigo-950 font-bold text-xs px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors uppercase tracking-wide">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                  Filters
                </button>
                <button className="flex items-center gap-2 bg-indigo-950 text-white font-bold text-xs px-4 py-2.5 rounded-md hover:bg-indigo-900 transition-colors uppercase tracking-wide">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Finalize Schedule
                </button>
              </div>
            </div>

            {/* Calendar Grid Header */}
            <div className="flex border-b border-gray-200 shrink-0 bg-white">
              <div className="w-20 border-r border-gray-200 shrink-0"></div>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                <div key={day} className="flex-1 text-center py-3 border-r border-gray-200 last:border-r-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{day}</p>
                  <p className="text-xl font-bold text-indigo-950 mt-0.5">{23 + i}</p>
                </div>
              ))}
            </div>

            {/* Calendar Grid Body */}
            <div className="flex-1 overflow-y-auto bg-white relative">
              <div className="flex h-[800px] relative">
                
                {/* Time Axis */}
                <div className="w-20 border-r border-gray-200 shrink-0 flex flex-col">
                  {timeSlots.map((time, i) => (
                    <div key={i} className="flex-1 relative flex justify-end">
                      <span className="absolute -top-2.5 right-2 text-[10px] font-semibold text-gray-400">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Day Columns */}
                <div className="flex-1 flex relative">
                  {/* Grid Lines (Horizontal) */}
                  <div className="absolute inset-0 flex flex-col pointer-events-none">
                    {timeSlots.map((_, i) => (
                      <div key={i} className="flex-1 border-b border-gray-100 last:border-b-0"></div>
                    ))}
                  </div>

                  {/* Columns */}
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, dayIndex) => (
                    <div key={day} className="flex-1 border-r border-gray-100 last:border-r-0 relative">
                      
                      {/* Events for Monday */}
                      {dayIndex === 0 && (
                        <div className="absolute left-1 right-1 top-[10%] h-[20%] bg-indigo-50 border-l-4 border-indigo-600 rounded-sm p-2 shadow-sm">
                          <p className="text-xs font-bold text-indigo-950 leading-tight">CS201 Data Sci</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Prof. R. Deckard</p>
                          <p className="text-[10px] font-semibold text-indigo-800 absolute bottom-2 left-2">09:00 - 11:00</p>
                        </div>
                      )}

                      {/* Events for Tuesday */}
                      {dayIndex === 1 && (
                        <>
                          <div className="absolute left-1 right-1 top-[30%] h-[15%] bg-white border border-gray-200 border-l-4 border-indigo-600 rounded-sm p-2 shadow-sm z-10">
                            <p className="text-xs font-bold text-indigo-950 leading-tight">MAT101 Calc I</p>
                            <p className="text-[10px] text-gray-500 mt-0.5">Dr. Strange</p>
                          </div>
                        </>
                      )}

                      {/* Events for Wednesday */}
                      {dayIndex === 2 && (
                        <div className="absolute left-1 right-1 top-[20%] h-[30%] bg-indigo-50 border-l-4 border-indigo-600 rounded-sm p-2 shadow-sm">
                          <p className="text-xs font-bold text-indigo-950 leading-tight">BIO105 Genetics</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Dr. M. Gray</p>
                          <p className="text-[10px] font-semibold text-indigo-800 absolute bottom-2 left-2">10:00 - 13:00</p>
                        </div>
                      )}

                      {/* Events for Friday */}
                      {dayIndex === 4 && (
                        <div className="absolute left-1 right-1 top-[50%] h-[20%] bg-indigo-50 border-l-4 border-indigo-600 rounded-sm p-2 shadow-sm">
                          <p className="text-xs font-bold text-indigo-950 leading-tight">ENG202 Ethics</p>
                          <p className="text-[10px] text-gray-500 mt-0.5">Prof. X. Xavier</p>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}