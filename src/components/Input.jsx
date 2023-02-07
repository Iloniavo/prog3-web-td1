export default function Input({setDescription, description }) {
    return (
        <input type="text" data-testid = "input"  placeholder="Add..." value={description} onChange={(e) => setDescription(e.target.value)} />
    )
};
