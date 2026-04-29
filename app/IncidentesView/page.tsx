"use client";

import React from 'react';
import SideBar from '../components/SideBar';

export default function IncidentsPage() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden">
      
      <SideBar />

      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        
        {/* Top Navbar */}
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shrink-0">
          <div className="flex-1 max-w-2xl">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input 
                type="text" 
                placeholder="Search spaces or incidents..." 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-300 rounded-md text-sm outline-none transition-all" 
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 relative">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-indigo-950 mb-1">Incident & Maintenance</h1>
                <p className="text-sm text-gray-500">Real-time oversight of academic infrastructure and reported conflicts.</p>
              </div>
              <button className="bg-indigo-950 hover:bg-indigo-900 text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                Report New Incident
              </button>
            </div>

            {/* Top Grid: Table and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Active Reports Table */}
              <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col">
                <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-indigo-950">Active Reports</h3>
                  <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-100">
                    <button className="px-3 py-1 bg-white shadow-sm text-xs font-bold text-indigo-600 rounded-md">All Issues</button>
                    <button className="px-3 py-1 text-xs font-bold text-gray-500 hover:text-gray-700 rounded-md">Unassigned</button>
                  </div>
                </div>
                
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Space ID</th>
                        <th className="px-6 py-4">Time Reported</th>
                        <th className="px-6 py-4">Priority</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {/* Row 1 */}
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="text-red-500">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </div>
                            <span className="font-bold text-sm text-indigo-950">Technical<br/>Failure</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">AUD-<br/>204-B</td>
                        <td className="px-6 py-4 text-xs text-gray-500">10:45 AM <span className="text-gray-400">(22m<br/>ago)</span></td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> HIGH
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-[11px] font-semibold">Pending</span>
                        </td>
                      </tr>
                      {/* Row 2 */}
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="text-indigo-500">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" /></svg>
                            </div>
                            <span className="font-bold text-sm text-indigo-950">Professor<br/>Absence</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">SEM-<br/>012</td>
                        <td className="px-6 py-4 text-xs text-gray-500">09:15 AM <span className="text-gray-400">(1h<br/>52m ago)</span></td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span> MEDIUM
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-indigo-500 text-white px-3 py-1 rounded text-[11px] font-semibold block w-max">In<br/>Progress</span>
                        </td>
                      </tr>
                      {/* Row 3 */}
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="text-amber-700">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </div>
                            <span className="font-bold text-sm text-indigo-950">Schedule<br/>Conflict</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">LAB-<br/>H-05</td>
                        <td className="px-6 py-4 text-xs text-gray-500">08:30 AM <span className="text-gray-400">(2h<br/>37m ago)</span></td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-600"></span> LOW
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-[11px] font-semibold">Resolved</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Report New Incident Form */}
              <div className="lg:col-span-1 bg-[#0f1743] rounded-xl shadow-lg p-6 flex flex-col text-white">
                <h3 className="text-xl font-bold mb-6">Report New Incident</h3>
                
                <form className="space-y-4 flex-1 flex flex-col">
                  <div>
                    <label className="block text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-1.5">Space ID</label>
                    <input 
                      type="text" 
                      placeholder="e.g. AUD-204" 
                      className="w-full bg-[#1b2352] border border-indigo-800/50 rounded-md px-4 py-2.5 text-sm text-white placeholder-indigo-300 focus:outline-none focus:border-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-1.5">Incident Type</label>
                    <div className="relative">
                      <select className="w-full appearance-none bg-[#1b2352] border border-indigo-800/50 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-400 cursor-pointer">
                        <option>Technical Failure</option>
                        <option>Infrastructure</option>
                        <option>Personnel</option>
                      </select>
                      <span className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-indigo-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-1.5">Priority</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button type="button" className="bg-[#1b2352] border border-indigo-800/50 hover:bg-indigo-900/50 py-2 rounded-md text-xs font-semibold text-indigo-200 transition-colors">LOW</button>
                      <button type="button" className="bg-[#1b2352] border border-indigo-800/50 hover:bg-indigo-900/50 py-2 rounded-md text-xs font-semibold text-indigo-200 transition-colors">MEDIUM</button>
                      <button type="button" className="bg-[#1b2352] border border-indigo-400 py-2 rounded-md text-xs font-semibold text-white shadow-sm">HIGH</button>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-1.5">Description</label>
                    <textarea 
                      placeholder="Briefly describe the issue..." 
                      className="w-full h-24 resize-none bg-[#1b2352] border border-indigo-800/50 rounded-md px-4 py-3 text-sm text-white placeholder-indigo-300 focus:outline-none focus:border-indigo-400"
                    ></textarea>
                  </div>

                  <button type="button" className="w-full bg-white text-indigo-950 font-bold py-3 rounded-md mt-4 hover:bg-gray-100 transition-colors">
                    Submit Report
                  </button>
                </form>
              </div>

            </div>

            {/* Maintenance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              
              {/* Card 1 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">Scheduled Today</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-indigo-950 text-lg mb-1">HVAC Maintenance</h4>
                  <p className="text-xs text-gray-500 mb-4">West Wing Auditorium Block</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                      {/* Avatar Placeholder */}
                      <svg className="w-full h-full text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-xs font-bold text-indigo-950">M. Rodriguez</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2.5 py-1 rounded">02:00 PM</span>
                  <button className="text-xs font-bold text-indigo-950 hover:text-indigo-700">View Ticket</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col relative overflow-hidden border-r-4 border-r-red-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">Infrastructure</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-indigo-950 text-lg mb-1">Projector Calibration</h4>
                  <p className="text-xs text-gray-500 mb-4">Science Lab 305 - Multiple Units</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-gray-200 rounded-full overflow-hidden">
                       <svg className="w-full h-full text-gray-400 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <span className="text-xs font-bold text-indigo-950">L. Thompson</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2.5 py-1 rounded">OVERDUE</span>
                  <button className="text-xs font-bold text-indigo-950 hover:text-indigo-700">View Ticket</button>
                </div>
              </div>

              {/* Card 3 - Add Job */}
              <div className="bg-gray-50/50 p-6 rounded-xl border border-dashed border-gray-300 shadow-sm flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 mb-4 group-hover:text-indigo-600 transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  <div className="absolute w-4 h-4 bg-white rounded-full flex items-center justify-center bottom-2 right-2 border border-gray-200 shadow-sm">
                    <svg className="w-3 h-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                </div>
                <h4 className="font-bold text-indigo-950 mb-2">Add Maintenance Job</h4>
                <p className="text-xs text-gray-500 max-w-[200px]">Plan upcoming repairs and inspections for the semester.</p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}