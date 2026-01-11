import { Edit, Edit2, Plus, Search, Trash2 } from "lucide-react"

function RecordTable() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h1 className="text-3xl font-bold text-gray-800 mb-2">Employee Management</h1>
    <p className="text-gray-600">
    {""}
    Manage employee records with Redux Toolkit
    </p>
    </div>
    {/* search and Button */}
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-1 relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20}/>
    <input className="w-full pl-10 pr-4 py-2 border border-gray-300
    rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" placeholder="search by name, email or position" />
    </div>
    <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2
    rounded-lg hover:bg-blue-700 transition-all hover:cursor-pointer">
    <Plus size={20}/>
    Add New Record
    </button>
    </div>
    </div>
    {/* Employee Table */}
    <div className="bg-white rounded-lg shadow-md overflow-md overflow-hidden">
    <div className="overflow-x-auto">
    <table className="w-full">
    <thead className="bg-gray-50 border-b border-gray-200">
    <tr>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    ID
    </th>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    NAME
    </th>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    EMAIL
    </th>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    PHONE
    </th>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    POSITION
    </th>
    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase">
    ACTIONS
    </th>
    </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
    {/* conditional rendering */}
    <tr className="px-6 py-12 text-center text-gray-500" col-span={6}>
      <td colSpan="6">No Record Found</td>
    </tr>
    {/* else */}
    {/* use map method */}
    <tr className="hover:bg-gray-50 transition-colors">
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">1</td>
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">John Doe</td>
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">john@gmail.com</td>
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">078863648</td>
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">Full stack developer</td>
    <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
    <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded 
    hover:bg-blue-700 transition-all text-sm font-medium hover:cursor-pointer">
    <Edit2 size={16}/>Edit</button>
    <button className="flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded 
    hover:bg-red-700 transition-all text-sm font-medium hover:cursor-pointer">
    <Trash2 size={16}/>Delete</button>
    </td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default RecordTable
