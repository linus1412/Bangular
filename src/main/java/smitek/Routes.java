package smitek;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class Routes {

    @RequestMapping({
            "/events",
            "/events/{id:\\w+}",
            "/users",
            "/tags"
    })

    public String index() {
        return "forward:/index.html";
    }

}
