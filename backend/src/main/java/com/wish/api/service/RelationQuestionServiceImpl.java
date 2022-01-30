package com.wish.api.service;

import com.wish.api.dto.request.RelationQuestionUpdateReq;
import com.wish.db.entity.RelationQuestion;
import com.wish.db.repository.RelationQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;


@Service
public class RelationQuestionServiceImpl implements RelationQuestionService {

    @Autowired
    RelationQuestionRepository relationQuestionRepository;


    public int relationQuestionAddCnt1(RelationQuestionUpdateReq relationQuestionUpdateReq){

        Long parentId = relationQuestionUpdateReq.getParentId();
        Long childId = relationQuestionUpdateReq.getChildId();
        Optional<RelationQuestion> relation_ques = relationQuestionRepository.findByParentIdAndChildId(parentId, childId);

        if(!relation_ques.isPresent()){
            RelationQuestion relationQuestion2 = new RelationQuestion();
            relationQuestion2.setParentId(parentId);
            relationQuestion2.setChildId(childId);
            relationQuestion2.setCount(1);

            relationQuestionRepository.save(relationQuestion2);
        }
        else {
            RelationQuestion relationQuestion2 = relation_ques.get();
            int temp = relationQuestion2.getCount();
            temp++;
            relationQuestion2.setCount(temp);
            relationQuestionRepository.save(relationQuestion2);

        }

        return 0;
    }
}