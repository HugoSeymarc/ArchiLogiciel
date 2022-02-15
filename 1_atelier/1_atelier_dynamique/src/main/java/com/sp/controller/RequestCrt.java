package com.sp.controller;

import com.sp.model.Card;
import com.sp.model.CardFormDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller // AND NOT @RestController
public class RequestCrt {

    @Value("${welcome.message}")
    private String message;

    @Autowired
      CardDao cardDao;

    @RequestMapping(value = { "/", "/index" }, method = RequestMethod.GET)
    public String index(Model model) {
  
        model.addAttribute("message", message);

        return "index";
    }

    @RequestMapping(value = { "/addCard"}, method = RequestMethod.GET)
    public String addponey(Model model) {
    CardFormDTO cardForm = new CardFormDTO();
    model.addAttribute("cardForm", cardForm);
      return "cardForm";
    }

    @RequestMapping(value = { "/addCard"}, method = RequestMethod.POST)
        public String addCard(Model model, @ModelAttribute("cardForm") CardFormDTO cardForm) {
        Card p=cardDao.addCard(cardForm.getName(),cardForm.getDescription(), cardForm.getFamily(), cardForm.getAffinity(), cardForm.getImgUrl(), cardForm.getEnergy(), cardForm.getHp(), cardForm.getDefence(), cardForm.getAttack(), cardForm.getPrice());
        model.addAttribute("card",p );
            return "cardView";
    }

    @RequestMapping(value = { "/list"}, method = RequestMethod.GET)
    public String viewList(Model model) {
  	  model.addAttribute("cardList",cardDao.getCardList() );
  	  return "cardViewList";
    }

}