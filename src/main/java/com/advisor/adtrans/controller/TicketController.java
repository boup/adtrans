package com.advisor.adtrans.controller;

import com.advisor.adtrans.model.Ticket;
import com.advisor.adtrans.repository.CityRepository;

import com.advisor.adtrans.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.awt.print.Pageable;
@RestController
public class TicketController {

    @Autowired
    private TicketRepository ticketRepository;

    @Autowired
    private CityRepository cityRepository;


    @GetMapping("/city/{cityID}/ticket")
    public Page<Ticket> getTicketByCityID (@PathVariable(value = "cityID") Long cityID,
                                                Pageable pageable) {
        return ticketRepository.findByCityId(cityID, pageable);
    }


}