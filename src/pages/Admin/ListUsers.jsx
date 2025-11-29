import { useEffect, useState } from "react";
import { SettingsIcon, UserXIcon } from "lucide-react";
import Toolbar from "../../components/ui/Toolbar";
import FullPageSpinner from "./../../components/ui/FullPageSpinner";
import BlurCircle from "../../components/BlurCircle";
import AddUserModal from "./Modals/User/AddUserModal";
import EditUserModal from "./Modals/User/EditUserModal";
import { deleteUser, getUsers } from "../../services/UserService";
import { showToast } from "../../helper/cooldownToast";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);

  // const handleSearch = (value) => setSearchValue(value);

  const headers = ["STT", "Họ tên", "Email", "SĐT", "Vai trò", "Thao tác"];

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      if (res) {
        setUsers(res.result);
      }
    } catch (error) {
      console.error("Lấy dữ liệu người dùng thất bại", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    const res = await deleteUser(userId);
    if (res) {
      showToast("Xóa người dùng thành công", { type: "success" });
      fetchUsers();
    }
  };

  if (loading) return <FullPageSpinner />;

  return (
    <>
      <div className="relative w-full mt-6">
        <BlurCircle top="0" left="0" />
        <Toolbar
          // onSearch={handleSearch}
          onAdd={() => setAddUser(true)}
        />

        <table className="w-full border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              {headers.map((h) => (
                <th key={h} className="p-2 font-medium first:pl-10">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 pl-10">{index + 1}</td>
                <td className="p-2">{user.fullName}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.phone}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1.5 rounded text-sm ${
                      user.role === "admin"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {user.role === "admin" ? "Quản trị" : "Khách"}
                  </span>
                </td>
                {/* <td className="p-2">
                  {timeFormatDuration(new Date(user.created_at), "dd/MM/yyyy")}
                </td> */}
                <td className="p-2 flex gap-4">
                  <span
                    className="cursor-pointer active:scale-95"
                    onClick={() => setEditUser(user)}
                  >
                    <SettingsIcon className="w-6 h-6" />
                  </span>
                  <span
                    className="cursor-pointer active:scale-95 text-red-500"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <UserXIcon className="w-6 h-6" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {addUser && (
        <AddUserModal
          isOpen={addUser}
          onSuccess={fetchUsers}
          onClose={() => setAddUser(false)}
        />
      )}

      {editUser && (
        <EditUserModal
          isOpen={editUser}
          user={editUser}
          onSuccess={fetchUsers}
          onClose={() => setEditUser(false)}
        />
      )}
    </>
  );
};

export default ListUsers;
