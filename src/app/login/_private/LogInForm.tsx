export default function LogInForm() {
  return (
    <form action="http://localhost:3000/login" method="post">
      <label htmlFor="userId">사용자 id</label>
      <input type="text" className="border" name="userId" />
      <label htmlFor="userPassword">사용자 비밀 번호</label>
      <input type="password" className="border" name="password" />
      <button type="submit">login</button>
    </form>
  );
}
