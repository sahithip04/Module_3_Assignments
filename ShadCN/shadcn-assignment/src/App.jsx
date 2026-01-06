import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });
  const [submitted, setSubmitted] = useState(null);

  const images = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
    "https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=612x612&w=0&k=20&c=8xbZvMyptEaqMW46diKakhVgkPkAzBi5l7J1yveCZFk=",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70",
  ];
  const [current, setCurrent] = useState(0);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Card>
        <CardContent>
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <Textarea
            placeholder="Feedback"
            value={form.feedback}
            onChange={(e) => setForm({ ...form, feedback: e.target.value })}
          />

          <Button onClick={() => setSubmitted(form)}>Submit</Button>
        </CardContent>
      </Card>

      {submitted && (
        <Card>
          <CardContent>
            <p>Name: {submitted.name}</p>
            <p>Email: {submitted.email}</p>
            <p>Feedback: {submitted.feedback}</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent>
          <Tabs defaultValue="slide">
            <TabsList>
              <TabsTrigger value="slide">Slideshow</TabsTrigger>
            </TabsList>

            <TabsContent value="slide">
              <img
                src={images[current]}
                alt="Slideshow"
                className="w-full h-56 object-cover"
              />

              <Button
                onClick={() =>
                  setCurrent((current - 1 + images.length) % images.length)
                }
              >
                Previous
              </Button>

              <Button
                onClick={() => setCurrent((current + 1) % images.length)}
              >
                Next
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Input
            placeholder="New Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <Button
            onClick={() => {
              setTodos([...todos, { text: todo, done: false }]);
              setTodo("");
            }}
          >
            Add Todo
          </Button>

          {todos.map((t, i) => (
            <div key={i}>
              <Checkbox
                checked={t.done}
                onCheckedChange={() => {
                  const updated = [...todos];
                  updated[i].done = !updated[i].done;
                  setTodos(updated);
                }}
              />
              <span>{t.text}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
