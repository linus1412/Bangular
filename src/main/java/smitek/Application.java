package smitek;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
// find @Component (including @Configuration)
@ComponentScan
// switches on reasonable default behaviors based on the content of your classpath
@EnableAutoConfiguration
public class Application {

    public static void main(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(Application.class);
        EventRepository repository = context.getBean(EventRepository.class);

        // save a couple of customers
        repository.save(new Event("Christmas"));
        repository.save(new Event("Olly's Birthday"));
        repository.save(new Event("Tuesday"));
        repository.save(new Event("Zach's first word"));
        repository.save(new Event("Pancake Day"));
    }

}
