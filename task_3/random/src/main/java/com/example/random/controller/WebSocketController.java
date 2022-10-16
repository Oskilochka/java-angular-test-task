package com.example.random.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Controller
public class WebSocketController {
    private final SimpMessagingTemplate template;

    WebSocketController(SimpMessagingTemplate template) {
        this.template = template;
    }

    public String getRandomWord() {
        List<String> myList = Arrays.asList("stan", "kyle", "kenny", "cartman", "butters");

        Random r = new Random();
        int randomItem = r.nextInt(myList.size());
        return myList.get(randomItem);
    }

    @Scheduled(fixedRate = 5000)
    public void getAndSendWord() {
        this.template.convertAndSend("/message", getRandomWord());
    }

    @MessageMapping("/send/message")
    public void sendMessage() {
        getAndSendWord();
    }

}