package smitek;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @RequestMapping(method = RequestMethod.GET)
    public Iterable<Event> listEvents() {
        return eventRepository.findAll();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET)
    public Event getEvent(@PathVariable String id) {
        return  eventRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Event update(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public Event create(@RequestBody Event event) {
        return eventRepository.save(event);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String id) {
        eventRepository.delete(id);
    }

}
