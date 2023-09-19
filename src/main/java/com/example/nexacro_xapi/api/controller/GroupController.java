package com.example.nexacro_xapi.api.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.nexacro_xapi.api.service.GroupService;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.GroupEntity;
import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.example.nexacro_xapi.entity.response.Dataset;
import com.example.nexacro_xapi.entity.response.ResponseEntity;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.PlatformException;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("groups")
public class GroupController {

	@Autowired
	private GroupService groupService;

	@GetMapping("")
	public String getList(HttpServletRequest request, Model model) throws IOException, PlatformException {
		List<Map<String, String>> groups = new ArrayList<>();
		groups = groupService.getList(null);

		List<ColumnEntity> columns = NexacroConvert.convertEntityToColumn(new GroupEntity());
		List<Dataset> datasets = new ArrayList<>();
		Dataset dataset = new Dataset();
		dataset.setColumns(columns);
		dataset.setRows(groups);
		dataset.setId("IDDataset");

		datasets.add(dataset);
		ResponseEntity entity = new ResponseEntity(0, "SUCCESS", datasets);
		model.addAttribute("data", entity);

		return "nexacroView";
	}

	@PostMapping("/create")
	public String create(HttpServletRequest request, Model model) throws IOException, PlatformException {
		Map<String, String> groupInfo = new HashMap<>();
		int nErrorCode = 0;
		String strErrorMsg = "START";
		groupInfo.put("title", NexacroConvert.getRequestVariable(request, "titleGroup"));
		boolean result = groupService.create(groupInfo);
		if (result) {
			strErrorMsg = "Tạo mới thành công !";
		} else {
			nErrorCode = -1;
			strErrorMsg = "Tạo mới không thành công !";
		}
		PlatformData senddata = new PlatformData();
		VariableList varList = senddata.getVariableList();
		varList.add("ErrorCode", nErrorCode);
		varList.add("ErrorMsg", strErrorMsg);
		return "nexacroView";
	}

}
