import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BeerNew() {

    const [form, setForm] = useState({ name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" })

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name: form.name, tagline: form.tagline, description: form.description, first_brewed: form.first_brewed, brewers_tips: form.brewers_tips, attenuation_level: form.attenuation_level, contributed_by: form.contributed_by })
            .then(response => {
                navigate("/beers")
            })
            .catch(err => console.log("error en new: ", err))

    }

    return (
        <>
            <Navbar />
            <h1>Create a new beer</h1>
            <form onSubmit={submitHandler}>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control" id="floatingInputName" />
                    <label htmlFor="floatingInputName">Name</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} type="text" className="form-control" id="floatingInputTagline" />
                    <label htmlFor="floatingInputTagline">Tagline</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="form-control" id="floatingInputDescription" rows="3" />
                    <label htmlFor="floatingInputDescription">Description</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.first_brewed} onChange={(e) => setForm({ ...form, first_brewed: e.target.value })} type="text" className="form-control" id="floatingInputBrewed" />
                    <label htmlFor="floatingInputBrewed">First brewed</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.brewers_tips} onChange={(e) => setForm({ ...form, brewers_tips: e.target.value })} type="text" className="form-control" id="floatingInputTips" />
                    <label htmlFor="floatingInputTips">Brewers tips</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.attenuation_level} onChange={(e) => setForm({ ...form, attenuation_level: e.target.value })} type="number" className="form-control" id="floatingInputAttenuation" />
                    <label htmlFor="floatingInputAttenuation">Attenuation level</label>
                </div>
                <div className="form-floating w-50 mx-auto mb-3">
                    <input value={form.contributed_by} onChange={(e) => setForm({ ...form, contributed_by: e.target.value })} type="text" className="form-control" id="floatingInputContribution" />
                    <label htmlFor="floatingInputContribution">Contributed by</label>
                </div>
                <button type="submit" className="btn btn-info">Add beer</button>
            </form>

        </>
    )
}