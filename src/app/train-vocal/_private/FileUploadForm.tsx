export default function FileUpLoadForm() {
  return (
    <form
      action="http://localhost:3000/upload"
      method="post"
      encType="multipart/form-data"
    >
      <input
        type="file"
        name="audiofile"
        accept=".wav"
        required
        className="border"
      />
      <button type="submit">Upload File</button>
    </form>
  );
}
